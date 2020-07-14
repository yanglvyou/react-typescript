import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

const App: React.FC = () => {
  return (
    <div className="App">
      <div>yang</div>
      <Menu
        defaultIndex={"0"}
        mode="vertical"
        defaultOpenSubMenus={["3"]}
        onSelect={(index) => {
          alert(index);
        }}
      >
        <MenuItem>cool link</MenuItem>
        <MenuItem disabled>cool link2 disabled</MenuItem>
        <MenuItem>cool link3</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
          <MenuItem>dropdown 3</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default App;
