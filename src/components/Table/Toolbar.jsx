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
          Сортировать по ID
        </button>
        <button className={s.sortButton} onClick={() => this.sort("firstName")}>
          Сортировать по имени
        </button>
        <button className={s.sortButton} onClick={() => this.sort("lastName")}>
          Сортировать по фамилии
        </button>
        <button className={s.sortButton} onClick={() => this.sort("email")}>
          Сортировать по email
        </button>
        <button className={s.sortButton} onClick={() => this.sort("phone")}>
          Сортировать по телефону
        </button>
      </div>
    );
  }
}
