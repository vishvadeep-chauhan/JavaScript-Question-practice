console.log("A5_Exercise_1");
console.log("----- ------ -----");
console.log("1.1");

const salesPersonData = [
  {
    name: "Rajesh",
    location: "Mumbai",
    q1Sales: 120000,
    q2Sales: 145000,
    q3Sales: 130000,
    q4Sales: 155000,
  },
  {
    name: "Sneha",
    location: "Delhi",
    q1Sales: 90000,
    q2Sales: 110000,
    q3Sales: 95000,
    q4Sales: 120000,
  },
  {
    name: "Arun",
    location: "Chennai",
    q1Sales: 100000,
    q2Sales: 125000,
    q3Sales: 115000,
    q4Sales: 135000,
  },
  {
    name: "Kavita",
    location: "Kolkata",
    q1Sales: 85000,
    q2Sales: 95000,
    q3Sales: 88000,
    q4Sales: 105000,
  },
  {
    name: "Sanjay",
    location: "Mumbai",
    q1Sales: 110000,
    q2Sales: 135000,
    q3Sales: 120000,
    q4Sales: 140000,
  },
  {
    name: "Divya",
    location: "Chennai",
    q1Sales: 95000,
    q2Sales: 120000,
    q3Sales: 110000,
    q4Sales: 130000,
  },
];

console.log(salesPersonData);

console.log("----- ------ -----");
console.log("1.2");
console.log("----- ------ -----");

for (let i = 0; i < salesPersonData.length; i++) {
  const noOfSales = 4;
  const totalSales =
    salesPersonData[i].q1Sales +
    salesPersonData[i].q2Sales +
    salesPersonData[i].q3Sales +
    salesPersonData[i].q4Sales;

  salesPersonData[i].totalSales = totalSales;
  salesPersonData[i].avgSales = totalSales / noOfSales;
}
console.log(salesPersonData);

console.log("----- ------ -----");
console.log("1.3");
console.log("----- ------ -----");

function getPerformanceGrade(data) {
  if (data >= 140000) {
    return "Top Performer";
  } else if (data >= 120000 && data < 140000) {
    return "Medium Performer";
  } else {
    return "Low Performer";
  }
}

function performanceReport(salesPersonData) {
  let report = "===== Performance Report =====\n";

  for (let i = 0; i < salesPersonData.length; i++) {
    report += "Name: " + salesPersonData[i].name + "\n";
    report += "Location: " + salesPersonData[i].location + "\n";
    report += "Total Sales: " + salesPersonData[i].totalSales + "\n";
    report += "Average Sales: " + salesPersonData[i].avgSales + "\n";
    report +=
      "Performance Grade: " + getPerformanceGrade(salesPersonData[i].avgSales) + "\n";

    report += "------\n"; // Add a separator between each salesperson's data
  }

  return report;
}
console.log(performanceReport(salesPersonData));

console.log("----- ------ -----");
console.log("1.4");
console.log("----- ------ -----");

function getMaxTotalSales(data) {
  let maxTotal = data[0];
  for (let i = 0; i < data.length; i++) {
    if (data[i].totalSales > maxTotal.totalSales) {
      maxTotal = data[i];
    }
  }
  return maxTotal;
}

function calculateTopPerformers(data) {
  let topPerformers = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].avgSales >= 140000) {
      topPerformers.push(data[i]);
    }
  }
  return topPerformers;
}

function calculateQuarterlyAverage(data, quarter) {
  let totalSales = 0;
  for (let i = 0; i < data.length; i++) {
    totalSales += data[i][quarter];
  }
  return totalSales / data.length;
}

function calculateTotalSales(data) {
  let totalSales = 0;
  for (let i = 0; i < data.length; i++) {
    totalSales += data[i].totalSales;
  }
  return totalSales;
}

function calculateTotalAverageSales(data) {
  const totalAvgSalesQ1 = calculateQuarterlyAverage(data, "q1Sales");
  const totalAvgSalesQ2 = calculateQuarterlyAverage(data, "q2Sales");
  const totalAvgSalesQ3 = calculateQuarterlyAverage(data, "q3Sales");
  const totalAvgSalesQ4 = calculateQuarterlyAverage(data, "q4Sales");

  return totalAvgSalesQ1 + totalAvgSalesQ2 + totalAvgSalesQ3 + totalAvgSalesQ4;
}








function annualSalesReport(salesPersonData) {
  let bestPerformer = getMaxTotalSales(salesPersonData);
  let topPerformers = calculateTopPerformers(salesPersonData);

  let annualReport = "===== Annual Sales Report =====\n";
  annualReport += "----- \nBest Performer\n------\n";
  annualReport += "Name: " + bestPerformer.name + "\n";
  annualReport += "Location: " + bestPerformer.location + "\n";
  annualReport += "Total Sales By Best Performer: " + bestPerformer.totalSales + "\n\n";

  annualReport += "----- \nTop Performers\n------\n";
  annualReport += "Total No. of Top Performers: " + topPerformers.length + "\n\n";
  for (let i = 0; i < topPerformers.length; i++) {
    annualReport += "Name: " + topPerformers[i].name + "\n";
    annualReport += "Location: " + topPerformers[i].location + "\n";
    annualReport += "Total Sales: " + topPerformers[i].totalSales + "\n\n";
  }

  annualReport += "----- \nSales Averages\n------\n";
  annualReport += "Q1 Average Sales: " + calculateQuarterlyAverage(salesPersonData, "q1Sales") + "\n";
  annualReport += "Q2 Average Sales: " + calculateQuarterlyAverage(salesPersonData, "q2Sales") + "\n";
  annualReport += "Q3 Average Sales: " + calculateQuarterlyAverage(salesPersonData, "q3Sales") + "\n";
  annualReport += "Q4 Average Sales: " + calculateQuarterlyAverage(salesPersonData, "q4Sales") + "\n";
  annualReport += "Total Sales: " + calculateTotalSales(salesPersonData) + "\n";
  annualReport += "Total Average Sales: " + calculateTotalAverageSales(salesPersonData) + "\n";



  return annualReport;
}
console.log(annualSalesReport(salesPersonData));
