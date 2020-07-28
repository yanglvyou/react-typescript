import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import Transition from "./components/Transition/transition";
library.add(fas);

const App: React.FC = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="App">
      <Menu
        defaultIndex={"0"}
        // mode="vertical"
        defaultOpenSubMenus={["3"]}
        // onSelect={(index) => {
        //   alert(index);
        // }}
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
      <Button
        size="lg"
        onClick={() => {
          setShow(!show);
        }}
      >
        toggle
      </Button>
      <Transition in={show} timeout={300} animation="zoom-in-left">
        <div>
          <p>111111111111</p>
          <p>111111111111</p>
          <p>111111111111</p>
          <p>111111111111</p>
          <p>111111111111</p>
          <p>111111111111</p>
          <p>111111111111</p>
          <p>111111111111</p>
        </div>
      </Transition>
      <Transition in={show} timeout={300} animation="zoom-in-left" wrapper>
        <Button btnType="primary" size="lg">
          Large Button
        </Button>
      </Transition>
    </div>
  );
};

export default App;
