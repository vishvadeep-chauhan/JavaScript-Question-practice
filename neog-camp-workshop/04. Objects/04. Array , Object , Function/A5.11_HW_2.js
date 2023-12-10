console.log("A5.11_HW_2")
console.log("--------------------------------")
const productsData = [
  {
    id: 1,
    productName: "Laptop",
    price2021: 19999,
    price2022: 18999,
    price2023: 15090,
    brand: "Dell",
		productRating: 5
  },
  {
    id: 2,
    productName: "Smartphone",
    price2021: 18999,
    price2022: 17999,
    price2023: 16999,
    brand: "Samsung",
		productRating: 4
  },
  {
    id: 3,
    productName: "Smartwatch",
    price2021: 36999,
    price2022: 32999,
    price2023: 29999,
    brand: "Apple", 
		productRating: 4
  }
];

console.log("1.1 ")

function printProductDetailsCard(id){
  let product = getProductDetailsCard(id)
  console.log("===== Details Card for Laptop ======\n" +
"ID : " + product.id + "\n------\nDetails:\n------\n" + 
"Product Name: " + product.productName + "\n" +
    "Price in 2021: " + product.price2021 + "\n" +
    "Price in 2022: " + product.price2022 + "\n" +
    "Price in 2023: " + product.price2023 + "\n" +
    "Brand: " + product.brand + "\n" +
    "Rating: " + product.productRating + "\n" +
    "------ ------ ------"
  
  
  )
  
}

function  getProductDetailsCard(id){
  for(let i  = 0; i < productsData.length; i++){
    if(productsData[i].id === id){
      return productsData[i]
    }
  }
}
printProductDetailsCard(1)
printProductDetailsCard(2)
printProductDetailsCard(3)


console.log("--------------------------------")
console.log("1.2")
console.log("--------------------------------")

function getyearPriceByminimumPrice(yearPrice, minimumPrice){
  let result = []
  for(let i = 0; i < productsData.length; i++){
    if(productsData[i][yearPrice] >= minimumPrice){
      result.push(productsData[i])
    }
  }
  return result

}
console.log("Products with price in 2021 >= 25000")
console.log(getyearPriceByminimumPrice("price2021", 25000))
console.log("Products with price in 2023 >= 16000")
console.log(getyearPriceByminimumPrice("price2023", 16000))

console.log("---- ----- ----- ")
console.log("1.3")
console.log("---- ----- ----- ")

for (let i = 0; i < productsData.length; i++){
  let noOfprise = 3
  let totalprice = productsData[i].price2021 + productsData[i].price2022 + productsData[i].price2023

  productsData[i].totalprice = totalprice
  productsData[i].avgPrice =  productsData[i].totalprice / noOfprise
  
}


function cutoffavgPrice(avgCuttoff){
for(let i = 0; i<productsData.length; i++ ){
  if(productsData[i].avgPrice > avgCuttoff){
    console.log("Average price of 3 years for " + productsData[i].productName + " is " +  productsData[i].avgPrice)
  }
}
  
}
cutoffavgPrice(12000)

console.log("---- ----- ----- ")
console.log("1.4")
console.log("---- ----- ----- ")

// 1.4 Write a function to take the entire array as data and return the product object that has highest averagePrice.

function getHighestAverageprice(data) {
  let highestAvgpriceData = data[0].avgPrice;
  for (let i = 0; i < data.length; i++) {
    if (data[i].avgPrice > highestAvgpriceData) {

      highestAvgpriceData = data[i]


    }

  }
  return highestAvgpriceData
}

console.log(getHighestAverageprice(productsData))