"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERoles = exports.EQuestionType = exports.ERiskCategory = void 0;
var ERiskCategory;
(function (ERiskCategory) {
    ERiskCategory["MID"] = "mid";
    ERiskCategory["LOW"] = "low";
    ERiskCategory["HIGH"] = "high";
})(ERiskCategory || (ERiskCategory = {}));
exports.ERiskCategory = ERiskCategory;
var EQuestionType;
(function (EQuestionType) {
    EQuestionType["FREE_TEXT"] = "free_text";
    EQuestionType["SINGLE_OPTION"] = "single_option";
})(EQuestionType || (EQuestionType = {}));
exports.EQuestionType = EQuestionType;
var ERoles;
(function (ERoles) {
    ERoles["USER"] = "user";
    ERoles["ADMIN"] = "admin";
})(ERoles || (ERoles = {}));
exports.ERoles = ERoles;
//# sourceMappingURL=app.types.js.map