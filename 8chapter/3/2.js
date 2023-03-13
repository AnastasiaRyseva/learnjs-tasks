Function.prototype.defer = function(ms){
    let context = this;
    return function(...args) {
        setTimeout(() => context.apply(this, args), ms);
    }
}
