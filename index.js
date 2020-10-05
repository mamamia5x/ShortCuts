module.exports.rannum = function (min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


module.exports.remove = function (arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

module.exports.indexremove = function (arr, area){
  arr.splice(area, 1);
  return arr;
}
