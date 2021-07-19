const rideLength = '500'

function scuberGreetingForFeet(rideLength){
  let ride;
  if (rideLength <= 400) {
    ride = "This one is on me!"
  } else if (rideLength <= 2500) {
    ride = "I will gladly take your thirty bucks."
  } else {
    ride = "No can do."
  }
  return ride
}

function ternaryCheckCity(cityName){
  const isNy = cityName == 'NYC' ? "Ok, sounds good." : "No go."
  return isNy
}

function switchOnCharmFromTip(tipAmount){
  let tipResponse;

  switch (tipAmount) {
    case "generous":
      tipResponse = "Thank you so much."
      break;
    case "not as generous":
      tipResponse = "Thank you."
      break;
    default:
      tipResponse = "Bye."
  }
  return tipResponse
}