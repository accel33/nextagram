import React from "react";

const FlexibleButton = props => {
  const styles = { backgroundColor: props.color, fontSize: props.size + "px" };
  return <button style={styles}>{props.text}</button>;
  /* return (
    <button backgroundColor={props.color} fontSize={props.textSize}>
      {props.text}
    </button>
  ); */
};

export default FlexibleButton;

/* return (
    
  <div>
    <FlexibleButton text="Default" />
    <FlexibleButton text="Hmmm..." color="yellow" textSize={8} />
    <FlexibleButton text="Big and Bright" color="#0099ac" textSize={50} />
  </div>
); */
