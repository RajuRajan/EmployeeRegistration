import React from 'react';
import HomeCard from './HomeCard';

class Home extends React.Component{
    constructor()
    {
      super();
      this.state={
        detail:JSON.parse(localStorage.getItem('detail'))
      }
       
    } 
    render(){

        return( 
          <div className="formbg">       
            <div className="row" id="pad" >
             <div className="col-xs-2">
               </div>
              {this.state.detail.map((element,index) => {
                                    return( 
                                        <div className="box-card" key={index}>                                          
                                           <HomeCard   item={element} keyitem={index} />
                                          </div>
                                        
                                    )
                             })}      
                              <div className="col-xs-2"></div>   
            </div>
            </div>
           
            
        )
    }

}
export default Home;