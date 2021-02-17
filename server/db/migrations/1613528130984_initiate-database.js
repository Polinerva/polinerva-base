/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('users', {
    id: 'id',
    name: { type: 'varchar(1000)', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    email: { type: 'varchar(1024)', notNull: true },
  });
};

exports.down = pgm => {
  pgm.dropTable('users', { ifExists: true, cascade: true });
};
