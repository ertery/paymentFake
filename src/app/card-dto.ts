export class CardDTO {

  nameOnCard: String;
  creditCardNumber: String;
  expiryDate: String;
  amount: number;

  constructor(nameOnCard: String, creditCardNumber: String, expiryDate: String, amount: number) {
    this.nameOnCard = nameOnCard;
    this.creditCardNumber = creditCardNumber;
    this.expiryDate = expiryDate;
    this.amount = amount;
  }



}
