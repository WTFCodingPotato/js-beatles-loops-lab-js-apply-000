function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for(let i=0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}
function johnLennonFacts (facts) {
  var shoutedFacts = []
  var i = 0
  while(i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }
  return shoutedFacts
}
function iLoveTheBeatles(number) {
  var empty = []
  do {
    empty.push('I love the Beatles!')
    number++
  }while (number < 15)
  return empty
}
