const winstonDaily = require("winston-daily-rotate-file");
const transport = new winstonDaily({ filename: "combined_%DATE%.log", datePattern: "YYYY-MM-DD" });
