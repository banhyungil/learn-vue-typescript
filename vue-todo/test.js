function remove(collection, remover) {
  // remove를 어떻게 구현할까 일단 각 item을 줘야하는데 function에..
  // boolean이 true이면은 해당 item은 삭제한다.
  // for문 중에 삭제하면 안되므로 모아놓고 한번에 삭제한다.
  const results = [];
  collection.forEach((item, idx) => {
    if (remover(item)) {
      results.push(item);
      collection.splice(idx, 1);
    }
  });

  return results;
}

const arr = [4, 1, 2, 5, 7];

const results = remove(arr, (item) => item % 2 == 0);

console.log(arr);
console.log(results);
