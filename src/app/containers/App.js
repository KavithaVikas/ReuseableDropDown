import React from "react";
import DropDown from "../components/DropDown";
import {data} from "../constants/config"


export default class App extends React.Component {
    constructor(){
        super();
        this.state={
            selectedValue:"INDIA"
        }
        this.updatedDropDownValue = this.updatedDropDownValue.bind(this);
        
    }
    updatedDropDownValue(newValue){
        console.log("APP PAGE", newValue);
        this.setState({
            selectedValue:newValue
        })
        console.log(this.state.selectedValue);
    }
    render() {
        
        return (
            <div>
                <h1> Hello World! </h1>
                <DropDown 
                     dropDownValues = {data} 
                     selectedValue = {this.state.selectedValue} 
                     nextSelectedValue={this.updatedDropDownValue}/>
            </div>
        )
    }
}