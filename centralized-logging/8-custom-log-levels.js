const customLevels = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  }
};
const logger = winston.createLogger({
  levels: customLevels.levels,
  ...
});
