/**
 * Created by alexander on 05.12.13.
 */

/**
 * @param {number} a number
 * @param {number} n pow for number
 * @return {string}
 */

function pow(a, n) {
  var b = a;
  b = Math.abs(b);
  if (typeof(n) === 'number') {
    for (var i = 1; i < n; ++i) {
      b *= a;
    }
    return b;
  } else {
    console.error('Должно быть число!');
  }
}
console.log(pow(2, 3));
