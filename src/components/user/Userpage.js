import React, { Component } from 'react'
import axios from 'axios';
import UserSearch from '../search/UserSearch';
import Logout from "../auth/Logout"


export class Userpage extends Component {
   state = {
       users: [],
       isLoaded: false
   }
 componentDidMount () {
   axios.get('https://www.frontendcreatives.com/wp-json/wp/v2/users')
       .then(res => this.setState({
           users: res.data,
           isLoaded: true
          
       }))
       .catch(err => console.log(err))
   }
   render() {
       const {users, isLoaded} = this.state;
     
       return (
           <>
           <div>
          <Logout/>
             </div>
     
              {users.map(user =>
               <h2 key={user.id} user={user} className="user"> Hi {user.name}! </h2>
                
               )}

    
           
                   <UserSearch/>
            
          
            </>
       );
   }
}
export default Userpage


 
