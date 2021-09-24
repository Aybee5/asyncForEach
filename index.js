/**
 * Adds an asynchronous prototype method to an Array object.
 * @param {Function} required The function to perform on each item in the array.
 * The function can accept any number of parameters.
 * 
 * When the callback is invoked, it passes all the params as passed with additional of two params [index, array].
 * @var index is the index of the item in the array.
 * @var array is the array the method is being called on.
 */
module.exports = Array.prototype.asyncForEach = async function (callback, ...params) {
  for (let index = 0; index < this.length -1; index++) {
    await callback(this[index], ...params, index, this);
  }
}
