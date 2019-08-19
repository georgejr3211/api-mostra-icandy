export default function errorHandler(err, req, res, next) {
  console.error(err);
  return res.json({
    error: err,
  });
}
