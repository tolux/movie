"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1684088521595 = void 0;
class InitialMigration1684088521595 {
    constructor() {
        this.name = 'InitialMigration1684088521595';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`movie\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`rate\` int NOT NULL, \`userId\` varchar(36) NULL, UNIQUE INDEX \`IDX_cee7125f3cbad047d34a6e1353\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_entity\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`full_name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`verified\` tinyint NOT NULL DEFAULT 0, \`password\` varchar(255) NOT NULL, \`role\` enum ('user', 'admin') NOT NULL DEFAULT 'user', UNIQUE INDEX \`IDX_415c35b9b3b6fe45a3b065030f\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`otp_entity\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`email\` varchar(255) NOT NULL, \`otp\` int NOT NULL, \`expiration\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_57cdd6627522346e3fa94a39a7\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admin_entity\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` enum ('user', 'admin') NOT NULL DEFAULT 'admin', UNIQUE INDEX \`IDX_a92e833fe462680a9a812488cd\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`movie\` ADD CONSTRAINT \`FK_ec7ed42b2e89092919129bdf990\` FOREIGN KEY (\`userId\`) REFERENCES \`user_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`movie\` DROP FOREIGN KEY \`FK_ec7ed42b2e89092919129bdf990\``);
        await queryRunner.query(`DROP INDEX \`IDX_a92e833fe462680a9a812488cd\` ON \`admin_entity\``);
        await queryRunner.query(`DROP TABLE \`admin_entity\``);
        await queryRunner.query(`DROP INDEX \`IDX_57cdd6627522346e3fa94a39a7\` ON \`otp_entity\``);
        await queryRunner.query(`DROP TABLE \`otp_entity\``);
        await queryRunner.query(`DROP INDEX \`IDX_415c35b9b3b6fe45a3b065030f\` ON \`user_entity\``);
        await queryRunner.query(`DROP TABLE \`user_entity\``);
        await queryRunner.query(`DROP INDEX \`IDX_cee7125f3cbad047d34a6e1353\` ON \`movie\``);
        await queryRunner.query(`DROP TABLE \`movie\``);
    }
}
exports.InitialMigration1684088521595 = InitialMigration1684088521595;
//# sourceMappingURL=1684088521595-initial_migration.js.map