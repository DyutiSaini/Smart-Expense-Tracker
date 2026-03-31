// const loginbutton = document.querySelector(".btn");
// const forgotPassword = document.querySelector(".forgot-link");
// forgotPassword.addEventListener("click", () => {
//   const container1 = document.querySelector(".container");
//   if (container1) {
//     container1.remove();
//   }
// });
//---------------------------------------------> yahn se purana code hai ---------------------------------------------------------->
// function togglepart() {
//   const input = document.getElementById("password");
//   input.type = input.type === "password" ? "text" : "password";
// }
// function formValidation() {
//   const usernameInput = document.getElementById("username");
//   const input = document.getElementById("password");
//   if (usernameInput.value === "" || input.value === "") {
//     alert("please enter the required details");
//     return false;
//   }
//   alert("Login Successfully");
//   showDashboard();
// }
// function showWelcomePage() {
//   const container = document.querySelector(".container");
//   if (container) container.remove();

//   const welcomeContainer = document.createElement("div");
//   welcomeContainer.className = "container";
//   welcomeContainer.innerHTML = `
//     <div class="heading">Smart Tracker</div>
//     <p class="tagline">Track your irregular expenses effortlessly</p>
//     <img src="image.jpg" id ="img"/>
//     <div class="btn-container">
//       <button class="btn" onclick="showLoginForm()">Login</button>
//       <button class="btn" onclick="showSignupForm()">Sign Up</button>
//     </div>
//   `;
//   document.body.appendChild(welcomeContainer);
// }
// function showSignupForm() {
//   const oldContainer = document.querySelector(".container");
//   if (oldContainer) {
//     oldContainer.remove();
//   }
//   const newContainer3 = document.createElement("div");
//   newContainer3.className = "container";
//   newContainer3.innerHTML = `<div class="heading">Smart Tracker - Sign Up</div>
//     <input type="text" placeholder="Enter Full Name" class="field" id="signupName" />
//     <input type="email" placeholder="Enter Email" class="field" id="signupEmail" />
//     <input type="text" placeholder="Create Username" class="field" id="signupUsername" />

//     <div class="password-field">
//       <input type="password" placeholder="Create Password" class="field" id="password" />
//       <button onclick="togglepart()"><img src="icon.jpg" id="icon" /></button>
//     </div>

//     <input type="checkbox" id="terms" />
//     <label for="terms">I agree to the Terms & Conditions</label>

//     <button class="btn" onclick="signupValidation()">Sign Up</button>
//     <button class="btn" onclick="showLoginForm()">Already have an account? Login</button>
//   `;

//   document.body.appendChild(newContainer3);
// }
// function signupValidation() {
//   const name = document.getElementById("signupName").value;
//   const email = document.getElementById("signupEmail").value;
//   const username = document.getElementById("signupUsername").value;
//   const password = document.getElementById("password").value;
//   const termsChecked = document.getElementById("terms").checked;

//   if (!name || !email || !username || !password) {
//     alert("Please fill in all fields.");
//     return;
//   }

//   if (!termsChecked) {
//     alert("You must agree to the terms and conditions.");
//     return;
//   }

//   alert("Sign up successful! Please login.");
//   showLoginForm();
// }
// function showLoginForm() {
//   const oldContainer = document.querySelector(".container");
//   if (oldContainer) {
//     oldContainer.remove();
//   }
//   const container = document.createElement("div");
//   container.className = "container";
//   container.innerHTML = `<div class="heading">Smart Tracker - Login </div>
//   <input type="text" placeholder="Enter the Username" class="field" id ="username"/>
//   <div class="password-field">
//   <input type = "password" placeholder="Enter the Password" id ="password"class="field"/>
//   </div>
//   <div class="remember">
//   <input type="checkbox" id="remember" />
//   <label for="remember">Remember Me</label>
//   </div>
//   <a href="#" class="forgot-link">Forgot Password?</a>
//   <button class="btn" onclick="formValidation()">Login</button>`;
//   document.body.appendChild(container);

