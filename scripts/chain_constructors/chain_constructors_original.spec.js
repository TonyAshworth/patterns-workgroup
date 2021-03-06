import {Loan, TermROC, RevolvingTermROC} from './chain_constructors_original'

describe('chaining creation methods', function() {

    beforeEach(function () {
        this.loan = new Loan();
    });

    it('the createTermROCLoan function should set the properties that are passed in properly.', function () {
        const notational = 0.1;
        const outstanding = 0.2;
        const rating = 1;
        const expiry = new Date('3/7/1981');
        this.loan.createTermROCLoan(notational, outstanding, rating, expiry);
        expect(this.loan.notational).to.equal(0.1);
        expect(this.loan.outstanding).to.equal(0.2);
        expect(this.loan.rating).to.equal(1);
        expect(this.loan.expiry.getTime()).to.equal(new Date('3/7/1981').getTime());
        expect(this.loan.strategy instanceof TermROC).to.equal(true);
    });

    it('the createRevolvingTermROCLoan function should set the properties that are passed in properly.', function () {
        const notational = 0.1;
        const outstanding = 0.2;
        const rating = 1;
        const expiry = new Date('3/7/1981');
        const maturity = new Date('3/7/2000');
        this.loan.createRevolvingTermROCLoan(notational, outstanding, rating, expiry, maturity);
        expect(this.loan.notational).to.equal(0.1);
        expect(this.loan.outstanding).to.equal(0.2);
        expect(this.loan.rating).to.equal(1);
        expect(this.loan.expiry.getTime()).to.equal(new Date('3/7/1981').getTime());
        expect(this.loan.maturity.getTime()).to.equal(new Date('3/7/2000').getTime());
        expect(this.loan.strategy instanceof RevolvingTermROC).to.equal(true);
    });

    it('the createTermLoan function should set the properties that are passed in properly.', function () {
        const strategy = new TermROC();
        const notational = 0.1;
        const outstanding = 0.2;
        const rating = 1;
        const expiry = new Date('3/7/1981');
        const maturity = new Date('3/7/2000');
        this.loan.createTermLoan(strategy, notational, outstanding, rating, expiry, maturity);
        expect(this.loan.notational).to.equal(0.1);
        expect(this.loan.outstanding).to.equal(0.2);
        expect(this.loan.rating).to.equal(1);
        expect(this.loan.expiry.getTime()).to.equal(new Date('3/7/1981').getTime());
        expect(this.loan.maturity.getTime()).to.equal(new Date('3/7/2000').getTime());
        expect(this.loan.strategy).to.equal(strategy);
    });
});
