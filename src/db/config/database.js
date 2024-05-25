module.exports = {
  host: process.env.SQL_HOST,
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  port: process.env.SQL_PORT,
  database: process.env.SQL_DATABASE_NAME,
  dialect: process.env.SQL_DIALECT,
  pool: {
    max: Number(process.env.SQL_MAX_POOL), // max pool size
    min: Number(process.env.SQL_MIN_POOL), // min pool size
    acquire: Number(process.env.SQL_ACQUIRE_POOL), // timeout to wait connection in  milliseconds
    idle: Number(process.env.SQL_IDLE_POOL), // idle time in milliseconds
  },
};
