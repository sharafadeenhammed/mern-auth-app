const asyncHandeler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch((data) => next(data));
// const asyncHandeler = (fn) => (req, res, next) =>
//   Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandeler;
