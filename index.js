
function validatePassword(password) {
  if (islength(password) && islowerCase(password) && isUpperCase(password) && isnumberCheck(password) && isCharCheck) {
    return true
  }
}
let islength = (password) => {
  if (password.length < 8) {
    return false
  } else {
    return true
  }
}



let islowerCase = (password) => {
  let islowerCase = 'abcdefghijklmnopqrstuvwzyz'

  for (let i = 0; i < islowerCase.length; i++) {
    if (islowerCase !== password.toLowerCase()) {
      return true
    }
    else return false
  }
}



let isUpperCase = (password) => {
  let isUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (let i = 0; i < isUpperCase.length; i++) {
    if (isUpperCase !== password.toUpperCase()) {
      return true
    }
    else return false
  }
}


let isnumberCheck = (password) => {
  let numerics = '0123456789'

  for (let i = 0; i < password.length; i++) {
    if (numerics.indexOf(password[i]) <= 0) {
      return true
    }

    return false
  }
}



let isCharCheck = (password) => {
  let chars = '!@#$%^&?~'

  for (let i = 0; i < password.length; i++) {
    if (chars.indexOf(password[i]) >= 0) {
      return true
    }
    else return false
  }
}

module.exports = validatePassword
