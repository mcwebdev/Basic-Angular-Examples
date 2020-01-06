"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasicClass = /** @class */ (function () {
    function BasicClass() {
        this.myBasicClass = "my basic class string";
    }
    BasicClass.prototype.voidThis = function () {
        // make sure `this` is unusable in this standalone function
    };
    BasicClass.prototype.myBasicClassFunction = function () {
        return "my Basic Class Function returned";
    };
    return BasicClass;
}());
exports.BasicClass = BasicClass;
//# sourceMappingURL=basic-class.js.map