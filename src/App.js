import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";

const Header = () => {
  return (
    <div>
      <h3 id="header">Namaste React</h3>
      <Button buttonName="click" />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
