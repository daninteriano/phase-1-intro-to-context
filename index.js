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

function createEmployeeRecords(array){
    return array.map((item) => { return createEmployeeRecord(item)})
}

function createTimeInEvent(record, dateStamp){
    let splitData = dateStamp.split(' ')
    
    let hourStamp = splitData[1]
    let dayStamp = splitData[0]
    
    record.timeInEvents = {
        type: "TimeIn",
        hour: `${hourStamp}`,
        date: `${dayStamp}`
    }
    
    return record
}

function createTimeOutEvent(record, dateStamp){
    let splitData = dateStamp.split(' ');
    let hoursStamp = splitData[1];
    let timeStamp = splitData[0]

    record.timeOutEvents = {
        type: "TimeOut",
        hour: `${hoursStamp}`,
        date: `${timeStamp}`
    }

    return record
}


/* 
  const record = {
    firstName: "",
    familyName: "",
    title: "",
    payPerHour: "",
    timeInEvents: [],
    timeOutEvents: []
    }
*/