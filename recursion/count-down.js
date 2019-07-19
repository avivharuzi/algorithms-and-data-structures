/**
 * Count down numbers from given number until 1.
 *
 * @param {number} num
 */
function countDown(num){
  if (num <= 0) {
    return;
  }

  console.log(num);

  num--;
  countDown(num);
}

countDown(3); // 3, 2, 1
