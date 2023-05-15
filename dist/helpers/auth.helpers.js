"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authHelpers = void 0;
const bcrypt_1 = require("bcrypt");
const serializeUser = (user) => {
    const { password, otp } = user, serializedUser = __rest(user, ["password", "otp"]);
    return serializedUser;
};
const serializeAdmin = (admin) => {
    const { password } = admin, serializedUser = __rest(admin, ["password"]);
    return serializedUser;
};
const hashPassword = async (password) => {
    return await (0, bcrypt_1.hash)(password, 10);
};
const verifyPassword = async (password, hash) => {
    return (0, bcrypt_1.compare)(password, hash);
};
const generateOtp = () => {
    return Math.floor(Math.random() * 900000);
};
exports.authHelpers = {
    serializeUser,
    hashPassword,
    verifyPassword,
    generateOtp,
    serializeAdmin,
};
//# sourceMappingURL=auth.helpers.js.map