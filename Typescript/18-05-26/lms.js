"use strict";
class LibraryItem {
    id;
    title;
    category;
    acquisitionDate;
    status = 'Available';
    constructor(id, title, category, acquisitionDate) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.acquisitionDate = acquisitionDate;
    }
    getItemAge() {
        const today = new Date().getTime();
        const added = this.acquisitionDate.getTime();
        return Math.floor((today - added) / (1000 * 60 * 60 * 24));
    }
    updateStatus(status) {
        this.status = status;
    }
}
class Member {
    memberId;
    name;
    email;
    tier;
    activeBorrows = 0;
    constructor(memberId, name, email, tier) {
        this.memberId = memberId;
        this.name = name;
        this.email = email;
        this.tier = tier;
    }
    getBorrowingPower() {
        if (this.tier === 'Basic')
            return 3;
        if (this.tier === 'Premium')
            return 7;
        return 15;
    }
    canBorrow() {
        return this.activeBorrows < this.getBorrowingPower();
    }
}
class Book extends LibraryItem {
    author;
    isbn;
    currentBorrow;
    renewalCount = 0;
    reservations = [];
    constructor(id, title, category, acquisitionDate, author, isbn) {
        super(id, title, category, acquisitionDate);
        this.author = author;
        this.isbn = isbn;
    }
    getMaxBorrowDays() {
        if (this.category === 'Fiction')
            return 14;
        if (this.category === 'NonFiction')
            return 21;
        throw new Error('Reference books cannot be borrowed');
    }
    getMaxRenewals() {
        if (this.category === 'Fiction')
            return 2;
        return 3;
    }
    borrow(memberId, borrowDate) {
        if (this.status !== 'Available') {
            throw new Error('Book not available');
        }
        const dueDate = new Date(borrowDate);
        dueDate.setDate(dueDate.getDate() + this.getMaxBorrowDays());
        this.currentBorrow = {
            itemId: this.id,
            memberId,
            borrowDate,
            dueDate,
        };
        this.status = 'Borrowed';
        return true;
    }
    returnItem(returnDate) {
        if (!this.currentBorrow)
            return 0;
        const fee = this.calculateLateFee(returnDate);
        this.currentBorrow.returnDate = returnDate;
        this.currentBorrow = undefined;
        this.status = 'Available';
        this.renewalCount = 0;
        return fee;
    }
    calculateLateFee(returnDate) {
        if (!this.currentBorrow)
            return 0;
        const dueDate = this.currentBorrow.dueDate;
        const lateDays = Math.floor((returnDate.getTime() - dueDate.getTime()) /
            (1000 * 60 * 60 * 24));
        if (lateDays <= 0)
            return 0;
        const firstWeek = Math.min(lateDays, 7);
        const remaining = Math.max(lateDays - 7, 0);
        return firstWeek * 0.5 + remaining * 1;
    }
    reserve(memberId) {
        this.reservations.push(memberId);
        this.status = 'Reserved';
        return true;
    }
    cancelReservation(memberId) {
        this.reservations = this.reservations.filter((id) => id !== memberId);
        return true;
    }
    renew(memberId) {
        if (!this.currentBorrow)
            return false;
        if (this.currentBorrow.memberId !== memberId) {
            return false;
        }
        if (!this.canRenew()) {
            return false;
        }
        this.currentBorrow.dueDate.setDate(this.currentBorrow.dueDate.getDate() +
            this.getMaxBorrowDays());
        this.renewalCount++;
        return true;
    }
    canRenew() {
        return (this.renewalCount < this.getMaxRenewals());
    }
}
class Magazine extends LibraryItem {
    issueNumber;
    publicationMonth;
    currentBorrow;
    constructor(id, title, acquisitionDate, issueNumber, publicationMonth) {
        super(id, title, 'Magazine', acquisitionDate);
        this.issueNumber = issueNumber;
        this.publicationMonth = publicationMonth;
    }
    getMaxBorrowDays() {
        return 7;
    }
    getMaxRenewals() {
        return 0;
    }
    borrow(memberId, borrowDate) {
        const dueDate = new Date(borrowDate);
        dueDate.setDate(dueDate.getDate() + this.getMaxBorrowDays());
        this.currentBorrow = {
            itemId: this.id,
            memberId,
            borrowDate,
            dueDate,
        };
        this.status = 'Borrowed';
        return true;
    }
    returnItem(returnDate) {
        if (!this.currentBorrow)
            return 0;
        const fee = this.calculateLateFee(returnDate);
        this.currentBorrow = undefined;
        this.status = 'Available';
        return fee;
    }
    calculateLateFee(returnDate) {
        if (!this.currentBorrow)
            return 0;
        const lateDays = Math.floor((returnDate.getTime() -
            this.currentBorrow.dueDate.getTime()) /
            (1000 * 60 * 60 * 24));
        return lateDays > 0 ? lateDays * 0.25 : 0;
    }
}
function checkUpgradeEligibility(totalBorrows, lateReturns) {
    const latePercent = (lateReturns / totalBorrows) * 100;
    if (totalBorrows >= 20 &&
        latePercent < 5) {
        return 'Eligible for Premium';
    }
    if (totalBorrows >= 50 &&
        latePercent < 2) {
        return 'Eligible for VIP';
    }
    return 'Not Eligible';
}
console.log('===== Library System =====');
const member = new Member('M101', 'John', 'john@gmail.com', 'Basic');
console.log('Can Borrow:', member.canBorrow());
const book = new Book('B101', 'The Hobbit', 'Fiction', new Date('2024-01-01'), 'J.R.R Tolkien', '123456');
book.borrow('M101', new Date('2026-05-01'));
console.log('Book Borrowed');
const fee = book.returnItem(new Date('2026-05-20'));
console.log('Late Fee:', fee);
console.log(checkUpgradeEligibility(25, 1));
console.log('Program Finished');
