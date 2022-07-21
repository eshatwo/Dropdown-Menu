import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DropdownMenu from "./Dropdown_Menu";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DropdownMenu
      menu_label="Fruits"
      menu_items={[
        { key: 1, item_name: "Apples", sel: false },
        { key: 2, item_name: "Strawberries", sel: false },
        { key: 3, item_name: "Watermelon", sel: false },
        { key: 4, item_name: "Kiwi", sel: false },
      ]}
      multiple={true}
    />
    <DropdownMenu
      menu_label="Favorite Sport"
      menu_items={[
        { key: 1, item_name: "Tennis", sel: false },
        { key: 2, item_name: "Soccer", sel: false },
        { key: 3, item_name: "Volley Ball", sel: false },
        { key: 4, item_name: "Gymnastics", sel: false },
        { key: 5, item_name: "Football", sel: false },
      ]}
      multiple={false}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
