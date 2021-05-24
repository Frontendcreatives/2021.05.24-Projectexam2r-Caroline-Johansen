import React from 'react';
import axios from 'axios';
import '../../App.css';
import { Link } from 'react-router-dom';
import {
  Card, CardBody,
  CardTitle, Button, ListGroup
} from 'reactstrap';
import parse from "html-react-parser";
import SearchIcon from '@material-ui/icons/Search';
import {Container, Jumbotron} from "reactstrap";




class UserSearch extends React.Component {
	
    state = {
		post: [],
		allPosts: []
	};
       
        
	componentDidMount() {
		axios.get("https://www.frontendcreatives.com/wp-json/wp/v2/posts", {
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
                    
				}
			})
			.then(({ data }) => {
				this.setState({
					post: data,
					allPosts: data
				});
			})
			.catch(err => {});
	}

	onChangeHandler = async e => {
		
		const post = this.state.allPosts.filter( item => {
       return item.title.rendered.toLowerCase().includes(e.target.value.toLowerCase())
            
        }
        );
    
		this.setState({ post });
	};

 
	

	render() {
		return (
            <>
                <Jumbotron fluid className="intro">
                <Container fluid>
             <h4> Create, search and update posts on Frontend Coding and Design </h4>

              <Link  to="/postcreate">
            <Button className="create"  color="info">
						 CREATE POST
            </Button></Link>
            </Container> 
           </Jumbotron>
            
			<div className="container">
				<div className="search-outer">
          
					<form
						role="search"
						method="get"
						id="searchform"
						className="searchform"
						action=""
					>
						
						<input
							type="search"
							onChange={this.onChangeHandler}
							name="search"
							id="search"
							placeholder="SEARCH..."
						/>
						<Button type="submit" id="searchsubmit">
							<i className="fa fa-search" aria-hidden="true" />
						</Button>
					</form>
               <SearchIcon/>
            </div>
            
            
				
            
          
				<ListGroup posts={this.state.post}>
					
					{this.state.post.map((item, index) => (
						<Card key={item.id} className="card">
                      
							 <CardBody className="cardbody">
								<CardTitle tag="h2" className="titlelink">{item.title.rendered}</CardTitle>
                                {parse(item.content.rendered)}
                                <Link key={item.id} to={"/postedit/" + item.id}>
                                <Button outline color="info" className="edit" >EDIT
                                </Button>{' '}</Link>
                              </CardBody>
						
                          </Card>
                        	
					))}
				
            </ListGroup>
          
			</div>
           </>
		);
	}
}

export default UserSearch;


    
