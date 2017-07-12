'use strict';

import {Loan, TermROC, RevolvingTermROC} from './chain_constructors'

describe('chaining constructors', function() {

    beforeEach(function () {
        this.loan = new Loan();
    });

    it('the first constructor should set all the properties', function () {
        const notational = 0.1;
        const outstanding = 0.2;
        const rating = 1;
        const expiry = new Date('3/7/1981');
        this.loan.firstConstructor(notational, outstanding, rating, expiry);
        expect(this.loan.notational).to.equal(0.1);
        expect(this.loan.outstanding).to.equal(0.2);
        expect(this.loan.rating).to.equal(1);
        expect(this.loan.expiry.getTime()).to.equal(new Date('3/7/1981').getTime());
        expect(this.loan.strategy instanceof TermROC).to.equal(true);
    });

    it('the first constructor should set all the properties', function () {
        const notational = 0.1;
        const outstanding = 0.2;
        const rating = 1;
        const expiry = new Date('3/7/1981');
        const maturity = new Date('3/7/2000');
        this.loan.secondConstructor(notational, outstanding, rating, expiry, maturity);
        expect(this.loan.notational).to.equal(0.1);
        expect(this.loan.outstanding).to.equal(0.2);
        expect(this.loan.rating).to.equal(1);
        expect(this.loan.expiry.getTime()).to.equal(new Date('3/7/1981').getTime());
        expect(this.loan.maturity.getTime()).to.equal(new Date('3/7/2000').getTime());
        expect(this.loan.strategy instanceof RevolvingTermROC).to.equal(true);
    });

    it('the first constructor should set all the properties', function () {
        const strategy = new TermROC();
        const notational = 0.1;
        const outstanding = 0.2;
        const rating = 1;
        const expiry = new Date('3/7/1981');
        const maturity = new Date('3/7/2000');
        this.loan.thirdConstructor(strategy, notational, outstanding, rating, expiry, maturity);
        expect(this.loan.notational).to.equal(0.1);
        expect(this.loan.outstanding).to.equal(0.2);
        expect(this.loan.rating).to.equal(1);
        expect(this.loan.expiry.getTime()).to.equal(new Date('3/7/1981').getTime());
        expect(this.loan.maturity.getTime()).to.equal(new Date('3/7/2000').getTime());
        expect(this.loan.strategy).to.equal(strategy);
    });
});