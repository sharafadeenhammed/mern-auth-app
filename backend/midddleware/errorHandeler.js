const notFound = (req, res, next) => {
  const error = new Error(`Not Found ${req.originalUrl}`);
  res.statusCode = 404;
  next(error);
};

const errorHandeler = (err, req, res, next) => {
  let statusCode = res.statusCode < 400 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "objectId") {
    statusCode = 401;
    message = "Resourse Not Found...";
  }
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV == "developement" ? err.stack : null,
  });
};

export { notFound, errorHandeler };
