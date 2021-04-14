// Write a function called validatePassword 
// Function takes password as a parameter
// Must be a minimum of 8 characters
// Must contain at least one lower case letter
// Must contain at least one upper case letter
// Must contain at least one numeric value
// Must contain at least one special character


function validatePassword(password) {
  const passwordLenth = 8
  const numerics = '0123456789'
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const specialChars = '!@#$%'


  for (let i = 0; i < password.length; i++) {
    if (passwordLenth >= 8) return true

    // if (numerics.password) return true

    // if (lowerCase.password) return true

    // if (upperCase.password) return true

    // if (specialChars.password) return true
  }



  // eslint-disable-next-line no-unused-vars
  // let validatePassword = (password) => {
  //   // eslint-disable-next-line max-len
  //   if ((passwordLenth(password) && (numerics(password) && (lowerCase(password) && (upperCase(password) && (specialChars(password))))))) return true
  // }
}


module.exports = validatePassword
