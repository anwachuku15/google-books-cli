const errorHandle = require('./errorHandle');
module.exports = async (cb, spinnerInstance) => {
  try {
    if (!cb) {
      throw new Error('Incorrect callback function passed to list command.');
    } else if (!spinnerInstance) {
      throw new Error('Error with spinner.');
    }
  } catch (error) {
    return errorHandle(error, spinnerInstance);
  }
};
