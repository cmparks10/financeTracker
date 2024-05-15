module.exports = {
    HOST: 'localhost',
    USER: 'your_db_user',
    PASSWORD: 'your_db_password',
    DB: 'finance_tracker',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  