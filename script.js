// ---------- AUTH SYSTEM ----------

function register() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if (!user || !pass) {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("user_" + user, pass);

  alert("Account created!");
  window.location.href = "login.html";
}

function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  let savedPass = localStorage.getItem("user_" + user);

  if (savedPass === pass) {
    localStorage.setItem("currentUser", user);

    alert("Login successful!");

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

// ---------- GAME SYSTEM ----------

function openGame(name) {

  if (name === "Obby") {
    window.location.href = "obby.html";
  }

  if (name === "Racing") {
    window.location.href = "racing.html";
  }

  if (name === "Battle") {
    window.location.href = "battle.html";
  }

}
