import React from "react";
import DropDown from "../components/DropDown"


export default class App extends React.Component {
    constructor(props){
        super(props);
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
        const data = ["INDIA", "JAPAN", "KOREA"];
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