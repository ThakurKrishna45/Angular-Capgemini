type MembershipTier = 'Basic' | 'Premium' | 'VIP';

type ItemStatus =
  | 'Available'
  | 'Borrowed'
  | 'Reserved'
  | 'Maintenance'
  | 'Lost';

type ItemCategory =
  | 'Fiction'
  | 'NonFiction'
  | 'Reference'
  | 'Magazine'
  | 'Media';

type BorrowRecord = {
  itemId: string;
  memberId: string;
  borrowDate: Date;
  dueDate: Date;
  returnDate?: Date;
};

type ReservationQueue = {
  memberId: string;
  reservationDate: Date;
  priority: number;
};

interface IBorrowable {
  borrow(memberId: string, borrowDate: Date): boolean;

  returnItem(returnDate: Date): number;

  calculateLateFee(returnDate: Date): number;
}

interface IReservable {
  reserve(
    memberId: string,
    tier: MembershipTier
  ): boolean;

  cancelReservation(memberId: string): boolean;

  getNextInQueue(): string | null;
}

interface IRenewable {
  renew(memberId: string): boolean;

  getRenewalCount(): number;

  canRenew(): boolean;
}

abstract class LibraryItem {
  public status: ItemStatus = 'Available';

  constructor(
    public id: string,
    public title: string,
    public category: ItemCategory,
    public acquisitionDate: Date
  ) {}

  abstract getMaxBorrowDays(): number;

  abstract getMaxRenewals(): number;

  getItemAge(): number {
    const diff =
      new Date().getTime() -
      this.acquisitionDate.getTime();

    return Math.floor(
      diff / (1000 * 60 * 60 * 24)
    );
  }

  updateStatus(newStatus: ItemStatus): void {
    this.status = newStatus;
  }
}

class Member {
  public activeBorrows = 0;

  public totalBorrowHistory = 0;

  constructor(
    public memberId: string,
    public name: string,
    public email: string,
    public tier: MembershipTier,
    public registrationDate: Date
  ) {}

  getBorrowingPower(): number {
    switch (this.tier) {
      case 'Basic':
        return 3;

      case 'Premium':
        return 7;

      case 'VIP':
        return 15;
    }
  }

  canBorrow(): boolean {
    return (
      this.activeBorrows <
      this.getBorrowingPower()
    );
  }
}

class Book
  extends LibraryItem
  implements
    IBorrowable,
    IReservable,
    IRenewable
{
  private currentBorrow?: BorrowRecord;

  private reservations: ReservationQueue[] =
    [];

  private renewalCount = 0;

  constructor(
    id: string,
    title: string,
    category: ItemCategory,
    acquisitionDate: Date,
    public author: string,
    public isbn: string,
    public pageCount: number
  ) {
    super(id, title, category, acquisitionDate);
  }

  getMaxBorrowDays(): number {
    switch (this.category) {
      case 'Fiction':
        return 14;

      case 'NonFiction':
        return 21;

      case 'Reference':
        throw new Error(
          'Reference books cannot be borrowed'
        );

      default:
        return 14;
    }
  }

  getMaxRenewals(): number {
    switch (this.category) {
      case 'Fiction':
        return 2;

      case 'NonFiction':
        return 3;

      default:
        return 0;
    }
  }

  borrow(
    memberId: string,
    borrowDate: Date
  ): boolean {
    if (
      this.status === 'Maintenance' ||
      this.status === 'Lost'
    ) {
      throw new Error(
        'Item unavailable'
      );
    }

    if (this.category === 'Reference') {
      throw new Error(
        'Reference books cannot be borrowed'
      );
    }

    const dueDate = new Date(borrowDate);

    dueDate.setDate(
      dueDate.getDate() +
        this.getMaxBorrowDays()
    );

    this.currentBorrow = {
      itemId: this.id,
      memberId,
      borrowDate,
      dueDate,
    };

    this.status = 'Borrowed';

    return true;
  }

  returnItem(returnDate: Date): number {
    if (!this.currentBorrow) {
      return 0;
    }

    const fee = this.calculateLateFee(
      returnDate
    );

    this.currentBorrow.returnDate =
      returnDate;

    this.currentBorrow = undefined;

    this.status = 'Available';

    this.renewalCount = 0;

    return fee;
  }

  calculateLateFee(
    returnDate: Date
  ): number {
    if (!this.currentBorrow) {
      return 0;
    }

    return calculateLateFee(
      this,
      this.currentBorrow.dueDate,
      returnDate,
      'Basic'
    );
  }

  reserve(
    memberId: string,
    tier: MembershipTier
  ): boolean {
    if (this.status === 'Available') {
      throw new Error(
        'Cannot reserve available item'
      );
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

  cancelReservation(
    memberId: string
  ): boolean {
    this.reservations =
      this.reservations.filter(
        (r) => r.memberId !== memberId
      );

    return true;
  }

  getNextInQueue(): string | null {
    if (this.reservations.length === 0) {
      return null;
    }

    this.reservations.sort((a, b) => {
      if (b.priority !== a.priority) {
        return b.priority - a.priority;
      }

      return (
        a.reservationDate.getTime() -
        b.reservationDate.getTime()
      );
    });

    return this.reservations[0].memberId;
  }

  renew(memberId: string): boolean {
    if (!this.currentBorrow) {
      return false;
    }

    if (
      this.currentBorrow.memberId !==
      memberId
    ) {
      return false;
    }

    if (!this.canRenew()) {
      return false;
    }

    this.currentBorrow.dueDate.setDate(
      this.currentBorrow.dueDate.getDate() +
        this.getMaxBorrowDays()
    );

    this.renewalCount++;

    return true;
  }

  getRenewalCount(): number {
    return this.renewalCount;
  }

  canRenew(): boolean {
    return (
      this.renewalCount <
      this.getMaxRenewals()
    );
  }
}

class Magazine
  extends LibraryItem
  implements IBorrowable
{
  private currentBorrow?: BorrowRecord;

  constructor(
    id: string,
    title: string,
    acquisitionDate: Date,
    public issueNumber: number,
    public publicationMonth: Date
  ) {
    super(
      id,
      title,
      'Magazine',
      acquisitionDate
    );
  }

  getMaxBorrowDays(): number {
    const today = new Date();

    const diffMonths =
      (today.getFullYear() -
        this.publicationMonth.getFullYear()) *
        12 +
      (today.getMonth() -
        this.publicationMonth.getMonth());

    return diffMonths > 6 ? 14 : 7;
  }

