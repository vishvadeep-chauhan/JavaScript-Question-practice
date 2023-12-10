console.log("----- ----- -----")

const studentData = [
  {
    name: "Rahul",
    rollNo: 101,
    hindi: 80,
    english: 75,
    maths: 90,
    computer: 88,
    science: 82,
    totalMarks: 415,
    avgMarks: 83
  },
  {
    name: "Amit",
    rollNo: 102,
    hindi: 85,
    english: 70,
    maths: 95,
    computer: 92,
    science: 78,
    totalMarks: 420,
    avgMarks: 84
  },
  {
    name: "priya",
    rollNo: 103,
    hindi: 78,
    english: 92,
    maths: 87,
    computer: 95,
    science: 90,
    totalMarks: 442,
    avgMarks: 88.4
  },
{
  name: "Kaveri",
    rollNo: 104,
    hindi: 89,
    english: 95,
    maths: 96,
    computer: 98,
    science: 91,
    totalMarks: 469,
    avgMarks: 93.8
}
]

function getTopper(data){
  let highestTotalStudent = data[0]
  for(let i = 1; i < data.length; i++){
    if (data[i].totalMarks > highestTotalStudent.totalMarks) {
      highestTotalStudent = data[i]
    }
  }
  return highestTotalStudent
}

function getGrade(avg){
  if(avg >= 90) return "A";
  if(avg >= 80) return "B";
  if(avg >= 70) return "C";
  if(avg >= 60) return "D";
  if(avg >= 50) return "E";
  return "F";
  
}

function getAGradeCount(data){
  let count = 0
  for(let i = 0; i< data.length; i++){
    if(data[i].avgMarks >= 90){
      count = count + 1
    }
  }
  return count
}

function gettotalMarksScordBYClass(data){
  let classTotalMarks = 0
  for(let i = 0; i < data.length; i++){
    classTotalMarks = classTotalMarks + data[i].totalMarks
    
  }
  return classTotalMarks
}

function calculateSubjectAverage(data, subjectName){
  let totalMarks = 0
  for(let i = 0; i < data.length; i++){
    totalMarks = totalMarks + data[i][subjectName]
    // totalMarks = 0 + data[0]["hindi"]// 0 + 80
    // totalMarks = 80 + data[0]["hindi"] // 80 + 85
    
  }
  return totalMarks / data.length
}

function generateClassReprt(studentData){
  
  let topper = getTopper(studentData);
  let aGradeCount = getAGradeCount(studentData)
  let totalMarksScordBYClass = gettotalMarksScordBYClass(studentData)
  let hindiAverage = calculateSubjectAverage(studentData, "hindi")
  let mathsAverage = calculateSubjectAverage(studentData, "maths")
  let englishsAverage = calculateSubjectAverage(studentData, "english")
  let scienceAverage = calculateSubjectAverage(studentData, "science")
  let computerAverage = calculateSubjectAverage(studentData, "computer")

  
  let report = "===== Class performance Report ======\n";
  report += "Topper:\n";
  report += "-------\n";
  report += "Name: "+ topper.name + "\n";
  report += "Roll No: "+ topper.rollNo + "\n";
  report += "Total Marks: "+ topper.totalMarks +  "\n";
  report += "gread: " + getGrade(topper.avgMarks) + "\n"

  report += "\nA graders:\n"
  report += "----------\n"
  report += "Total no of A graders: " + aGradeCount + "\n"

  for( let i = 0; i < studentData.length; i++){
    if(studentData[i].avgMarks >= 90){
      report += "Name: " + studentData[i].name + "\nTotal Marks: " + studentData[i].totalMarks + "\n------"
    }
  }
  report += "\nClass Average:\n"
  report += "------\n"
  report += "Total Marks Scord by Class: " + totalMarksScordBYClass + "\n"


  report += "Total Average of class: " + totalMarksScordBYClass / studentData.length + "\n"
  report += "-------\n"

  report += "Total Average of Hindi; " + hindiAverage + "\n" 

  report += "Total Average of Maths; " + mathsAverage + "\n" 

  report += "Total Average of English; " + englishsAverage + "\n" 

  report += "Total Average of Science; " + scienceAverage + "\n" 

  report += "Total Average of Computers; " +computerAverage + "\n" 
  

    return report
}

console.log(generateClassReprt(studentData))

