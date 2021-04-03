import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableTransaction1613240005576 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.query(`
            CREATE TABLE transaction (
                id serial,
                created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                title VARCHAR(255) NOT NULL,
                type VARCHAR(255) NOT NULL,
                amount numeric(8,2) NOT NULL,
                category VARCHAR(255) NOT NULL,
                date_payment timestamptz NOT NULL,

                CONSTRAINT pk_transaction PRIMARY KEY(id)            
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.query(`DROP TABLE transaction;`);
    }

}
