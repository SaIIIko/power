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
  if (typeof(a) === 'number' && typeof(n) === 'number') {
    if(a > 0 && n > 0){
      for (var i = 1; i < n; ++i) {
        b *= a;
      }
    } else if (n===0) {
      return b=1;
    }
    return b;
    } else {
    console.error('Должно быть число!');
  }
}
console.log(pow(2, 3));
