import React from "react";
import Table from "./Table";
import * as axios from "axios";

class TableContainer extends React.Component {

    componentDidMount() {
        axios.get("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")
        .then(response => {
            console.log(response)
        })
    }
  render() {
    return (
        <div className="container">
            <Table />
        </div>
    ) 
  }
}

export default TableContainer;
