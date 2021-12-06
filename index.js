function createEmployeeRecord(array){
    const record = {
    firstName: "",
    familyName: "",
    title: "",
    payPerHour: "",
    }
    record.firstName = array[0]
    record.familyName = array[1]
    record.title = array[2]
    record.payPerHour = array[3]
    record['timeInEvents'] = [];
    record['timeOutEvents'] = [];
    
    return record
}

function hoursWorkedOnDate(record, yearToDateStamp){
    let timeInDateMatch = record.timeInEvents.find((object) => object['date'] === yearToDateStamp).hour;
    let timeOutDateMatch = record.timeOutEvents.find((object) => object['date'] === yearToDateStamp).hour;
   
      return timeOutDateMatch/100 - timeInDateMatch/100
  }

 function wagesEarnedOnDate(record, yearToDateStamp){
    let hoursDated = hoursWorkedOnDate(record, yearToDateStamp)
    return hoursDated * record.payPerHour
 } 

function allWagesFor(record){
    let dates = record.timeInEvents.map(function(calendar){return calendar.date})
    
    let wagesAccumulated = dates.reduce(function(one, date){return one + wagesEarnedOnDate(record, date)}, 0)

    return wagesAccumulated;
}

function calculatePayroll(arrayRecord){
   //using wagesEarnedOneDate, ACCUMULATE value of ALL DATES worked in RECORD
   let employeesDates = arrayRecord.map(function(employee){return employee.timeInEvents.date})

    //return the SUM of pay owed to ALL Employees for ALL DATES
   return employeesDates.reduce(function(one, date){return one + wagesEarnedOnDate(recordObject, date)}, 0)
 
    }

function createEmployeeRecords(array){
    return array.map((item) => { return createEmployeeRecord(item)})
}

function createTimeInEvent(record, dateStamp){
    let splitData = dateStamp.split(' ') 
    
    let hourStamp = parseInt(splitData[1])
    let dayStamp = splitData[0]
    const punchInStuff = {
        type: "TimeIn",
        hour: hourStamp,
        date: `${dayStamp}`
    }
    record.timeInEvents.push(punchInStuff)
    return record
}

function createTimeOutEvent(record, dateStamp){
    let splitData = dateStamp.split(' ');
    let hoursStamp = parseInt(splitData[1]);
    let timeStamp = splitData[0]

    const punchOutStuff = {
        type: "TimeOut",
        hour: hoursStamp,
        date: `${timeStamp}`
    }
    record.timeOutEvents.push(punchOutStuff)

    return record
}

/*
  const record = {
    firstName: "Naruto",
    familyName: "Uzumaki",
    title: "Hokage",
    payPerHour: "7",
    timeInEvents: {
        type: "TimeIn",
        hour: 0900,
        date: "0044-03-15"
    },
    timeOutEvents: {
        type: "TimeOut",
        hour: 1100,
        date: "0044-03-15"
    }
    }*/
