"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._handleError = void 0;
const common_1 = require("@nestjs/common");
const _handleError = (error) => {
    throw new common_1.HttpException((error === null || error === void 0 ? void 0 : error.message) || 'an error occurred kindly contact support', (error === null || error === void 0 ? void 0 : error.status) || (error === null || error === void 0 ? void 0 : error.statusCode) || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
};
exports._handleError = _handleError;
//# sourceMappingURL=error.helpers.js.map