//   const forgotPassword = document.querySelector(".forgot-link");
//   forgotPassword.addEventListener("click", () => {
//     container.remove();
//     alert("Redirecting to forgot password page...");
//     showForgotPasswordForm();
//   });
// }
// function showForgotPasswordForm() {
//   const newContainer = document.createElement("div");
//   newContainer.className = "container";
//   newContainer.innerHTML = `
//     <div class="heading">Reset Password</div>
//     <input type="text" placeholder="Enter your username" class="field" />
//     <input type="password" placeholder="Enter new password" class="field" />
//     <button class="btn" id ="reset">Reset</button>
//     <button class="btn" id ="back" >Back to Login</button>
//   `;
//   document.body.appendChild(newContainer);

//   document.getElementById("reset").addEventListener("click", () => {
//     alert("Password reset successful!");
//   });

//   document.getElementById("back").addEventListener("click", () => {
//     newContainer.remove();
//     showLoginForm();
//   });
// }
// function showDashboard() {
//   const container = document.querySelector(".container");
//   if (container) {
//     container.remove();
//   }
//   const newContainer2 = document.createElement("div");
//   newContainer2.className = "container";
//   newContainer2.innerHTML = `<div class ="heading">Smart Tracker</div>
//   <p class ="tagline">Welcome ! to dashboard</p>
//   <h3>Add Expense</h3>
//   <input type="text" placeholder="Expense Name" class="field" id="expenseName"/>
//   <input type="number" placeholder="Amount" class="field" id="expenseAmount"/>
//   <button class="btn" onclick="addExpense()">Add</button>
//   <div id="expenseList"></div>
//   <button class="btn" id="logout">Logout</button>`;

//   document.body.appendChild(newContainer2);
//   document.getElementById("logout").addEventListener("click", () => {
//     newContainer2.remove();
//     showWelcomePage();
//   });
// }
// function addExpense() {
//   const name = document.getElementById("expenseName").value;
//   const amount = document.getElementById("expenseAmount").value;
//   if (name && amount) {
//     const list = document.getElementById("expenseList");
//     const entry = document.createElement("p");
//     entry.innerHTML = `
//       💸 <span class="exp-text"><strong>${name}</strong>: ₹${amount}</span>
//       <button class="delete-btn">❌</button>
//     `;
//     entry.style.fontSize = "20px";
//     list.appendChild(entry);
//     entry.querySelector(".delete-btn").addEventListener("click", () => {
//       entry.remove();
//     });
//     document.getElementById("expenseName").value = "";
//     document.getElementById("expenseAmount").value = "";
//   } else {
//     alert("Please fill out both fields with proper requirements");
//   }
// }

// function formValidation() {
//   const usernameInput = document.getElementById("username");
//   const passwordInput = document.getElementById("password");
//   const password = passwordInput.value;

//   if (usernameInput.value === "" || password === "") {
//     alert("Please enter the required details");
//     return false;
//   }

//   // Password validation
//   if (password.length < 6) {
//     alert("Password too short! Minimum 6 characters.");
//     return false;
//   } else if (!/[A-Z]/.test(password)) {
//     alert("Password must include at least one uppercase letter.");
//     return false;
//   } else if (!/[0-9]/.test(password)) {
//     alert("Password must include at least one number.");
//     return false;
//   } else if (!/[!@#\$%\^&\*]/.test(password)) {
//     alert("Password must include at least one special character (!@#$%^&*)");
//     return false;
//   }

//   alert("Login Successfully");
//   showDashboard();
// }

// document.addEventListener("DOMContentLoaded", function () {
//   showWelcomePage();
// });
//------------------------------------------------------->yahn tak --------------------------------------------------------------------

// // ======================= LOGIN =======================

