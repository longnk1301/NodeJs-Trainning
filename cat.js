function getRandomCat (catsArr) {
  return catsArr[Math.floor(Math.random() * catsArr.length)];
}

//TODO: basic modal and export module
// module.exports = {
//   getRandomCat: getRandomCat,
// };

//TODO: export module for client and server
(function(exports) {
  exports.getRandomCat = function (catsArr) {
      return catsArr[Math.floor(Math.random() * catsArr.length)];
  };
}(typeof exports === 'undefined' ? window.getRandomCatBrowser = {} : exports));