// function togglepart() {
//   const input = document.getElementById("password");
//   input.type = input.type === "password" ? "text" : "password";
// }
function formValidation() {
  const usernameInput = document.getElementById("username");
  const input = document.getElementById("password");
  if (usernameInput.value === "" || input.value === "") {
    alert("please enter the required details");
    return false;
  }
  alert("Login Successfully");
  showDashboard();
}
function showWelcomePage() {
  const container = document.querySelector(".container");
  if (container) container.remove();

  const welcomeContainer = document.createElement("div");
  welcomeContainer.className = "container";
  welcomeContainer.innerHTML = `
    <div class="heading">Smart Tracker</div>
    <p class="tagline">Track your irregular expenses effortlessly</p>
    <img src="image.jpg" id ="img"/>
    <div class="btn-container">
      <button class="btn" onclick="showLoginForm()">Login</button>
      <button class="btn" onclick="showSignupForm()">Sign Up</button>
    </div>
  `;
  document.body.appendChild(welcomeContainer);
}
function showSignupForm() {
  const oldContainer = document.querySelector(".container");
  if (oldContainer) {
    oldContainer.remove();
  }
  const newContainer3 = document.createElement("div");
  newContainer3.className = "container";
  newContainer3.innerHTML = `<div class="heading">Smart Tracker - Sign Up</div>
    <input type="text" placeholder="Enter Full Name" class="field" id="signupName" />
    <input type="email" placeholder="Enter Email" class="field" id="signupEmail" />
    <input type="text" placeholder="Create Username" class="field" id="signupUsername" />
    
    <div class="password-field">
      <input type="password" placeholder="Create Password" class="field" id="password" />
    </div>
    
    <input type="checkbox" id="terms" />
    <label for="terms">I agree to the Terms & Conditions</label>

    <button class="btn" onclick="signupValidation()">Sign Up</button>
    <button class="btn" onclick="showLoginForm()">Already have an account? Login</button>
  `;

  document.body.appendChild(newContainer3);
}
function signupValidation() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("password").value;
  const termsChecked = document.getElementById("terms").checked;

  if (!name || !email || !username || !password) {
    alert("Please fill in all fields.");
    return;
  }

  if (!termsChecked) {
    alert("You must agree to the terms and conditions.");
    return;
  }

  alert("Sign up successful! Please login.");
  showLoginForm();
}
function showLoginForm() {
  const oldContainer = document.querySelector(".container");
  if (oldContainer) {
    oldContainer.remove();
  }
  const container = document.createElement("div");
  container.className = "container";
  container.innerHTML = `<div class="heading">Smart Tracker - Login </div>
  <input type="text" placeholder="Enter the Username" class="field" id ="username"/>
  <div class="password-field">
  <input type = "password" placeholder="Enter the Password" id ="password"class="field"/>
  </div>
  <div class="remember">
  <input type="checkbox" id="remember" />
  <label for="remember">Remember Me</label>
  </div>
  <a href="#" class="forgot-link">Forgot Password?</a>
  <button class="btn" onclick="formValidation()">Login</button>`;
  document.body.appendChild(container);

  const forgotPassword = document.querySelector(".forgot-link");
  forgotPassword.addEventListener("click", () => {
    container.remove();
    alert("Redirecting to forgot password page...");
    showForgotPasswordForm();
  });
}
function showForgotPasswordForm() {
  const newContainer = document.createElement("div");
  newContainer.className = "container";
  newContainer.innerHTML = `
    <div class="heading">Reset Password</div>
    <input type="text" placeholder="Enter your username" class="field" />
    <input type="password" placeholder="Enter new password" class="field" />
    <button class="btn" id ="reset">Reset</button>
    <button class="btn" id ="back" >Back to Login</button>
  `;
  document.body.appendChild(newContainer);

  document.getElementById("reset").addEventListener("click", () => {
    alert("Password reset successful!");
  });

  document.getElementById("back").addEventListener("click", () => {
    newContainer.remove();
    showLoginForm();
  });
}
function showDashboard() {
  const container = document.querySelector(".container");
  if (container) {
    container.remove();
  }
  const newContainer2 = document.createElement("div");
  newContainer2.className = "container";
  newContainer2.innerHTML = `<div class ="heading">Smart Tracker</div>
  <p class ="tagline">Welcome ! to dashboard</p>
  <h3>Add Expense</h3>
  <input type="text" placeholder="Expense Name" class="field" id="expenseName"/>
  <input type="number" placeholder="Amount" class="field" id="expenseAmount"/>
  <button class="btn" onclick="addExpense()">Add</button>
  <div id="expenseList"></div>
  <button class="btn" id="logout">Logout</button>`;

  document.body.appendChild(newContainer2);
  document.getElementById("logout").addEventListener("click", () => {
    newContainer2.remove();
    showWelcomePage();
  });
}
function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = document.getElementById("expenseAmount").value;
  if (name && amount) {
    const list = document.getElementById("expenseList");
    const entry = document.createElement("p");
    entry.innerHTML = `
      💸 <span class="exp-text"><strong>${name}</strong>: ₹${amount}</span>
      <button class="delete-btn">❌</button>
    `;
    entry.style.fontSize = "20px";
    list.appendChild(entry);
    entry.querySelector(".delete-btn").addEventListener("click", () => {
      entry.remove();
    });
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
  } else {
    alert("Please fill out both fields with proper requirements");
  }
}

function formValidation() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;

  if (usernameInput.value === "" || password === "") {
    alert("Please enter the required details");
    return false;
  }

  // Password validation
  if (password.length < 6) {
    alert("Password too short! Minimum 6 characters.");
    return false;
  } else if (!/[A-Z]/.test(password)) {
    alert("Password must include at least one uppercase letter.");
    return false;
  } else if (!/[0-9]/.test(password)) {
    alert("Password must include at least one number.");
    return false;
  } else if (!/[!@#\$%\^&\*]/.test(password)) {
    alert("Password must include at least one special character (!@#$%^&*)");
    return false;
  }

  alert("Login Successfully");
  showDashboard();
}

document.addEventListener("DOMContentLoaded", function () {
  showWelcomePage();
});


