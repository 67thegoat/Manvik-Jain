function openGame(game) {
  if (game === "obby") {
    alert("Loading Obby Parkour...");
  }

  if (game === "racing") {
    alert("Loading Racing Game...");
  }

  if (game === "battle") {
    alert("Loading Battle Arena...");
  }
}

function editProfile() {
  let name = prompt("Enter your new name:");
  if (name) {
    localStorage.setItem("username", name);
    alert("Profile updated!");
  }
}

function resetProfile() {
  localStorage.clear();
  alert("Profile reset!");
}

function getUsername() {
  return localStorage.getItem("username");
}
