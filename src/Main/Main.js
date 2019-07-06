import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Main extends Component {
    render () {
        return (
                  
      <div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
     
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
    
     
      <div className="carousel-inner">
        <div className="item active">
          <img src="img1.jpg" alt="Los Angeles" width="100%" height="50%"/>
        </div>
    
        <div className="item">
          <img src="img2.jpeg" alt="Chicago"  width="100%" height="50%"/>
        </div>
    
        <div className="item">
          <img src="img1.jpg" alt="New York"  width="100%" height="50%"/>
        </div>
      </div>
    
     
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
      

    </div>
          
          
      <Link to="/login"><button className="buttonT buttonT1">Login</button></Link>
      <p className="textcenter">Welcome to Codingmart Employee Registration site</p>


      





</div>

        )
    }
}

export default Main;