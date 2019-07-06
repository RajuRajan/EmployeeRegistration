import React from 'react';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
           name: '',
           employeeId:'',
           sex:'',
           age:'',
           designation:'',
           qualification:'',
           yearsOfExperiance:'' ,
           imgsrc:'',
                                   
      };   
     
  }  
 EmployeeDetail = [];

 
 loadToLocal(){

    

    // this.EmployeeDetail.push(this.state);
    
    this.EmployeeDetail = JSON.parse(localStorage.getItem('detail'));   
    this.EmployeeDetail.push(this.state);
   
    const detailToStore = JSON.stringify(this.EmployeeDetail);
    console.log(detailToStore);
    localStorage.setItem('detail',detailToStore);
   
  }
  imageUpload = (e) => {
      const file = e.target.files[0];
      getBase64(file).then(base64 => {       
        this.setState({imgsrc:base64  });
        console.debug("file stored",base64);
      });
  };   

  render() {  
    return (     
      <div className="formbg">
      <div className="container" id="fontdesign"  style={{width:"1300px"}} >
    <div className="row">
   
      <div className="col-xs-4"></div>
      <div className="col-xs-4">
      <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
              </div>
        <div className="form-group">
          <label>EmployeeId:</label>
          <input type="text" className="form-control" value={this.state.employeeId}  onChange={(e) => this.setState({employeeId: e.target.value})}/>
        </div>
             
              <div className="radio">
              <label><input type="radio" name="optradio" onChange={(e) => this.setState({sex: e.target.value})} checked/>Male</label>
             
         
               <label><input type="radio" name="optradio"/>Female</label>
        </div>
              
              
              <div className="form-group">
                    <label>Designation:</label>
                    <input type="text" className="form-control" value={this.state.designation}  onChange={(e) => this.setState({ designation: e.target.value})} />
              </div>      
         <div className="form-group">
              <label>Age:</label>
               <input type="text" className="form-control"  value={this.state.age}  onChange={(e) => this.setState({age: e.target.value})}/>
         </div>  
                <div className="form-group">
                      <label>Qualification:</label>
                      <input type="text" className="form-control" value={this.state.qualification}  onChange={(e) => this.setState({qualification: e.target.value})}/>
                </div> 
         <div className="form-group">
                      <label>Years Of Experiance:</label>
                      <input type="text" className="form-control" value={this.state.yearsOfExperiance}  onChange={(e) => this.setState({ yearsOfExperiance: e.target.value})}/>
          </div>          
          <div className="form-group">
          <label>Employee Image:</label>
          <input 
                    type="file" 
                    id="imageFile" 
                    name='imageFile' 
                    onChange={this.imageUpload}
                    accept="image/*"/>
          </div>
      
        <button type="submit" onClick={e=>{
          e.preventDefault(); 
          this.loadToLocal()
          }} className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
   </div>   

  </div>
    )
  }
}
const getBase64 = (file) => {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
}
  export default Register;