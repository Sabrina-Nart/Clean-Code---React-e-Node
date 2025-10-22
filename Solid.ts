// SOLID

// - SRP
// - OCP
// - LSP
// - ISP
// - DIP


/// Pagamento por billet, credit, debit

interface Card{
    number: number;
    cvv: number;
    expiration: number;
}

interface PaymentMethod {
  getDiscountAmount(amount: number) => number;
}

class Billet implements PaymentMethod {
    getDiscountAmount(amount: number): number {
        return amount * 0.01;
    }
}

class Credit implements PaymentMethod {
    private installments: number;

    constructor(installments: number) {
        this.installments = installments;
    }

    getDiscountAmount(amount: number): number {
        if (this.installments === 1) {
            return amount * 0.05;
        }

        if (this.installments < 6) {
            return amount * 0.02;
        }

        return 0;
    }
}

class Debit implements PaymentMethod {
    getDiscountAmount(amount: number): number {
        return amount * 0.05;
    }
}


class Pix implements PaymentMethod {
    getDiscountAmount(amount: number): number {
        return amount * 0.20;
    }
}

class CalculateOrderDiscount {
  private paymentMethod: PaymentMethod;

  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  public execute(amount: number) {
    // cálculo do desconto

  return this.paymentMethod.getDiscountAmount(amount);
  }
}

const calculateOrderDiscount = new CalculateOrderDiscount(
  new Credit(6)
)

calculateOrderDiscount.execute(2000)

////////////////////

class SubmitOrderInvoice {
  public execute() {
    // emissão da nota
  }
}

class CreateOrder {
  public execute() {
    // CalculateOrderDiscount
    // SubmitOrderInvoice
  }
}
