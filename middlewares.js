import colors from "colors";

export function requestTime(req, res, next) {
  req.requestTime = new Date(Date.now()).toString();
  next();
}
export function logger(req, res, next) {
  console.log(colors.green(`Req.time: `) + colors.gray(req.requestTime));

  next();
}
