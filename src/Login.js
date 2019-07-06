import React from 'react';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';
import Home from './Home';
import Register from './Register';

class Login extends React.Component{

render(){
    return(
      <div className="row">
       <div>  
   <Router>
      <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
        <div className="navbar-header">
         <img className="navbar-brand" src="cm.png" width="150px"  />
       </div>
       <ul className="nav navbar-nav">
        
         <li id="fontdesign"><Link to="/home">Home</Link></li>
         <li id="fontdesign"><Link to="/register">Register</Link></li>
       
       </ul>
     </div>
   </nav>
   
  
         <Route exact path="/home" component={Home} />
         <Route exact  path="/register" component={Register}/>
        
      
         
          
           </div>
            </Router>
            </div>
           </div>
)
}
}

export  default Login;