// async function formValidation() {
//   const usernameInput = document.getElementById("username");
//   const passwordInput = document.getElementById("password");

//   if (!usernameInput.value || !passwordInput.value) {
//     alert("Please enter the required details");
//     return;
//   }

//   try {
//     const response = await fetch("http://localhost:8000/api/v1/user/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify({
//         email: usernameInput.value,
//         password: passwordInput.value,
//       }),
//     });

//     if (!response.ok) {
//       alert("Invalid credentials");
//       return;
//     }

//     const data = await response.json();

//     if (data.success) {
//       alert("Login Successful");
//       showDashboard();
//     }
//   } catch (error) {
//     console.error(error);
//     alert("Server error");
//   }
// }

// // ======================= ADD EXPENSE =======================

// async function addExpense() {
//   const name = document.getElementById("expenseName").value;
//   const amount = document.getElementById("expenseAmount").value;

//   if (!name || !amount) {
//     alert("Please fill both fields");
//     return;
//   }

//   try {
//     const response = await fetch("http://localhost:8000/api/v1/expense", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify({
//         title: name,
//         amount: Number(amount),
//       }),
//     });

//     const data = await response.json();

//     if (data.success) {
//       alert("Expense Added");

//       // Clear inputs
//       document.getElementById("expenseName").value = "";
//       document.getElementById("expenseAmount").value = "";

//       loadExpenses();
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// // ======================= LOAD EXPENSES =======================

// async function loadExpenses() {
//   const list = document.getElementById("expenseList");
//   list.innerHTML = "";

//   try {
//     const response = await fetch("http://localhost:8000/api/v1/expense", {
//       method: "GET",
//       credentials: "include",
//     });

//     if (!response.ok) {
//       alert("Session expired. Please login again.");
//       showWelcomePage();
//       return;
//     }

//     const data = await response.json();

//     if (data.success && Array.isArray(data.expenses)) {
//       data.expenses.forEach((exp) => {
//         const entry = document.createElement("p");
//         entry.innerHTML = `
//           💸 <strong>${exp.title}</strong>: ₹${exp.amount}
//           <button onclick="deleteExpense('${exp._id}')">❌</button>
//         `;
//         list.appendChild(entry);
//       });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// // ======================= DELETE EXPENSE =======================

// async function deleteExpense(id) {
//   try {
//     const response = await fetch(`http://localhost:8000/api/v1/expense/${id}`, {
//       method: "DELETE",
//       credentials: "include",
//     });

//     if (response.ok) {
//       loadExpenses();
//     } else {
//       alert("Delete failed");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// // ======================= DASHBOARD =======================

// function showDashboard() {
//   const container = document.querySelector(".container");
//   if (container) {
//     container.remove();
//   }

//   const newContainer2 = document.createElement("div");
//   newContainer2.className = "container";
//   newContainer2.innerHTML = `
//     <div class="heading">Smart Tracker</div>
//     <p class="tagline">Welcome to dashboard</p>
//     <h3>Add Expense</h3>
//     <input type="text" placeholder="Expense Name" class="field" id="expenseName"/>
//     <input type="number" placeholder="Amount" class="field" id="expenseAmount"/>
//     <button class="btn" onclick="addExpense()">Add</button>
//     <div id="expenseList"></div>
//     <button class="btn" id="logout">Logout</button>
//   `;

//   document.body.appendChild(newContainer2);

//   document.getElementById("logout").addEventListener("click", async () => {
//     try {
//       await fetch("http://localhost:8000/api/v1/user/logout", {
//         method: "POST",
//         credentials: "include",
//       });
//     } catch (error) {
//       console.error(error);
//     }

//     newContainer2.remove();
//     showWelcomePage();
//   });

//   loadExpenses();
// }

// async function loadExpenses() {
//   const list = document.getElementById("expenseList");
//   list.innerHTML = "";

