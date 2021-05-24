import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Col, Form, FormGroup, Input, Button, Jumbotron, Container } from "reactstrap";
import { Link } from 'react-router-dom';



function PostEdit(props) {
    
    
	const [ title, setTitle ] = useState();
	const [ content, setContent ] = useState();
	const [ message, setMessage ] = useState({ success: 'Publish', message: '' });
	const history = useHistory();
	const addtoken = localStorage.getItem('token');
    const {id} = useParams();
  
    useEffect(
		() => {
			if (!addtoken) {
				history.push('/login');
			} else {
				axios.get('https://www.frontendcreatives.com/wp-json/wp/v2/posts/' + id )
					.then((res) => {
						if (res === undefined) {
							return '';
						}
				console.log(res);
						setTitle(res.data.title.rendered);
						setContent(res.data.content.rendered);
                    
                    console.log(res.data.title + res.data.content.rendered);
                    
					})
					.catch((err) => console.log(err));
			}
		},
		[ id,history, addtoken ]
	);
	
    
    
	const editData = (e) => {
		setMessage({ success: 'Process', message: 'Processing...' });
		e.preventDefault();
		const FormData = JSON.stringify({
        title: title,
        content: content,
        status: "publish"        
    })
		axios.post('https://www.frontendcreatives.com/wp-json/wp/v2/posts/' + id, FormData, {
				headers: {
					'Content-Type': "application/json",
					Authorization: `Bearer ${addtoken}`
				}
			})
			.then((res) => {
				setMessage({ success: 'Success', message: 'Post updated!' });
				setContent('');
				setTitle('');
                console.log( FormData)
               history.push('/userpage');
			})
			.catch((err) => {
				setMessage({ success: 'Error', message: 'Oops something is wrong!' });
			});
        
	};
    
 const deleteData = (e) => {
    e.preventDefault();
    setMessage({ success: 'Process', message: 'Request is processing...' });
    axios.delete('https://www.frontendcreatives.com/wp-json/wp/v2/posts/' + id , {
    headers: {
        'Content-Type': "application/json",
        Authorization: `Bearer ${addtoken}`
        }
    })
    .then((res) => {
    setMessage({ success: 'Success', message: 'Post deleted!' });
        console.log(res);
        history.push('/userpage');
    })
    .catch((err) => {
        setMessage({ success: 'Error', message: 'Oops something´s up!' });
        console.log(err);
});
}    

	return (
		
			 
          <>
        <Col xs="12" md={{size:6, offset: 3}}>
            <Form  key={id} className="form">
            <h1>EDIT POST</h1>
           <Jumbotron fluid>
           <Container fluid>
           <FormGroup> 
					<Input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Title"
					/>
            </FormGroup> 
					<br />
            <FormGroup> 
					<Input
						type="textarea" 
                        name="text"
						value={content}
						onChange={(e) => setContent(e.target.value)}
						placeholder="Content"
					/>
                </FormGroup> 
					<br/>
                </Container>
                    {message.message && <p>{ message.message}</p>}
					<Button color="info" onClick={editData}>
						UPDATE
					</Button>{' '}
                    <Button color="danger" onClick={deleteData} >
						DELETE
					</Button>
                </Jumbotron>
				</Form>
                </Col>
                     
				<Link to={'/userpage'}>
                     <Button outline color="secondary"  className="back">Back</Button></Link>
		 </>	
		
	);
}

export default PostEdit;

