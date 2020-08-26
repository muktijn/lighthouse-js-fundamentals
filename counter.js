le(counter <= 200) {
  let is3multiple = counter % 3;
  let is4multiple = counter % 4;
  if (is3multiple == 0 && is4multiple == 0) {
    console.log("LoopyLighthouse");
  } else if(is3multiple == 0) {
    console.log("Loopy");
  } else if (is4multiple == 0) {
    console.log("Lighthouse");
  } else {
    console.log(counter);
  }
  counter++;
}
