var mongoose = require('mongoose');

var loanSchema = mongoose.Schema({
    borrower_username: String, 
    loaner_username: String,
    amount: Number, 
    interest_rate: Number, 
    loan_period: Number,
    payback_start_date: Date
}); 

var loan = mongoose.model('Loan', loanSchema); 

module.exports = loan;