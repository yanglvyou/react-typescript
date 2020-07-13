import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";

const App: React.FC = () => {
  return (
    <div className="App">
      <Button autoFocus className="app">Hello</Button>
      <Button disabled>Disabled Button </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={()=>{alert('1')}}>
        Button PrimaryLarge
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Button DangerSmall
      </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">
        Baidu Link
      </Button>
      <Button btnType={ButtonType.Link} disabled href="https://www.baidu.com">
        Baidu Link
      </Button>
    </div>
  );
};

export default App;
