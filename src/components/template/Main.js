import "./Main.css";
import React from "react";

export default function Main(props) {
  return (
    <div className="">
      <main>
        <div>{props.children}</div>
      </main>
      </div>  );
}
