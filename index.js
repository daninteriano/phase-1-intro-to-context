let createEmployeeRecord = function(row){
    console.log(row)
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
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

function hoursWorkedOnDate(record, yearToDateStamp){
    let timeInDateMatch = record.timeInEvents.find((object) => object.date === yearToDateStamp);
    let timeOutDateMatch = record.timeOutEvents.find((object) => object.date === yearToDateStamp);
   
    return (timeOutDateMatch.hour - timeInDateMatch.hour)/100
}

function wagesEarnedOnDate(record, yearToDateStamp){
    let hoursDated = hoursWorkedOnDate(record, yearToDateStamp)
    * record.payPerHour
    return parseFloat(hoursDated.toString())
} 

function allWagesFor(record){
    let dates = record.timeInEvents.map(function(calendar){return calendar.date})
    
    let wagesAccumulated = dates.reduce(function(one, date){return one + wagesEarnedOnDate(record, date)}, 0)

    return wagesAccumulated;
}

function calculatePayroll(array){
   //using wagesEarnedOneDate, ACCUMULATE value of ALL DATES worked in RECORD
    return array.reduce(function(one, date){ 
        console.log(one)
        console.log(date)
        return one + allWagesFor(date)}, 0)


    //return the SUM of pay owed to ALL Employees for ALL DATES
    
 
}

