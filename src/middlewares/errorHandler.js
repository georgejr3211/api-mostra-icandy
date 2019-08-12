export function errorHandler(err, req, res, next) {
  console.error(err);
  res.json({
    error: err
  });
};