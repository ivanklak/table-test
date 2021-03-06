import React from "react";
import Table from "./Table";
import * as axios from "axios";
import Preloader from "../Preloader/Preloader";
import Toolbar from "./Toolbar";
import SearchBar from "./SearchBar";
import { readSync } from "fs";
import CurrentUser from "./CurrentUser";
import ModeSelector from "./ModeSelector";

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModeSelected: false,
      isFetching: false,
      data: [],
      active: 0,
      term: ""
    };
  }

  async fetchData(url) {
    const responce = await fetch(url );
    const data = await responce.json();
    this.setState({
      isFetching: false,
      data,
    });
  }

  updateData(config) {
    this.setState(config);
  }

  modeSelectHandler = url => {
    this.setState({
      isModeSelected: true,
      isFetching: true
    })

    this.fetchData(url)
  }

  render() {
    if (!this.state.isModeSelected) {
      return (
        <div className={"container"}> 
        <ModeSelector onSelect={this.modeSelectHandler}/>
        </div>
      ) 
    }
    return (
      <>
        {this.state.isFetching ? (
          <Preloader />
        ) : (
          <div>
            <SearchBar
              term={this.state.term}
              data={this.state.data}
              update={this.updateData.bind(this)}
            />
            <Toolbar
              data={this.state.data}
              update={this.updateData.bind(this)}
            />
            <Table data={this.state.data} update={this.updateData.bind(this)} />
            <CurrentUser data={this.state.data} active={this.state.active} />
          </div>
        )}
      </>
    );
  }
}

export default TableContainer;
//   componentDidMount() {
//     axios
//       .get(
//         `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
//       )
//       .then(response => {
//         let data = response.data;
//         this.setState({
//           isFetching: false,
//           data: data
//         });
//       });
//   }

//   sort = sortField => {
//     const cloneData = [...this.state.data];
//     let direction = this.state.sort === -1 ? 1 : -1;

//     const sorted = [].slice.call(cloneData).sort((a, b) => {
//       if (a === b) {
//         return 0;
//       }
//       return a > b ? direction : direction * -1;
//     });

//     this.state.sort = !direction;
