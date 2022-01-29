function validateLogin(login) {
  return /^[A-z]{3,25}$/.test(login)
}
function validatePassword(password) {
  return /^[A-zА-я0-9]{8,16}$/.test(password)
}

function validateEmail(email) {
  return /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/.test(email)
  
}
export { validateLogin, validatePassword, validateEmail }