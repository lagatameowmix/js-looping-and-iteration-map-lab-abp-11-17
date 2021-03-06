// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function(name){
    return name.toLowerCase()
  })
}

function nameToAttributes(array){
   return array.map(function(name){
    let fName = name.split(" ")[0]
    let lName = name.split(" ")[1]
    return {firstName: fName, lastName:lName};
  })
}

function attributesToPhrase(array){
  return array.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}
