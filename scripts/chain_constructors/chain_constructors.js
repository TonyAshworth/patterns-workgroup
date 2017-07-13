export class TermROC { }

export class RevolvingTermROC { }

export class Loan {
    createTermROCLoan(notational, outstanding, rating, expiry){
        this.createTermLoan(new TermROC(), notational, outstanding, rating, expiry, null)
    }

    createRevolvingTermROCLoan(notational, outstanding, rating, expiry, maturity){
        this.createTermLoan(new RevolvingTermROC(), notational, outstanding, rating, expiry, maturity);
    }

    createTermLoan(strategy, notational, outstanding, rating, expiry, maturity){
        this.strategy = strategy;
        this.notational = notational;
        this.outstanding = outstanding;
        this.rating = rating;
        this.expiry = expiry;
        this.maturity = maturity;
    }
}
