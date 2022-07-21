import React from "react";
import OpenMenuIcon from "./OpenMenuIcon.svg";
import CloseMenuIcon from "./CloseMenuIcon.svg";
import NotSelectedIcon from "./NotSelectedIcon.svg";
import SelectedIcon from "./SelectedIcon.svg";
import "./dropdown-menu.css";

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    const { menu_label, menu_items, multiple } = this.props;
    this.state = {
      display: "none",
      menu_label,
      menu_items,
      multiple,
      selected: "",
      selected_mult: [],
    };
  }

  single_select(item) {
    this.setState({ selected: item.item_name });
    item.sel = true;
  }

  multiple_select(item) {
    if (!item.sel) {
      item.sel = !item.sel;
      let itemToAdd = [item.item_name, item.sel];

      this.setState((prevState) => ({
        selected_mult: [...prevState.selected_mult, itemToAdd],
      }));
    } else {
      let removedSelected = this.state.selected_mult.filter(
        (i) => i[0] !== item.item_name
      );

      this.setState({
        selected_mult: [...removedSelected],
      });

      item.sel = !item.sel;
    }
  }

  render() {
    const {
      menu_label,
      menu_items,
      display,
      selected,
      multiple,
      selected_mult,
    } = this.state;

    let arrow =
      display === "none" ? (
        <img className="img-class" src={OpenMenuIcon} alt="open menu icon" />
      ) : (
        <img className="img-class" src={CloseMenuIcon} alt="close menu icon" />
      );

    let menu;

    if (multiple) {
      menu = (
        <div className="dropdown-container">
          <fieldset
            onClick={() =>
              display === "none"
                ? this.setState({ display: "block" })
                : this.setState({ display: "none" })
            }
            className="dropdown-label"
            tabIndex="1"
          >
            <legend className="menu-label">{menu_label}</legend>
            {arrow}
            {selected_mult.map((item, index) =>
              typeof item[0] === "string"
                ? item[1] && index !== 0
                  ? ", ".concat(item[0])
                  : item[0]
                : ""
            )}
          </fieldset>

          <div style={{ display: display }} className="dropdown-menu">
            {menu_items.map((item, index) => (
              <button
                key={item.key}
                onClick={() => this.multiple_select(item)}
                className="dropdown-item"
              >
                {item.sel ? (
                  <img
                    className="img-class"
                    src={SelectedIcon}
                    alt="selected"
                  />
                ) : (
                  <img
                    className="img-class"
                    src={NotSelectedIcon}
                    alt="not selected"
                  />
                )}
                {item.item_name}
              </button>
            ))}
            <button
              onClick={() =>
                selected_mult !== []
                  ? this.setState({ selected_mult: [] })
                  : this.setState({ selected_mult: selected_mult })
              }
              className="dropdown-item-clear"
            >
              Clear Selection
            </button>
          </div>
        </div>
      );
    } else {
      menu = (
        <div className="dropdown-container">
          <fieldset
            onClick={() =>
              display === "none"
                ? this.setState({ display: "block" })
                : this.setState({ display: "none" })
            }
            className="dropdown-label"
            tabIndex="1"
          >
            <legend className="menu-label">{menu_label}</legend>
            {arrow}
            {selected}
          </fieldset>

          <div style={{ display: display }} className="dropdown-menu">
            {menu_items.map((item) => (
              <button
                key={item.key}
                onClick={() => this.single_select(item)}
                className="dropdown-item"
              >
                {item.item_name}
              </button>
            ))}
            <button
              onClick={() =>
                selected !== ""
                  ? this.setState({ selected: "" })
                  : this.setState({ selected: selected })
              }
              className="dropdown-item-clear"
            >
              Clear Selection
            </button>
          </div>
        </div>
      );
    }

    return <div className="dropdown-container">{menu}</div>;
  }
}

export default DropdownMenu;
