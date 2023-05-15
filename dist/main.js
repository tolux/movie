"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app_module_1 = require("./app.module");
const main_cluster_1 = require("./main.cluster");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger('MAIN');
    const configService = new config_1.ConfigService();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        origin: '*',
        credentials: true,
    });
    const PORT = configService.get('PORT') || 8000;
    await app.listen(PORT, () => logger.log(`Engine start at port ${PORT}`));
}
main_cluster_1.MainCluster.clusterize(bootstrap);
//# sourceMappingURL=main.js.map