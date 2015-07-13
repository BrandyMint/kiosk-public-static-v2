/**
 * An API into localStorage that won't explode if it isn't available (like in node.js).
 *
 * Will also serialise and parse with JSON.
 *
 * @type {Object}
 */
export default {
  write(key, value) {
    if (typeof localStorage === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  read(key) {
    if (typeof localStorage === 'object') {
      return JSON.parse(localStorage.getItem(key));
    }
  }
}