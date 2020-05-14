module.exports = {
  apps: [
    {
      name: "timelapse",
      script: "./app.js",
      watch: false,
      autorestart: false,
      out_file: "./logs/out.log",
      env: {
        INTERVAL: 4000,
        TIME_IN_H: 1,
      },
    },
  ],
};
