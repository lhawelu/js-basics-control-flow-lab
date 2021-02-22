function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return "This one is on me!"
  } else if (ride <= 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
};

function ternaryCheckCity(city){
  const isNyc = "Ok, sounds good."
  const notNYC = "No go."
  if (city === "NYC") {
    return isNyc
  } else {
    return notNYC
  }
}

function switchOnCharmFromTip(tip){
  const generousResponse = "Thank you so much."
  const notGenerousResponse = "Thank you."
  switch (tip) {
    case "generous":
      return generousResponse;
    case "not as generous":
      return notGenerousResponse;
    default:
      return "Bye."
  }
}
