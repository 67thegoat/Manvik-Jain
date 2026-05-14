// =========================
// ACCOUNT SYSTEM
// =========================

function register() {

  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if (!user || !pass) {
    alert("Please fill all fields");
    return;
  }

  // Save account
  localStorage.setItem("user_" + user, pass);

  alert("Account created successfully!");

  // Go to login page
  window.location.href = "login.html";
}



function login() {

  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  let savedPass = localStorage.getItem("user_" + user);

  if (savedPass === pass) {

    // Save logged in user
    localStorage.setItem("currentUser", user);

    alert("Login successful!");

    // Go to home page
    window.location.href = "index.html";

  } else {

    alert("Wrong username or password");

  }

}



function logout() {

  localStorage.removeItem("currentUser");

  window.location.href = "login.html";

}



function getUser() {

  return localStorage.getItem("currentUser");

}



// =========================
// GAME SYSTEM
// =========================

function openGame(name) {

  // OBBY
  if (name === "Obby") {
    window.location.href = "obby.html";
  }

  // RACING
  if (name === "Racing") {
    window.location.href = "racing.html";
  }

  // BATTLE
  if (name === "Battle") {
    window.location.href = "battle.html";
  }

}



// =========================
// GAME START BUTTONS
// =========================

function startObby() {

  alert("🔥 Obby starting...");

}



function startRace() {

  alert("🏎️ Race starting...");

}



function startBattle() {

  alert("⚔️ Battle starting...");

}
