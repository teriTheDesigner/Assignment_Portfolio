import { animate, stagger } from "https://cdn.skypack.dev/motion";

animate(
  ".intro",
  //property object
  {x:[-200,0], opacity:[0,1]},
  //optional object
  {delay:stagger(0.15), duration:1},
  )