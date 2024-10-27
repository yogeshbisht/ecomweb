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

export { getCurrencySymbol };
