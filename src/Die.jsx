import React from "react";
import "./Die.css";

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#ffffff",
  };

  return (
    <button
      style={styles}
      className="die"
      onClick={() => props.onClick(props.id)}
      aria-label={`Die showing ${props.value},  ${
        props.isHeld ? "held" : "not held"
      }`}
    >
      {props.value}
    </button>
  );
};

export default Die;
