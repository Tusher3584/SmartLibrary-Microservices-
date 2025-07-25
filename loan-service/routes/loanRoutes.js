const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

router.get('/', loanController.getLoans);
router.post('/', loanController.createLoan);
router.get('/:id', loanController.getLoanById);
router.delete('/:id', loanController.deleteLoan);

module.exports = router;
