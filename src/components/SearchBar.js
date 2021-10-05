import React from 'react';

class SearchBar extends React.Component{
    /*onInputChange(event){
        console.log(event.target.value);
    };*/

    state = { term : "" };
    /*
    this.state.term gives error if we use normal function because function becomes independent after using this.functionname,
    "this" instead of referencing class it becomes "undefined"
    Solution:
    1: bind using constructor
    constructor(){
        this.drive = this.drive.bind(then);
        // above code binds drive function to this.drive
    }
    2: use arrow function : because arrow function automatically binds elemnts of this
    3: use arrow function to call onFormSubmit()
    <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">

    */
    onFormSubmit= (event) => {
        event.preventDefault();
        //console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    };

    render(){
            return (
            <div className="ui segment"> 
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field"> 
                        <label>Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({term : e.target.value})} /> 
                    </div>
                </form>
            </div>
                
            );

    }
}
export default SearchBar;