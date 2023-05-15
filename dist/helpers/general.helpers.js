"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBool = void 0;
const parseBool = (value) => {
    switch (value === null || value === void 0 ? void 0 : value.toLowerCase()) {
        case 'true':
            return true;
        case 'false':
            return false;
        default:
            return undefined;
    }
};
exports.parseBool = parseBool;
//# sourceMappingURL=general.helpers.js.map