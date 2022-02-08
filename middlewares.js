import colors from "colors";

export function requestTime(req, res, next) {
  req.requestTime = new Date(Date.now()).toString();
  next();
}
export function logger(req, res, next) {
  console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`));

  next();
}
