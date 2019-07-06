import React from 'react';

class StorePush extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            name: this.props.item.name,
            employeeId:this.props.item.employeeId,
            sex:this.props.item.sex,
            age:this.props.item.age,
            designation:this.props.item.designation,
            qualification:this.props.item.qualification,
            yearsOfExperiance:this.props.item. yearsOfExperiance,
            imgsrc:this.props.item.imgsrc

        }
    }




    render()
    {
        console.log(this.state);
        return({})
    }
}
export default StorePush;