//   try {
//     const response = await fetch("http://localhost:8000/api/v1/expense", {
//       method: "GET",
//       credentials: "include",
//     });

//     const data = await response.json();

//     data.expenses.forEach((exp) => {
//       const entry = document.createElement("p");
//       entry.innerHTML = `
//         💸 <strong>${exp.title}</strong>: ₹${exp.amount}
//         <button onclick="deleteExpense('${exp._id}')">❌</button>
//       `;
//       list.appendChild(entry);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function deleteExpense(id) {
//   try {
//     await fetch(`http://localhost:8000/api/v1/expense/${id}`, {
//       method: "DELETE",
//       credentials: "include",
//     });

//     loadExpenses();
//   } catch (error) {
//     console.error(error);
//   }
// }

// function showDashboard() {
//   const container = document.querySelector(".container");
//   if (container) {
//     container.remove();
//   }
//   const newContainer2 = document.createElement("div");
//   newContainer2.className = "container";
//   newContainer2.innerHTML = `<div class ="heading">Smart Tracker</div>
//   <p class ="tagline">Welcome ! to dashboard</p>
//   <h3>Add Expense</h3>
//   <input type="text" placeholder="Expense Name" class="field" id="expenseName"/>
//   <input type="number" placeholder="Amount" class="field" id="expenseAmount"/>
//   <button class="btn" onclick="addExpense()">Add</button>
//   <div id="expenseList"></div>
//   <button class="btn" id="logout">Logout</button>`;

//   document.body.appendChild(newContainer2);
//   document.getElementById("logout").addEventListener("click", () => {
//     newContainer2.remove();
//     showWelcomePage();
//   });
//   loadExpenses();
// }

// function showLoginForm() {
//   const oldContainer = document.querySelector(".container");
//   if (oldContainer) {
//     oldContainer.remove();
//   }

//   const container = document.createElement("div");
//   container.className = "container";
//   container.innerHTML = `
//     <div class="heading">Smart Tracker - Login</div>
//     <input type="text" placeholder="Enter Email" class="field" id="username"/>
//     <div class="password-field">
//       <input type="password" placeholder="Enter the Password" id="password" class="field"/>
//       <button onclick="togglepart()"><img src="icon.jpg" id="icon" /></button>
//     </div>
//     <div class="remember">
//       <input type="checkbox" id="remember" />
//       <label for="remember">Remember Me</label>
//     </div>
//     <a href="#" class="forgot-link">Forgot Password?</a>
//     <button type="button" class="btn" onclick="formValidation()">Login</button>
//   `;

//   document.body.appendChild(container);

//   const forgotPassword = document.querySelector(".forgot-link");
//   forgotPassword.addEventListener("click", () => {
//     container.remove();
//     showForgotPasswordForm();
//   });
// }

// function showForgotPasswordForm() {
//   const newContainer = document.createElement("div");
//   newContainer.className = "container";
//   newContainer.innerHTML = `
//     <div class="heading">Reset Password</div>
//     <input type="text" placeholder="Enter your username" class="field" />
//     <input type="password" placeholder="Enter new password" class="field" />
//     <button class="btn" id ="reset">Reset</button>
//     <button class="btn" id ="back" >Back to Login</button>
//   `;
//   document.body.appendChild(newContainer);

//   document.getElementById("reset").addEventListener("click", () => {
//     alert("Password reset successful!");
//   });

//   document.getElementById("back").addEventListener("click", () => {
//     newContainer.remove();
//     showLoginForm();
//   });
// }
// async function signupValidation() {
//   const name = document.getElementById("signupName").value;
//   const email = document.getElementById("signupEmail").value;
//   const username = document.getElementById("signupUsername").value;
//   const password = document.getElementById("password").value;
//   const termsChecked = document.getElementById("terms").checked;

//   if (!name || !email || !username || !password) {
//     alert("Please fill in all fields.");
//     return;
//   }

