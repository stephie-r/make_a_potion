//DECLARATIONS
const body = document.querySelector("body");
const toggleButton = document.querySelector("#toggle");
const switchMode = document.querySelector(".switch_mode");
const buttonCta = document.querySelector("#cta");
const imgPotion = document.querySelector("#potionimg")
const buttonYes = document.querySelector("#Yes");
const buttonNo = document.querySelector("#No");
const hedding = document.querySelector("#mainH1");
const element = document.querySelector("#p");
const container = document.querySelector("div");
let potionsSuccess = 0;
//POTION CLASS
class Potion {
  constructor(name,color, ingredient, cookingPoint) {
    this.name = name
    this.color = color;
    this.ingredient = ingredient;
    this.cookingPoint = cookingPoint;
  }
}
//SWITCH EVENT DARK-LIGHT MODE
toggleButton.addEventListener("click", darkMode);
function darkMode() {
  switchMode.classList.toggle("active");
  body.classList.toggle("active");
  toggleButton.classList.toggle("active");
}
//START CLASS 
buttonCta.addEventListener("click", () =>
 {
  element.innerHTML =
    "Hi and welcome to your first potion class! Shall we get started?";
  buttonCta.addEventListener("click",startClass());
})
function startClass() {
  let answer = prompt(
    "Hi and welcome to your first potion class! Shall we get started? yes / no"
  ).toLowerCase();
  potionsSuccess += returnPotions(answer);
  console.log(`You have created ${potionsSuccess} potions`);
  alert(`You have created ${potionsSuccess} potions`);
  var elem = document.getElementById("potion_quantity");
  elem.innerHTML = potionsSuccess;
}
function returnPotions(answer) {
  if (answer == "yes") {
    alert(
      "Hi I am so exited to begin! let s get started! We ll give you a bowl and some Mandrake leaves! First of all let's start stiring!"
    );
    //PREPATATION FIRST STEP
    return startStiring();
  } else if (answer == "no") {
    alert(
      "Are you sure? Well alchemy is down the hall to the right thanks for stopping by!"
    );
    console.log("Snape glares at you for leaving the class.");
  }

  //NESTING CONDITIONALS ELSE
  else {
    alert("Well quite quiet are we? Don t worry I ll help you out!");
    console.log("You will be persuaded by your prefect to participate");
    let answer2 = prompt(
      " Hi I am your prefect and welcome to your first potion class! Shall we get started? yes / no"
    ).toLowerCase();
    if (amswer2 == "yes") {
      alert(
        "Hi I am so exited to begin! let s get started! We ll give you a bowl and some Mandrake leaves! First of all let s start stiring!"
      );
      return startStiring();
    } else if (answer2 == "no") {
      alert(
        "Are you sure? Well alchemy is down the hall to the right thanks for stopping by!"
      );
      console.log("Snape glares at you for leaving the class.");
    }
    //Nesting conditionals
    else {
      alert("Well quite quiet are we? Don t worry I ll help you out!");
      console.log("You will be persuaded by your prefect to participate");
    }
  }
}
function startStiring() {
  //FIRST CONDITION MET
  let answer = prompt("Do you wish to stir the potion? y / n").toLowerCase();
  if (answer == "y") {
    return stiring(1, true);
  } else if (answer == "n") {
    return stiring(0, false);
  } else {
    console.log("Start stiring!");
    return startStiring();
  }
}
function stiring(stir, keepStiring) {
  if (keepStiring) {
    // TRUE
    alert(`You have stired ${stir} times`);
    let answer = prompt("Do you wish to keep on stiring? y/n").toLowerCase();
    if (answer == "y") {
      return stiring(++stir, true);
    } else if (answer == "n") {
      return stiring(stir, false);
    } else {
      return stiring(stir, true);
    }
  } else {
    // FALSE
    if (stir == 5) {
      console.log("What a wonderfull mix!");
      alert("You made a beautiful fragant potion");
      return startMixing();
    } else if (stir > 5) {
      return returnExplotion();
    } else {
      return returnWater();
    }
  }
}
function returnWater() {
  console.log("Your potion looks like water");
  alert("Your potion looks the same");
  const water = new Potion(
    "Water",
    "Transparent, no color reaction",
    "Water",
    "15 minutes"
  );
  element.innerHTML = "You've created :" + water.ingredient + " how refreshing..";
  hedding.innerHTML = "Created: " + water.name;
  imgPotion.classList.toggle("water");
  return 0;
}
function returnExplotion() {
  alert("Get behind me your potion is unstable");
  console.log("Your potion exploded!");

  const Explotion = new Potion(
    "Unstable Potion!",
    "Red",
    "Smoke, Fire, Occamy eggshell",
    "30 minutes"
  );
  element.innerHTML = "You've created: " + Explotion.ingredient;
  hedding.innerHTML = "" + Explotion.name;
  return 0;
}
function startMixing() {
  //SECOND CONDITION MET
  let answer = prompt("Do you wish to keep on creating? y / n").toLowerCase();
  if (answer == "y") {
    alert("You may start mixing our newest ingredient unicorn hair!");
    return mixing(1, true);
  } else if (answer == "n") {
    return mixing(0, false);
  } else {
    console.log("Go on add some more!");
    return startMixing();
  }
}
function mixing(mix, keepMixing) {
  if (keepMixing == true) {
    //TRUE
    alert(`You have mixed ${mix} hairs`);
    let answer = prompt(
      "Do you wish to mix some Unicorn Hair to the potion? y / n"
    ).toLowerCase();
    if (answer == "n") {
      return mixing(mix, false);
    } else if (answer == "y") {
      return mixing(++mix, true);
    } else {
      console.log("Start mixing!");
      alert("Be meticulouse and start mixing!");
      return mixing(mix, true);
    }
  } else {
    //FALSE
    if (mix == 2) {
      //CORRECT FORMULA WALKTHROUGH
      return returnFelixFelicis();
    } else if (mix > 2) {
      return returnRatCup();
    } else {
      return returnNotWorking();
    }
  }
}
function returnFelixFelicis() {
  //1POTION
  console.log(
    "The aroma is perfect and the silver lines of the bervarge are exquisite!"
  );
  const FelixFelicis = new Potion(
    "Felix Felicis",
    "Molten gold",
    "Squil bulb, Murtlap tenctacle, Occamy eggshell",
    "6 months brewing time"
  );
  element.innerHTML = "Felix Felicis contains: " + FelixFelicis.ingredient;
  hedding.innerHTML = ""+ FelixFelicis.name;
  return 1;
}
function returnRatCup() {
  alert("Your potion has turned into a hairy vase!");
  console.log("Your potion has turned into a Rat's cup!");
  const failedPotion = new Potion(
    "A gastly concoction",
    "Brown",
    "Charcoal, Squil bulb",
    "10 minutes + reciting an enchantment badly"
  );
  element.innerHTML = "Your ingredients are: " + failedPotion.ingredient ;
  hedding.innerHTML = "You've created " + failedPotion.name;
  return 0;
}
function returnNotWorking() {
  console.log("Your potion is still not reacting..");
  const water = new Potion(
    "Water",
    "Transparent, no color reaction",
    "Water",
    "15 minutes",
  );
  element.innerHTML = "You've created :" + water.name + " how refreshing..";
  hedding.innerHTML = "" + water.name;
  imgPotion.classList.toggle("water");
  return 0;
}