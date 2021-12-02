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
    debugger;
    let timeOutDateMatch = record.timeOutEvents.find((object) => object['date'] === yearToDateStamp).hour;
   
      return timeOutDateMatch/100 - timeInDateMatch/100
  }

 function wagesEarnedOnDate(record, yearToDateStamp){
    let hoursDated = hoursWorkedOnDate(record, yearToDateStamp)
    return hoursDated * record.payPerHour
 } 

function allWagesFor(record){
    let dates = record.timeInEvents.filter(function(objects){return objects.date}).date
    //wagesEarnedOnDate(record, date)
    let wagesAccumulated = dates.map((date) => wagesEarnedOnDate(record, date)).reduce()
    //accumulate VALUE of ALL DATES from record
    
    //return pay owed for ALL DATES
    return wagesAccumulated;
}

/*function calculatePayroll(record){

}*/

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
