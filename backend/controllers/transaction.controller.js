const db = require('../models');
const Transaction = db.transaction;

exports.create = (req, res) => {
  Transaction.create({
    type: req.body.type,
    amount: req.body.amount,
    category: req.body.category,
    date: req.body.date,
    userId: req.userId
  })
  .then(transaction => {
    res.send(transaction);
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.findAll = (req, res) => {
  Transaction.findAll({
    where: { userId: req.userId }
  })
  .then(transactions => {
    res.send(transactions);
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Transaction.update(req.body, {
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({ message: 'Transaction was updated successfully.' });
    } else {
      res.send({ message: `Cannot update Transaction with id=${id}. Maybe Transaction was not found or req.body is empty!` });
    }
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Transaction.destroy({
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({ message: 'Transaction was deleted successfully!' });
    } else {
      res.send({ message: `Cannot delete Transaction with id=${id}. Maybe Transaction was not found!` });
    }
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};
