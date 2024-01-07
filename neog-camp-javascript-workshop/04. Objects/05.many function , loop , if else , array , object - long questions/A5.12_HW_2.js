console.log("A5.12_HW_2")
console.log("------ ------ ------")

const productsData = [
  { id: 101, name: "Laptop", price: 999.99, brand: "Dell", category: "Electronics", rating: 4.5 },
  { id: 102, name: "Smartphone", price: 599.99, brand: "Samsung", category: "Electronics", rating: 4.0 },
  { id: 103, name: "Running Shoes", price: 79.99, brand: "Nike", category: "Footwear", rating: 4.8 },
  { id: 104, name: "T-shirt", price: 19.99, brand: "Adidas", category: "Apparel", rating: 4.2 },
  { id: 105, name: "Coffee Maker", price: 49.99, brand: "Hamilton", category: "Kitchen Appliances", rating: 4.6 }
];


function getExpensive(data){
  let expensiveProduct = data[0]
  for(let i = 1; i < data.length; i++){
    if(data[i].price > expensiveProduct.price ){
      expensiveProduct = data[i]
    }
  }
  return expensiveProduct
}

function gettotalProducts(data){
  let count = 0
  for (let i = 0; i < data.length; i++) {
    if(data[i].id >= 101){
      count = count + 1
    }
  }
  return count
}

function calculateProductAvg(data, productName){
  let total = 0
  for (let i = 0; i < data.length; i++) {
   
      total +=  data[i][productName]
      
    
  }
  return total / data.length
}

function calculateHighestRating(data){
  let highestRatingProduct = data[0]
  for(let i = 1; i < data.length; i++){
    if(data[i].rating > highestRatingProduct.rating ){
      highestRatingProduct = data[i]
    }
  }
  return highestRatingProduct
}




function genrateProductAnalysisReport (productsData){

  let expensive = getExpensive(productsData)
  let totalProducts = gettotalProducts(productsData)
  let totaPriceAvg = calculateProductAvg(productsData, "price")
  let totalRatingAvg = calculateProductAvg(productsData, "rating")
  let highesrRating = calculateHighestRating(productsData)
  // let totalRating = gettotalRating(productsData)
  

  let report = "======= Product Analysis =======\nMost Expensive Product Details:\n"
  report += "Name: " + expensive.name + "\n"
  report += "Price: $" + expensive.price + "\n"
  report += "Brand: " + expensive.brand +  "\n"
  report += "Category: " + expensive.category + "\n"
  report += "Rating: " + expensive.rating + "\n"
  report += "---- ---- ---- \n\n"
  
  report += "Totals and Averages: \n"
  report += "Total Electronic Products: " + totalProducts + "\n"
  report += "Average Price: $" + totaPriceAvg  + "\n"
  report += "Average Rating: " + totalRatingAvg + "\n"
  report += "---- ---- ---- \n\n"
  
  report += "Product with Highest Rating:\n"
  report += "Name: " + highesrRating.name + "\n"
  report += "Price: " + highesrRating.price + "\n"
  report += "Brand: " + highesrRating.brand + "\n"
  report += "Category: " + highesrRating.category + "\n"
  report += "Rating: " + highesrRating.rating + "\n"
  report += "---- ---- ---- \n\n"

  report += "Products with Price Less Than $50:\n"
  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].price < 50) {
        report += "Name: " + productsData[i].name + "\n" +
  "Price: " + productsData[i].price + "\n" +
  "Brand: " + productsData[i].brand + "\n" +
  "Category: " + productsData[i].category + "\n" +
  "Rating: " + productsData[i].rating + "\n" +
  "---- ---- ---- \n\n"
      
    }
  }


  return report;
}
console.log(genrateProductAnalysisReport (productsData))