// ---------- AUTH SYSTEM ----------
function register() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if (!user || !pass) return alert("Fill all fields");

  localStorage.setItem("user_" + user, pass);
  alert("Account created!");
  window.location.href = "login.html";
}

function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  let saved = localStorage.getItem("user_" + user);

  if (saved === pass) {
    localStorage.setItem("currentUser", user);
    alert("Login success!");
    window.location.href = "index.html";
  } else {
    alert("Wrong username or password");
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

// ---------- USER ----------
function getUser() {
  return localStorage.getItem("currentUser");
}

// ---------- GAME SYSTEM ----------
function openGame(name) {
  alert("Loading " + name + "...");
}
