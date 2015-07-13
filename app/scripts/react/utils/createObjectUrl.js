export default function createObjectURL(file) {
  if (global.URL && global.URL.createObjectURL) {
    return global.URL.createObjectURL(file);
  } else if (global.webkitURL) {
    return global.webkitURL.createObjectURL(file);
  } else {
    return null;
  }
}