module.exports.rannum = function (min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

module.exports.remove = function(a,what) {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
