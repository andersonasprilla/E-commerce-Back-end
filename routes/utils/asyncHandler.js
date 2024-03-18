
/**
 * Wraps an asynchronous route handler and catches any uncaught errors.
 * @param {Function} fn The async route handler function.
 * @returns {Function} A function that executes the async handler and catches any errors.
 */
const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;
