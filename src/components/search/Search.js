import React from 'react';
import axios from 'axios';
import '../../App.css';
import {
  Card, CardBody,
  CardTitle, ListGroup
} from 'reactstrap';
import { Link } from 'react-router-dom';
import parse from "html-react-parser";
import SearchIcon from '@material-ui/icons/Search';




class Search extends React.Component {
	state = {
		post: [],
		allPosts: []
	};

	componentDidMount() {
		axios
			.get('https://www.frontendcreatives.com/wp-json/wp/v2/posts', {
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
						<button type="submit" className="search">
						</button> 
					</form>
            <SearchIcon/>
				</div>
            
				<ListGroup posts={this.state.post}>
                
					
					{this.state.post.map((item, index) => (
						<Card key={item.id} className="card">
                        
                        <CardBody className="cardbody">	
							<Link className="titlelink" to="/Login">
							<CardTitle tag="h2">{item.title.rendered}</CardTitle>
                            </Link>
                                {parse(item.content.rendered)}
							     
                            </CardBody>
                           
                          </Card>
					))}
				
               </ListGroup>
			</div>
		);
	}
}

export default Search;



    
