const child_process = require("child_process");
const INTERVAL = process.env.INTERVAL || 10000;
const TIME_IN_H = process.env.TIME_IN_H || 1;
const ITERATIONS = (TIME_IN_H * 60 * 60 * 1000) / INTERVAL;
const START_COUNT_FROM = process.env.START_COUNT_FROM || 1;

let i = 1;
let takingPhoto = false;

const t = new Date();
console.log("\n\n " + t);
console.log("Hours:" + TIME_IN_H);
console.log("Interval: " + INTERVAL);
console.log("Iterations: " + ITERATIONS);
console.log("Start file nr from: " + START_COUNT_FROM);
console.log("Start taking photos");

const interval = setInterval(() => {
  //check exit condition
  if (i > ITERATIONS) {
    clearInterval(interval);
    console.log("Stopped taking photos");
    return;
  }
  console.log(i + " of " + ITERATIONS);
  if (!takingPhoto) {
    let fileNr = i + parseInt(START_COUNT_FROM, 10);
    //take a photo
    takingPhoto = true;
    let filename = "data/image_" + fileNr + ".jpg";
    let args = [
      "-w",
      "1280",
      "-h",
      "720",
      "-q",
      "70",
      "-o",
      filename,
      "-t",
      "1",
    ];
    // raspistill -w 1280 -h 720 -q 70 -o test.jpg
    let spawn = child_process.spawn("raspistill", args);

    //photo is taken
    spawn.on("exit", (code) => {
      console.log(
        "A photo is saved as " + filename + " with exit code, " + code
      );
      takingPhoto = false;
    });
  }
  i++;
}, INTERVAL);
