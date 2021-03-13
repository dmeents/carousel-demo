// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handleErrors = (error, req, res, next) => {
  return res.status(500).json({
    status: 'error',
    message: error.message,
  });
};
