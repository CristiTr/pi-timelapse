module.exports = {
  apps: [
    {
      name: "timelapse",
      script: "./app.js",
      watch: false,
      autorestart: false,
      out_file: "./out.log",
      env: {
        // period between photos in ms
        INTERVAL: 4000,
        // total duration in hours
        TIME_IN_H: 1,
        // start image count from this value, so the files don't overwright
        START_COUNT_FROM: 1,
      },
    },
  ],
};
