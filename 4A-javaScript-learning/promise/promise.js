const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation, for example, fetching data from an API
    setTimeout(() => {
      const success = true; // Set to false for demonstration of rejection
  
      if (success) {
        resolve("Operation successful");
      } else {
        reject("Operation failed");
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
  
  // Using the Promise
  myPromise
    .then((result) => {
      console.log(result); // Output if the Promise is fulfilled
    })
    .catch((error) => {
      console.error(error); // Output if the Promise is rejected
    });
  