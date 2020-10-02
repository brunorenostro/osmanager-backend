import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1599955326254
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default:'uuid_generate_v4()'
          },
          {
            name: 'protocol_number',
            type: 'varchar',
          },
          {
            name: 'open_date',
            type: 'timestamp with time zone',
            default:'now()'
          },
          {
            name: 'street_adress',
            type: 'varchar',
          },
          {
            name: 'bairro_adress',
            type: 'varchar',
          },
          {
            name: 'number_adress',
            type: 'varchar',
          },
          {
            name: 'complement_provider',
            type: 'varchar',
          },
          {
            name: 'name_provider',
            type: 'varchar',
          },
          {
            name: 'phone_provider',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'observation_worker',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'work_state',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'lamp_material',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'reactor_material',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'relay_material',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}
