// Run raspistill command to take a photo with the camera module

const child_process = require("child_process");
const INTERVAL = process.env.INTERVAL || 10000;
const TIME_IN_H = process.env.TIME_IN_H || 1;
const INTERATIONS = (TIME_IN_H * 60 * 60 * 1000) / INTERVAL; // 8h

let i = 1;
let takingPhoto = false;

const t = new Date();
console.log("\n\n " + t);
console.log("Hours:" + TIME_IN_H);
console.log("Interval: " + INTERVAL);
console.log("Iterations: " + INTERATIONS);
console.log("Start taking photos");

const interval = setInterval(() => {
  console.log(i + " of " + INTERATIONS);

  //check exit condition
  if (i > INTERATIONS) {
    clearInterval(interval);
    console.log("Stopped taking photos");
  } else {
    if (!takingPhoto) {
      //take a photo
      takingPhoto = true;
      let filename = "data/image_" + i + ".jpg";
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
  }
  i++;
}, INTERVAL);
