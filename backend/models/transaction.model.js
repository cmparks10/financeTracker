module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define('transaction', {
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  
    return Transaction;
  };
  