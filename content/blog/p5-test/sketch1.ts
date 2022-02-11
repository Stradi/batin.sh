import p5 from "p5";

function setup(p5: p5, canvasElement: Element): void {
  p5.createCanvas(500, 500).parent(canvasElement);
  p5.noLoop();

  p5.background(0);

  p5.noStroke();
  p5.fill(255, 0, 0);
  p5.circle(250, 250, 100);
}

export {
  setup
}