const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(500).json({ msg: err.name });
};

module.exports = errorHandlerMiddleware;
