import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Col, Form, FormGroup, Input, Button, Jumbotron, Container } from "reactstrap";
import { Link } from 'react-router-dom';


function PostCreate() {
	const [ title, setTitle ] = useState('');
	const [ content, setContent ] = useState('');
	const [ message, setMessage ] = useState({ success: 'Publish', message: '' });
    const addtoken = localStorage.getItem('token');
	const history = useHistory();
	
    
    
    useEffect(() => {
		if (!addtoken) {
			history.push('/login');
		}
	});
    
	
	const postData = (e) => {
		setMessage({ success: 'Process', message: 'Request is processing...' });
		e.preventDefault();
		
        const FormData = JSON.stringify({
        title: title,
        content: content,
        status: "publish"
    })
        
		
		axios.post("https://www.frontendcreatives.com/wp-json/wp/v2/posts", FormData, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${addtoken}`
				}
			})
        
			.then((res) => {
				setContent('');
				setTitle('');
                console.log( title + content )
                setMessage({ success: 'Success', message: title + " is published!" });
                history.push('/userpage');
			})
            .catch((err) => {
                setMessage({success:"Error", message:"Oops something is up!"})
            });
	};
	return (
		    <> 
          <Col xs="12" md={{size:6, offset: 3}}>
        
            <Form  onSubmit={postData} className="jumbo">
            <h1>CREATE POST</h1>

           
           <Jumbotron fluid >
           <Container fluid>
           <FormGroup> 
					<Input
						type="text" 
                        name="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Title"
					/>
            </FormGroup>
					<br />
            <FormGroup> 
					<Input
						type="textarea" 
                        name="content"
						value={content}
						onChange={(e) => setContent(e.target.value)}
						placeholder="Content"
					/>
                 </FormGroup>
					<br/>
                            
                            </Container>
                    {message.message && <p>{ message.message}</p>}
					<Button color="info">
						PUBLISH
					</Button>
                </Jumbotron>
				</Form>
                </Col>
                     
                     <Link to={'/userpage'}>
                     <Button outline color="secondary" className="back">Back</Button></Link>
				
			</>
		
	);
}

export default PostCreate;

