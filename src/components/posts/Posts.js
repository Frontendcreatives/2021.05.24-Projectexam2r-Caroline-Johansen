import React, { Component } from 'react'
import axios from 'axios';
import Postitem from './Postitem';


export class Posts extends Component {
   state = {
       posts: [],
       isLoaded: false
   }
 componentDidMount () {
   axios.get('https://www.frontendcreatives.com/wp-json/wp/v2/posts')
       .then(res => this.setState({
           posts: res.data,
           isLoaded: true
       }))
       .catch(err => console.log(err))
   }
   render() {
       const {posts, isLoaded} = this.state;
       return (
           <div>
               {posts.map(post =>
               <Postitem key={post.id} post={post}/>
               )}
           </div>
       );
   }
}
export default Posts