//   if (!termsChecked) {
//     alert("You must agree to the terms.");
//     return;
//   }

//   try {
//     const response = await fetch("http://localhost:8000/api/v1/user/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username,
//         email,
//         password,
//       }),
//     });

//     const data = await response.json();

//     if (data.success) {
//       alert("Signup successful! Please login.");
//       showLoginForm();
//     } else {
//       alert(data.message || "Signup failed");
//     }
//   } catch (error) {
//     console.error(error);
//     alert("Server error during signup");
//   }
// }

// function showWelcomePage() {
//   const container = document.querySelector(".container");
//   if (container) container.remove();

//   const welcomeContainer = document.createElement("div");
//   welcomeContainer.className = "container";
//   welcomeContainer.innerHTML = `
//     <div class="heading">Smart Tracker</div>
//     <p class="tagline">Track your irregular expenses effortlessly</p>
//     <img src="image.jpg" id ="img"/>
//     <div class="btn-container">
//       <button class="btn" onclick="showLoginForm()">Login</button>
//       <button class="btn" onclick="showSignupForm()">Sign Up</button>
//     </div>
//   `;
//   document.body.appendChild(welcomeContainer);
// }
// function showSignupForm() {
//   const oldContainer = document.querySelector(".container");
//   if (oldContainer) {
//     oldContainer.remove();
//   }
//   const newContainer3 = document.createElement("div");
//   newContainer3.className = "container";
//   newContainer3.innerHTML = `<div class="heading">Smart Tracker - Sign Up</div>
//     <input type="text" placeholder="Enter Full Name" class="field" id="signupName" />
//     <input type="email" placeholder="Enter Email" class="field" id="signupEmail" />
//     <input type="text" placeholder="Create Username" class="field" id="signupUsername" />

//     <div class="password-field">
//       <input type="password" placeholder="Create Password" class="field" id="password" />
//       <button onclick="togglepart()"><img src="icon.jpg" id="icon" /></button>
//     </div>

//     <input type="checkbox" id="terms" />
//     <label for="terms">I agree to the Terms & Conditions</label>

//     <button class="btn" onclick="signupValidation()">Sign Up</button>
//     <button class="btn" onclick="showLoginForm()">Already have an account? Login</button>
//   `;

//   document.body.appendChild(newContainer3);
// }

// function togglepart() {
//   const input = document.getElementById("password");
//   input.type = input.type === "password" ? "text" : "password";
// }

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const response = await fetch("http://localhost:8000/api/v1/expense", {
//       method: "GET",
//       credentials: "include",
//     });

//     if (response.ok) {
//       showDashboard();
//     } else {
//       showWelcomePage();
//     }
//   } catch {
//     showWelcomePage();
//   }
// });

// ======================= LOGIN =======================

const BASE_URL = "https://smart-expense-tracker-backend-1.onrender.com";

async function formValidation() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  if (!usernameInput.value || !passwordInput.value) {
    alert("Please enter the required details");
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/api/v1/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: usernameInput.value,
        password: passwordInput.value,
      }),
    });

    if (!response.ok) {
      alert("Invalid credentials");
      return;
    }

    const data = await response.json();

    if (data.success) {
      alert("Login Successful");
      showDashboard();
    }
  } catch (error) {
    console.error(error);
    alert("Server error");
  }
}

// ======================= ADD EXPENSE =======================

