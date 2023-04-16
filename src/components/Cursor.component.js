import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [innerPosition, setinnerPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const circle = document.getElementById("circle");
    const circleRect = circle.getBoundingClientRect();
    const circleWidth = circleRect.width;
    const circleHeight = circleRect.height;
    const circleX = clientX - circleWidth / 2 + window.scrollX;
    const circleY = clientY - circleHeight / 2 + + window.scrollY;
    setPosition({ x: circleX, y: circleY });

    const innerCircle = document.getElementById("circle-inner");
    const innerCircleRect = innerCircle.getBoundingClientRect();
    const innerCircleWidth = innerCircleRect.width;
    const innerCircleHeight = innerCircleRect.height;
    const innerCircleX = clientX - innerCircleWidth / 2 + window.scrollX;
    const innerCircleY = clientY - innerCircleHeight / 2 + window.scrollY;
    setinnerPosition({ x: innerCircleX, y: innerCircleY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const circleStyle = {
    position: "absolute",
    left: position.x + "px",
    top: position.y + "px",
  };

  const innerCircleStyle = {
    position: "absolute",
    left: innerPosition.x + "px",
    top: innerPosition.y + "px",
  };

  return (<div class="cursor">
    <div style={circleStyle} id="circle" />
    <div style={innerCircleStyle} id="circle-inner" />
  </div>);
}
export default Cursor;
