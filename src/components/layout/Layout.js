import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbars } from '../header/Navbars';
import { Home } from '../home/Home';
import Login from '../auth/Login';
import Userpage from '../user/Userpage';
import PostCreate from '../posts/PostCreate';
import PostEdit from '../posts/PostEdit';
import Footer from "../footer/Footer"

function Layout() {
  return (
    <>
        
      <React.Fragment>
        <Router>
        <Navbars/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/login" component={Login} />
        <Route path="/userpage" component={Userpage} />
        <Route path="/postcreate" component={PostCreate} />
        <Route path="/postedit/:id" component={PostEdit} />
      </Switch>
        </Router>
</React.Fragment>  
       <Footer/>
   </>
  
  );
}

export default Layout;

