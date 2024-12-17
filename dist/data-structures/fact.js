"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fact = fact;
function fact(n) {
    if (n >= 1) {
        return n * fact(n - 1);
    }
    return 1;
}
