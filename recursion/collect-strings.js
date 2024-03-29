/**
 * Returns an array of all the values in the object that have typeof string.
 *
 * @param {Object} obj - The obj value.
 * @return {Array<string>}
 */
function collectStrings(obj) {
  const stringsArr = [];

  function gatherStrings(o) {
    for (let key in o) {
      if (typeof o[key] === 'string') {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
}

console.log(collectStrings(obj)); // ['foo', 'bar', 'baz']
