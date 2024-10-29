const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case "usd":
      return "$";
    case "eur":
      return "€";
    case "gbp":
      return "£";
  }
};

const amountWithCurrency = (amount: number, currency: string = "USD") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2
  }).format(amount);

export { getCurrencySymbol, amountWithCurrency };
