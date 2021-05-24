import React from 'react';
import axios from 'axios';
import { Button } from "reactstrap";
import { useHistory } from 'react-router-dom';

function Logout() {
	
    const history = useHistory();
	
    
    const handleLogout = (e) => {
		e.preventDefault();
        
        
        const loginData = {
			username: "Frontendpedia",
			password: "DTaG6jEVq$C4gEvU1AAh6Iqv" 
            
		};
        
        axios.post('https://www.frontendcreatives.com/wp-json/jwt-auth/v1/token', loginData)
			.then((res) => {
                console.clear() 
			    localStorage.removeItem('token');
                localStorage.removeItem('nicename');
                localStorage.removeItem('displayname');
		          history.push('/');
                
			})
			.catch((err) => {
				console.log(err);
			});
	};
        
        
    
    
    
    
    
    
	return (
		<>
				
				
					<Button className="logout" onClick={handleLogout} outline color="secondary">
						LOGOUT
					</Button>
			
					
				
         </>
		
	);
}

export default Logout;
