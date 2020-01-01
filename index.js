function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {

  var uppercase = "HELLO!"

  uppercase.toUpperCase() === uppercase // true

  var lowercase = 'hello!'

  lowercase.toLowerCase() === lowercase // true

  var mixedCase = 'I love you, Grandma.'

  mixedCase.toLowerCase() === mixedCase // false

  mixedCase.toUpperCase() === mixedCase // false

  if (lowercase)
  return("I can\'t hear you!");

  if (uppercase)
  return("YES INDEED!");

  if("I love you, Grandma.")
  return("I love you, too.")
}
