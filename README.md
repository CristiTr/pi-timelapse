# Take photos for timelapse with a RaspberryPi camera

## Setup

Install pm2: `npm install pm2@latest -g`.

Install dependencies: `npm install`

Copy the `example-ecosystem.config.js` into a new `ecosystem.config.js`, adjust the time and interval.

## Run

`pm2 start`

Photos are saved in `./data`.
