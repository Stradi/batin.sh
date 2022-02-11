import React from "react";

import Loadable from "@loadable/component";

const Sketch = Loadable(() => import("react-p5"));
import p5 from "react-p5/node_modules/@types/p5";


interface SketchEvents {
  setup: (p5Instance: p5, canvasElement: Element) => void;
  draw?: (p5Instance: p5) => void;
  windowResized?: (p5Instance: p5) => void;
  preload?: (p5Instance: p5) => void;
  mouseClicked?: (p5Instance: p5) => void;
  mouseMoved?: (p5Instance: p5) => void;
  doubleClicked?: (p5Instance: p5) => void;
  mousePressed?: (p5Instance: p5) => void;
  mouseWheel?: (p5Instance: p5) => void;
  mouseDragged?: (p5Instance: p5) => void;
  mouseReleased?: (p5Instance: p5) => void;
  keyPressed?: (p5Instance: p5) => void;
  keyReleased?: (p5Instance: p5) => void;
  keyTyped?: (p5Instance: p5) => void;
  touchStarted?: (p5Instance: p5) => void;
  touchMoved?: (p5Instance: p5) => void;
  touchEnded?: (p5Instance: p5) => void;
  deviceMoved?: (p5Instance: p5) => void;
  deviceTurned?: (p5Instance: p5) => void;
  deviceShaken?: (p5Instance: p5) => void;
}

interface p5WrapperProps {
  sketch: SketchEvents;
  header?: string;
  footnote?: string;
}


function p5Wrapper(props: p5WrapperProps) {
  return (
    <div className="text-center not-prose mb-4">
      {
        props.header && <p className="font-medium my-2">{ props.header }</p>
      }
      <Sketch
        setup={ props.sketch.setup }
        draw={ props.sketch.draw }
        windowResized={ props.sketch.windowResized }
        preload={ props.sketch.preload }
        mouseClicked={ props.sketch.mouseClicked }
        mouseMoved={ props.sketch.mouseMoved }
        doubleClicked={ props.sketch.doubleClicked }
        mousePressed={ props.sketch.mousePressed }
        mouseWheel={ props.sketch.mouseWheel }
        mouseDragged={ props.sketch.mouseDragged }
        mouseReleased={ props.sketch.mouseReleased }
        keyPressed={ props.sketch.keyPressed }
        keyReleased={ props.sketch.keyReleased }
        keyTyped={ props.sketch.keyTyped }
        touchStarted={ props.sketch.touchStarted }
        touchMoved={ props.sketch.touchMoved }
        touchEnded={ props.sketch.touchEnded }
        deviceMoved={ props.sketch.deviceMoved }
        deviceTurned={ props.sketch.deviceTurned }
        deviceShaken={ props.sketch.deviceShaken }
      />
      {
        props.footnote && <p className="text-sm font-medium my-2">{ props.footnote }</p>
      }
    </div>
  )
}

export {
  p5Wrapper,
  type p5WrapperProps
}