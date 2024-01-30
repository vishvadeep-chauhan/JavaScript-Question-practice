// Currency conversion rates (to USD)
const conversionRates = {
    EUR: 1.18,
    GBP: 1.38,
    JPY: 0.0094,
    INR: 0.014,
    AUD: 0.75,
  };
  
  // Conversion function
  function convert(amount, currency) {
    if (conversionRates[currency]) {
      const convertedAmount = amount * conversionRates[currency];
      console.log(`${amount} ${currency} is approximately ${convertedAmount.toFixed(2)} USD`);
    } else {
      console.log(`Conversion rate not available for ${currency}`);
    }
  }
  
  // 1. Using call
  convert.call(null, 1000, 'EUR');
  
  // 2. Using apply
  convert.apply(null, [5000, 'JPY']);
  
  // 3. Using bind
  const convertToUSD = convert.bind(null, undefined, 'USD');
  
  // Testing the bind method
  convertToUSD(1000);
  convertToUSD(2000);
  