async function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = document.getElementById("expenseAmount").value;

  if (!name || !amount) {
    alert("Please fill both fields");
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/api/v1/expense`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        title: name,
        amount: Number(amount),
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Expense Added");

      document.getElementById("expenseName").value = "";
      document.getElementById("expenseAmount").value = "";

      loadExpenses();
    }
  } catch (error) {
    console.error(error);
  }
}

// ======================= LOAD EXPENSES =======================

async function loadExpenses() {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  try {
    const response = await fetch(`${BASE_URL}/api/v1/expense`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      alert("Session expired. Please login again.");
      showWelcomePage();
      return;
    }

    const data = await response.json();

    data.expenses.forEach((exp) => {
      const entry = document.createElement("p");
      entry.innerHTML = `
        💸 <strong>${exp.title}</strong>: ₹${exp.amount}
        <button onclick="deleteExpense('${exp._id}')">❌</button>
      `;
      list.appendChild(entry);
    });
  } catch (error) {
    console.error(error);
  }
}

// ======================= DELETE =======================

async function deleteExpense(id) {
  try {
    await fetch(`${BASE_URL}/api/v1/expense/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    loadExpenses();
  } catch (error) {
    console.error(error);
  }
}

// ======================= DASHBOARD =======================

function showDashboard() {
  const container = document.querySelector(".container");
  if (container) container.remove();

  const newContainer = document.createElement("div");
  newContainer.className = "container";
  newContainer.innerHTML = `
    <div class="heading">Smart Tracker</div>
    <p class="tagline">Welcome to dashboard</p>
    <h3>Add Expense</h3>
    <input type="text" placeholder="Expense Name" class="field" id="expenseName"/>
    <input type="number" placeholder="Amount" class="field" id="expenseAmount"/>
    <button class="btn" onclick="addExpense()">Add</button>
    <div id="expenseList"></div>
    <button class="btn" id="logout">Logout</button>
  `;

  document.body.appendChild(newContainer);

  document.getElementById("logout").addEventListener("click", async () => {
    try {
      await fetch(`${BASE_URL}/api/v1/user/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error(error);
    }

    newContainer.remove();
    showWelcomePage();
  });

  loadExpenses();
}

// ======================= SIGNUP =======================

async function signupValidation() {
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
    alert("You must agree to the terms.");
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/api/v1/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Signup successful! Please login.");
      showLoginForm();
    } else {
      alert(data.message || "Signup failed");
    }
  } catch (error) {
    console.error(error);
    alert("Server error during signup");
  }
}

// ======================= UI FUNCTIONS (UNCHANGED) =======================

function showLoginForm() {
  const oldContainer = document.querySelector(".container");
  if (oldContainer) oldContainer.remove();

  const container = document.createElement("div");
  container.className = "container";
  container.innerHTML = `
    <div class="heading">Smart Tracker - Login</div>
    <input type="text" placeholder="Enter Email" class="field" id="username"/>
    <input type="password" placeholder="Enter Password" id="password" class="field"/>
    <button class="btn" onclick="formValidation()">Login</button>
  `;

  document.body.appendChild(container);
}

function showSignupForm() {
  const oldContainer = document.querySelector(".container");
  if (oldContainer) oldContainer.remove();

  const container = document.createElement("div");
  container.className = "container";
  container.innerHTML = `
    <div class="heading">Smart Tracker - Sign Up</div>
    <input type="text" placeholder="Full Name" id="signupName"/>
    <input type="email" placeholder="Email" id="signupEmail"/>
    <input type="text" placeholder="Username" id="signupUsername"/>
    <input type="password" placeholder="Password" id="password"/>
    <input type="checkbox" id="terms"/> Accept Terms
    <button onclick="signupValidation()">Sign Up</button>
  `;

  document.body.appendChild(container);
}

function showWelcomePage() {
  const container = document.querySelector(".container");
  if (container) container.remove();

  const div = document.createElement("div");
  div.className = "container";
  div.innerHTML = `
    <h1>Smart Tracker</h1>
    <button onclick="showLoginForm()">Login</button>
    <button onclick="showSignupForm()">Signup</button>
  `;
  document.body.appendChild(div);
}

// ======================= AUTO LOGIN CHECK =======================

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/expense`, {
      method: "GET",
      credentials: "include",
    });

    if (res.ok) {
      showDashboard();
    } else {
      showWelcomePage();
    }
  } catch {
    showWelcomePage();
  }
});
