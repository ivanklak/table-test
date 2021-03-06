import React from "react";
import s from "./sortButton.module.css";

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.sorted = {
      userPhoto: true,
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true
    };
  }

  //для сортировки
  //можно использовать библиотеку Lodash (метод orderBy) - это просто

  //import _ from "lodash"
  //   state = {
  //       data: [],
  //       sort: "asc", //desc
  //       sortField: "id"
  //   }
  //   sort = sortField => {
  //       const cloneData = this.state.data.concat()
  //       const sortType = this.state.sort === "asc" ? "desc" : "asc"

  //       const orderedData = _.orderBy(cloneData, sortField, sortType)

  //       this.setState({
  //           data: orderedData,
  //           sort: sortType,
  //           sortField
  //       })
  //   }

  //сортировка своими руками
  sort(type) {
    const { update, data } = this.props;
    const isSorted = this.sorted[type];
    let direction = isSorted ? 1 : -1;

    const sorted = [].slice.call(data).sort((a, b) => {
      if (a[type] === b[type]) {
        return 0;
      }
      return a[type] > b[type] ? direction : direction * -1;
    });

    this.sorted[type] = !isSorted;
    update({
      data: sorted,
      active: 0
    });
  }

  render() {
    return (
      <div>
        <button className={s.sortButton} onClick={() => this.sort("id")}>
          Sort by ID
        </button>
        <button className={s.sortButton} onClick={() => this.sort("firstName")}>
          Sort by Name
        </button>
        <button className={s.sortButton} onClick={() => this.sort("lastName")}>
          Sort by Last Name
        </button>
        <button className={s.sortButton} onClick={() => this.sort("email")}>
          Sort by Email
        </button>
        <button className={s.sortButton} onClick={() => this.sort("phone")}>
          Sort by Number
        </button>
      </div>
    );
  }
}
