function validatePassword(password) {
  const passwordLenth = 8
  const numerics = '0123456789'
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const specialChars = '!@#$%'


  for (let i = 0; i < password.length; i++) {
    if (passwordLenth >= 8) return true

    if (numerics.password) return true

    if (lowerCase.password) return true

    if (upperCase.password) return true

    if (specialChars.password) return true
  }



  let validatePassword = (password) => {
    // eslint-disable-next-line max-len
    if ((passwordLenth(password) && (numerics(password) && (lowerCase(password) && (upperCase(password) && (specialChars(password))))))) return true
  }
}


module.exports = validatePassword
