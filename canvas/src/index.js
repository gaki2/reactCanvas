import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Canvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [ctx, setCtx] = useState();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.5;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 2.5;
    contextRef.current = context;

    setCtx(contextRef.current);
  }, []);

  console.log("ctx : ", ctx);

  return (
    <div className="canvas_wrap">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

function App() {
  return (
    <div>
      <Canvas></Canvas>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
