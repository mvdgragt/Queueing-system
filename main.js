var passengers = [];

let passengerName = document.querySelector("#passengerName");
let addPassenger = document.querySelector("#addPassenger");
let checkIn = document.querySelector("#checkIn");
let fastTrack = document.querySelector("#fastTrack");
let emptyList = document.querySelector("#emptyList");

// Adds a new passenger to the bottom of the list
addPassenger.addEventListener("click", () => {
  let onePassenger = passengerName.value;
  passengers.push(onePassenger);
  
  let showAmount;
  let maxNumber = 8;
  if (passengers.length > maxNumber) {
    showAmount = maxNumber;
  } else {
    showAmount = passengers.length;
  }

  var html = "";
  for (var i = 0; i < showAmount; i++) {
    html += "<li>" + passengers[i] + "</li>";

    document.getElementById("list").innerHTML = html;
    document.getElementById("passengerName").value = "";
    document.querySelector("hgroup").style.display = "none";
  }
});

// Removes top listed passenger from the list

checkIn.addEventListener("click", () => {
  passengers.shift();
  let showAmount;
  let maxNumber = 8;
  if (passengers.length > maxNumber) {
    showAmount = maxNumber;
  } else {
    showAmount = passengers.length;
  }

  // This removes final first list item when array is empty
  if (showAmount === 0) {
    let list = document.querySelector("li");
    
    list.remove();

    // create message: “There are currently no people standing in line”
    document.querySelector("hgroup").style.display = "inline-block";
    // create message: “There are currently no people standing in line”
  } else {
    // This removes each list item one by one
    document.querySelector("hgroup").style.display = "none";

    var html = "";
    for (var i = 0; i < showAmount; i++) {
      html += "<li>" + passengers[i] + "</li>";
      document.getElementById("list").innerHTML = html;
    }
  }
  
});

// Adds a new passenger to the top of the list
fastTrack.addEventListener("click", () => {
  let onePassenger = passengerName.value;
  passengers.unshift(onePassenger);
  let showAmount;
  let maxNumber = 8;
  if (passengers.length > maxNumber) {
    showAmount = maxNumber;
  } else {
    showAmount = passengers.length;
  }

  var html = "";
  for (var i = 0; i < showAmount; i++) {
    html += "<li>" + passengers[i] + "</li>";

    document.getElementById("list").innerHTML = html;
    document.getElementById("passengerName").value = "";
    document.querySelector("hgroup").style.display = "none";
  }
});