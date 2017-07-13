export class TermROC { }

export class RevolvingTermROC { }

export class Loan {
    createTermROCLoan(notational, outstanding, rating, expiry){
        this.strategy = new TermROC();
        this.notational = notational;
        this.outstanding = outstanding;
        this.rating = rating;
        this.expiry = expiry;
    }

    createRevolvingTermROCLoan(notational, outstanding, rating, expiry, maturity){
        this.strategy = new RevolvingTermROC();
        this.notational = notational;
        this.outstanding = outstanding;
        this.rating = rating;
        this.expiry = expiry;
        this.maturity = maturity;
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
