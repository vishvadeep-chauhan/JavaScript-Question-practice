console.log("A5_Exercise_2");
console.log("------ ------- ------- -------");
console.log("1.1");
const data = [
  {
    Name: "Rajesh Kumar",
    Department: "Marketing",
    hourlySalary: 250,
    week1Hours: 40,
    week2Hours: 42,
    week3Hours: 38,
    week4Hours: 39,
    bonusMultiplier: 0.65
  },
  {
    Name: "Priya Gupta",
    Department: "Sales",
    hourlySalary: 220,
    week1Hours: 38,
    week2Hours: 40,
    week3Hours: 37,
    week4Hours: 41,
    bonusMultiplier: 0.5
  },
  {
    Name: "Ankit Sharma",
    Department: "Finance",
    hourlySalary: 280,
    week1Hours: 35,
    week2Hours: 36,
    week3Hours: 39,
    week4Hours: 38,
    bonusMultiplier: 0.8
  },
  {
    Name: "Ritu Singh",
    Department: "Operations",
    hourlySalary: 300,
    week1Hours: 42,
    week2Hours: 41,
    week3Hours: 43,
    week4Hours: 40,
    bonusMultiplier: 0.45
  },
  {
    Name: "Rahul Verma",
    Department: "IT",
    hourlySalary: 260,
    week1Hours: 37,
    week2Hours: 39,
    week3Hours: 38,
    week4Hours: 36,
    bonusMultiplier: 0.7
  }
];

console.log(data);

console.log("------ ------- ------- -------");
console.log("1.2");

function totalhours(employee) {
  return employee.week1Hours + employee.week2Hours + employee.week3Hours + employee.week4Hours;
}

let bonusThreshold = 40 * 4;

function calculateTotalSalary(data) {
  for (let i = 0; i < data.length; i++) {
    let totalHours = data[i].week1Hours + data[i].week2Hours + data[i].week3Hours + data[i].week4Hours;
    let bonusHours;
    if (totalHours > bonusThreshold) {
      bonusHours = totalHours - bonusThreshold;
    } else {
      bonusHours = 0;
    }
    const hourlySalary = data[i].hourlySalary;

    data[i].totalSalaryForFourWeeks = totalHours * hourlySalary;
    data[i].bonus = bonusHours * hourlySalary * data[i].bonusMultiplier;
  }
}

calculateTotalSalary(data);
console.log(data)
console.log("------ ------- ------- -------");
console.log("1.3");
console.log("------ ------- ------- -------");


function employeePayslips(data) {
 
  let report = "===== Employee Payslip =====\n\n"
  for (let i = 0; i < data.length; i++) {
    const totalHours = totalhours(data[i]);
    report += "Name: " + data[i].Name + "\n" +
      "Department: " + data[i].Department + "\n" + 
      "Total Hours Worked: " + totalHours + "\n" +
      "Total Salary: " + data[i].totalSalaryForFourWeeks + "\n" +
      "Bonus: " + data[i].bonus + "\n-------\n"
    
    


               }
    return report
  }
  console.log(employeePayslips(data))


console.log("------ ------- ------- -------");
console.log("1.4");
console.log("------ ------- ------- -------");


function mostPaidEmployee(data) {
  let mostPaid = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].totalSalaryForFourWeeks > mostPaid.totalSalaryForFourWeeks) {
      mostPaid = data[i];
    }
  }
  return mostPaid;
}

function companyAverages(data) {
  let totalHoursWorked = 0;
  let totalSalary = 0;
  let totalWeek1Hours = 0;
  let totalWeek2Hours = 0;
  let totalWeek3Hours = 0;
  let totalWeek4Hours = 0;

  for (let i = 0; i < data.length; i++) {
    totalHoursWorked += totalhours(data[i]);
    totalSalary += data[i].totalSalaryForFourWeeks;
    totalWeek1Hours += data[i].week1Hours;
    totalWeek2Hours += data[i].week2Hours;
    totalWeek3Hours += data[i].week3Hours;
    totalWeek4Hours += data[i].week4Hours;
  }

  const companyAverageHours = totalHoursWorked / data.length;
  const averageWeek1Hours = totalWeek1Hours / data.length;
  const averageWeek2Hours = totalWeek2Hours / data.length;
  const averageWeek3Hours = totalWeek3Hours / data.length;
  const averageWeek4Hours = totalWeek4Hours / data.length;

  return {
    totalHoursWorked,
    totalSalary,
    companyAverageHours,
    averageWeek1Hours,
    averageWeek2Hours,
    averageWeek3Hours,
    averageWeek4Hours,
  };
}

function humanResourceReport(data) {
  let report = "====== Human Resource Report =====\n\n------\nMost Paid Employee\n------\n";
  const mostPaidEmp = mostPaidEmployee(data);
  report += "Name: " + mostPaidEmp.Name + "\n" +
            "Department: " + mostPaidEmp.Department + "\n" + 
            "Total Hours Worked: " + totalhours(mostPaidEmp) + "\n" +
            "Total Salary: " + mostPaidEmp.totalSalaryForFourWeeks + "\n\n------\nCompany Averages\n------\n";
  
  const averages = companyAverages(data);
  report += "Total Hours worked by All: " + averages.totalHoursWorked + "\n" +
            "Total Average hours of Company: " + averages.companyAverageHours + "\n------\n" +
            "Total Average of Week One: " + averages.averageWeek1Hours + "\n" +
            "Total Average of Week Two: " + averages.averageWeek2Hours + "\n" +
            "Total Average of Week Three: " + averages.averageWeek3Hours + "\n" +
            "Total Average of Week Four: " + averages.averageWeek4Hours + "\n";

  return report;
}
console.log(humanResourceReport(data));