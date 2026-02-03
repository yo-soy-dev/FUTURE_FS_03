
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  const adminUser = "admin";
  const adminPass = "1234";

  if (!username || !password) {
    errorMsg.innerText = "Please fill all fields";
    return;
  }


  if (username === adminUser && password === adminPass) {
    localStorage.setItem("adminAuth", "true");
    // localStorage.setItem("isAdmin", "true");
    localStorage.setItem("adminUser", username);

    alert("Login successful!");
    window.location.href = "admin.html";
  } else {
    // alert("Invalid username or password");
    errorMsg.innerText = "Invalid username or password";
  }
}
