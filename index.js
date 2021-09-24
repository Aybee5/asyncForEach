module.exports = Array.prototype.asyncForEach = async function (callback) {
  for (let i = 0; i < this.length -1; i++) {
    await callback(this[i])
  }
}