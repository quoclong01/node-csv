module.exports = {
  host: 'localhost',
  username: 'postgres',
  password: 'password1',
  port: '5433',
  database: 'postgres',
  dialect: 'postgres',
  pool: {
    max: 4, // max pool size
    min: 1, // min pool size
    acquire: 3000, // timeout to wait connection in  milliseconds
    idle: 10000, // idle time in milliseconds
  },
};
