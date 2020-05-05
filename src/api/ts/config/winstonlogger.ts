import * as path from "path";
let winston = require("winston");

// define the custom settings for each transport (file, console)
let data = new Date(),
  dia = data.getDate().toString(),
  diaF = dia.length == 1 ? "0" + dia : dia,
  mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
  mesF = mes.length == 1 ? "0" + mes : mes,
  anoF = data.getFullYear();

let options = {
  file: {
    level: "info",
    filename: `${path.resolve(__dirname)}/logs/${diaF}-${mesF}-${anoF}_api.log`,
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: "info",
    handleExceptions: true,
    json: false,
    colorize: true,
    showLevel: false,
    silent: false,
  },
};

// instantiate a new Winston Logger with the settings defined above
let logger = winston.createLogger({
  format: winston.format.simple(),

  transports: [
    new winston.transports.Console(options.console),

    //new winston.transports.File(options.file)
  ],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function (message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    //console.log(message);
    //logger.info(message); //mensagem mais informativa
  },
};

module.exports = logger;
