import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import background from "./images/streetbackground.jpg";
import man from "./images/manwalking.gif";
import man2 from "./images/man2walking.gif";
import man3 from "./images/man3walking.gif";
import cycle from "./images/cycle.gif";
import cycle2 from "./images/cycle2.gif";

import "./App.css";

function App() {
  //---------------------------- man1
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateX(-90px)" },
      { transform: "translateX(350%)" },
    ],
    timing: {
      duration: 25000,
      iterations: Infinity,
    },
  });

  //---------------------------- man2
  const { ref: ref2 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0px)" },
      { transform: "translateX(-1550%)" },
    ],
    timing: {
      duration: 20000,
      iterations: Infinity,
    },
  });

  //---------------------------- man3
  const { ref: ref3 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0px)" },
      { transform: "translateX(800%)" },
    ],
    timing: {
      duration: 25000,
      iterations: Infinity,
      delay: 8000,
    },
  });
  //---------------------------- cycle
  const { ref: cycleRef } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0px)" },
      { transform: "translateX(3000px)" },
    ],
    timing: {
      duration: 12000,
      delay: 5000,
      iterations: Infinity,
    },
  });
  //---------------------------- cycle2
  const { ref: cycle2Ref } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0px)" },
      { transform: "translateX(-3000px)" },
    ],
    timing: {
      duration: 12000,
      delay: 1000,
      iterations: Infinity,
    },
  });

  return (
    <div className="container">
      <img
        alt="background"
        style={{ width: "100%", height: "100%", position: "relative" }}
        src={background}
      ></img>
      <img className="man" alt="man" ref={ref} src={man}></img>
      <img className="man2" alt="man2" ref={ref2} src={man2}></img>
      <img className="man3" alt="man3" ref={ref3} src={man3}></img>
      <img className="cycle" alt="cycle" ref={cycleRef} src={cycle}></img>
      <img className="cycle2" alt="cycle2" ref={cycle2Ref} src={cycle2}></img>
    </div>
  );
}

export default App;
