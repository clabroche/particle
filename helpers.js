function debounce(fn, ms = 0) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};

function sqr(a) {
    return a * a;
}

function Distance(pt1, pt2) {
    return Math.sqrt(sqr(pt2.y - pt1.y) + sqr(pt2.x - pt1.x));
}