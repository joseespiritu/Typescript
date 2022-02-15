"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'no lastName');
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
