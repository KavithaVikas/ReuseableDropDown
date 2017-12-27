import React from "react";

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selectedValues:props.selectedValue
        }
        this.getOptions = this.getOptions.bind(this);
       
    }
    getOptions() {
        let elmOptions = [];
        let options = this.props.dropDownValues;
        for(let key in options){
            elmOptions.push(
                <option key = {elmOptions.length} value = {options[key]}>{options[key]} </option>
            )
        }
        return elmOptions;

    }
    nextDropDownValue(newValue){
        console.log(newValue.target.value);
        this.props.nextSelectedValue(newValue.target.value);

    }
    render() {
        return (
            <div>
                <select value={this.state.selectedValues} onChange={(next)=>this.nextDropDownValue(next)}>
                    {this.getOptions()}
                </select>
            </div>
        )
    }


}