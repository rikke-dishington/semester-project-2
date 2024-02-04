// Function to clear user authentication data
function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
    localStorage.removeItem("avatar");
    localStorage.removeItem("credits");
  
    window.location.href = "index.html";
  }
  
  // Example: Add an event listener to a logout button
  const logoutButton = document.getElementById("signoutButton");
  logoutButton.addEventListener("click", logout);
  