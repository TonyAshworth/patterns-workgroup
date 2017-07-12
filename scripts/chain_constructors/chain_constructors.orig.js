export class TermROC {

}

export class RevolvingTermROC {

}

export class Loan {
    firstConstructor(notational, outstanding, rating, expiry){
        this.strategy = new TermROC();
        this.notational = notational;
        this.outstanding = outstanding;
        this.rating = rating;
        this.expiry = expiry;
    }

    secondConstructor(notational, outstanding, rating, expiry, maturity){
        this.strategy = new RevolvingTermROC();
        this.notational = notational;
        this.outstanding = outstanding;
        this.rating = rating;
        this.expiry = expiry;
        this.maturity = maturity;
    }

    thirdConstructor(strategy, notational, outstanding, rating, expiry, maturity){
        this.strategy = strategy;
        this.notational = notational;
        this.outstanding = outstanding;
        this.rating = rating;
        this.expiry = expiry;
        this.maturity = maturity;
    }
}