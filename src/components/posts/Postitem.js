import React, { Component } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card" 

export class Postitem extends Component {
    
    
    
 
   render() {
       const { title } = this.props.post;
       const { content } = this.props.post;
       const { author } = this.props.post;
       
       
       return (
           <Card bg= "transparent"  className="mb-2">
            <Card.Header><Card.Title>{title.rendered} </Card.Title></Card.Header>
            <Card.Body>
            <Card.Text>{content.rendered}
            </Card.Text>
            <Card.Text><h6>Author ID:{author}</h6>
            </Card.Text>
            </Card.Body>
           </Card>
       )
   }
}
export default Postitem