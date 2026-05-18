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
        const diff = new Date().getTime() - this.acquisitionDate.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }
    updateStatus(newStatus) {
        this.status = newStatus;
    }
}
class Member {
    memberId;
    name;
    email;
    tier;
    registrationDate;
    activeBorrows = 0;
    totalBorrowHistory = 0;
    constructor(memberId, name, email, tier, registrationDate) {
        this.memberId = memberId;
        this.name = name;
        this.email = email;
        this.tier = tier;
        this.registrationDate = registrationDate;
    }
    getBorrowingPower() {
        switch (this.tier) {
            case 'Basic':
                return 3;
            case 'Premium':
                return 7;
            case 'VIP':
                return 15;
        }
    }
    canBorrow() {
        return this.activeBorrows < this.getBorrowingPower();
    }
}
class Book extends LibraryItem {
    author;
    isbn;
    pageCount;
    currentBorrow;
    reservations = [];
    renewalCount = 0;
    constructor(id, title, category, acquisitionDate, author, isbn, pageCount) {
        super(id, title, category, acquisitionDate);
        this.author = author;
        this.isbn = isbn;
        this.pageCount = pageCount;
    }
    getMaxBorrowDays() {
        switch (this.category) {
            case 'Fiction':
                return 14;
            case 'NonFiction':
                return 21;
            case 'Reference':
                throw new Error('Reference books cannot be borrowed');
            default:
                return 14;
        }
    }
    getMaxRenewals() {
        switch (this.category) {
            case 'Fiction':
                return 2;
            case 'NonFiction':
                return 3;
            default:
                return 0;
        }
    }
    borrow(memberId, borrowDate) {
        if (this.status === 'Maintenance' ||
            this.status === 'Lost') {
            throw new Error('Cannot borrow item under maintenance or lost');
        }
        if (this.category === 'Reference') {
            throw new Error('Reference books cannot be borrowed');
        }
        if (this.currentBorrow?.memberId === memberId) {
            throw new Error('Member already borrowed this item');
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
        if (returnDate < this.currentBorrow.borrowDate) {
            throw new Error('Return date cannot be before borrow date');
        }
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
        return calculateLateFee(this, this.currentBorrow.dueDate, returnDate, 'Basic');
    }
    reserve(memberId, tier) {
        if (this.status === 'Available') {
            throw new Error('Cannot reserve available item');
        }
        const priorityMap = {
            VIP: 3,
            Premium: 2,
            Basic: 1,
        };
        this.reservations.push({
            memberId,
            reservationDate: new Date(),
            priority: priorityMap[tier],
        });
        this.status = 'Reserved';
        return true;
    }
    cancelReservation(memberId) {
        this.reservations = this.reservations.filter((r) => r.memberId !== memberId);
        return true;
    }
    getNextInQueue() {
        if (this.reservations.length === 0) {
            return null;
        }
        this.reservations.sort((a, b) => {
            if (b.priority !== a.priority) {
                return b.priority - a.priority;
            }
            return (a.reservationDate.getTime() -
                b.reservationDate.getTime());
        });
        return this.reservations[0].memberId;
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
    getRenewalCount() {
        return this.renewalCount;
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
        const today = new Date();
        const diffMonths = (today.getFullYear() -
            this.publicationMonth.getFullYear()) *
            12 +
            (today.getMonth() -
                this.publicationMonth.getMonth());
        return diffMonths > 6 ? 14 : 7;
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
        this.currentBorrow.returnDate = returnDate;
        this.currentBorrow = undefined;
        this.status = 'Available';
        return fee;
    }
    calculateLateFee(returnDate) {
        if (!this.currentBorrow)
            return 0;
        return calculateLateFee(this, this.currentBorrow.dueDate, returnDate, 'Basic');
    }
}
class DigitalMedia extends LibraryItem {
    format;
    durationMinutes;
    currentBorrow;
    reservations = [];
    renewalCount = 0;
    constructor(id, title, acquisitionDate, format, durationMinutes) {
        super(id, title, 'Media', acquisitionDate);
        this.format = format;
        this.durationMinutes = durationMinutes;
    }
    getMaxBorrowDays() {
        switch (this.format) {
            case 'DVD':
                return 5;
            case 'AudioBook':
                return 10;
            default:
                return 7;
        }
    }
    getMaxRenewals() {
        switch (this.format) {
            case 'DVD':
                return 1;
            case 'AudioBook':
                return 2;
            default:
                return 0;
        }
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
        this.currentBorrow.returnDate = returnDate;
        this.currentBorrow = undefined;
        this.status = 'Available';
        this.renewalCount = 0;
        return fee;
    }
    calculateLateFee(returnDate) {
        if (!this.currentBorrow)
            return 0;
        return calculateLateFee(this, this.currentBorrow.dueDate, returnDate, 'Basic');
    }
    reserve(memberId, tier) {
        const priorityMap = {
            VIP: 3,
            Premium: 2,
            Basic: 1,
        };
        this.reservations.push({
            memberId,
            reservationDate: new Date(),
            priority: priorityMap[tier],
        });
        return true;
    }
    cancelReservation(memberId) {
        this.reservations = this.reservations.filter((r) => r.memberId !== memberId);
        return true;
    }
    getNextInQueue() {
        if (this.reservations.length === 0) {
            return null;
        }
        this.reservations.sort((a, b) => {
            if (b.priority !== a.priority) {
                return b.priority - a.priority;
            }
            return (a.reservationDate.getTime() -
                b.reservationDate.getTime());
        });
        return this.reservations[0].memberId;
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
    getRenewalCount() {
        return this.renewalCount;
    }
    canRenew() {
        return (this.renewalCount < this.getMaxRenewals());
    }
}
function calculateLateFee(item, dueDate, returnDate, memberTier) {
    const lateMs = returnDate.getTime() - dueDate.getTime();
    const lateDays = Math.floor(lateMs / (1000 * 60 * 60 * 24));
    let fee = 0;
    if (lateDays <= 0) {
        const sameDay = returnDate.toDateString() ===
            dueDate.toDateString();
        if (sameDay && returnDate.getHours() >= 18) {
            fee = 0.5;
        }
    }
    else {
        if (item instanceof Book) {
            const firstWeek = Math.min(lateDays, 7);
            const remaining = Math.max(lateDays - 7, 0);
            fee =
                firstWeek * 0.5 + remaining * 1;
        }
        else if (item instanceof Magazine) {
            fee = lateDays * 0.25;
        }
        else if (item instanceof DigitalMedia) {
            fee = lateDays * 2;
        }
    }
    switch (memberTier) {
        case 'Premium':
            fee *= 0.75;
            break;
        case 'VIP':
            fee *= 0.5;
            break;
    }
    return Number(fee.toFixed(2));
}
function processPriorityQueue(reservationQueue, memberTiers, activeReservations) {
    const tierRank = {
        VIP: 3,
        Premium: 2,
        Basic: 1,
    };
    const eligible = reservationQueue.filter((r) => (activeReservations.get(r.memberId) || 0) <= 2);
    eligible.sort((a, b) => {
        const tierA = tierRank[memberTiers.get(a.memberId) || 'Basic'];
        const tierB = tierRank[memberTiers.get(b.memberId) || 'Basic'];
        if (tierB !== tierA) {
            return tierB - tierA;
        }
        return (a.reservationDate.getTime() -
            b.reservationDate.getTime());
    });
    return eligible[0]?.memberId || '';
}
function processRenewalRequest(item, memberId, hasReservations) {
    if (hasReservations) {
        return {
            success: false,
            message: 'Cannot renew item with pending reservations',
        };
    }
    if (!item.canRenew()) {
        return {
            success: false,
            message: 'Maximum renewals reached for this item type',
        };
    }
    const success = item.renew(memberId);
    return {
        success,
        message: success
            ? 'Renewal successful'
            : 'Renewal failed',
    };
}
function checkItemAvailability(item, requestDate, memberTier) {
    if (item.status === 'Available') {
        return {
            available: true,
            availableDate: requestDate,
            canReserve: false,
        };
    }
    if (item.status === 'Maintenance' ||
        item.status === 'Lost') {
        return {
            available: false,
            availableDate: null,
            canReserve: false,
        };
    }
    return {
        available: false,
        availableDate: null,
        canReserve: true,
    };
}
function checkUpgradeEligibility(member, borrowHistory) {
    const accountAgeMonths = (new Date().getTime() -
        member.registrationDate.getTime()) /
        (1000 * 60 * 60 * 24 * 30);
    if (accountAgeMonths < 3) {
        return {
            eligible: false,
            recommendedTier: member.tier,
            reason: 'Account must be at least 3 months old',
        };
    }
    const totalBorrows = borrowHistory.length;
    const lateReturns = borrowHistory.filter((b) => b.returnDate &&
        b.returnDate > b.dueDate).length;
    const latePercent = totalBorrows === 0
        ? 0
        : (lateReturns / totalBorrows) * 100;
    if (member.tier === 'Basic' &&
        totalBorrows >= 20 &&
        latePercent < 5) {
        return {
            eligible: true,
            recommendedTier: 'Premium',
            reason: `${totalBorrows} borrows with ${latePercent.toFixed(2)}% late returns`,
        };
    }
    if (member.tier === 'Premium' &&
        totalBorrows >= 50 &&
        latePercent < 2) {
        return {
            eligible: true,
            recommendedTier: 'VIP',
            reason: `${totalBorrows} borrows with ${latePercent.toFixed(2)}% late returns`,
        };
    }
    return {
        eligible: false,
        recommendedTier: member.tier,
        reason: 'Upgrade requirements not met',
    };
}
const member = new Member('M101', 'John', 'john@example.com', 'Basic', new Date('2025-01-01'));
console.log(member.canBorrow());
const fictionBook = new Book('B101', 'The Hobbit', 'Fiction', new Date('2024-01-01'), 'J.R.R. Tolkien', '123456789', 400);
fictionBook.borrow('M101', new Date('2026-05-01'));
const fee = fictionBook.returnItem(new Date('2026-05-12'));
console.log('Late Fee:', fee);
