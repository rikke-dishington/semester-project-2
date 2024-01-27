import { API_BASE_URL } from "/js/api/api_base_url.js";

 const validateUserName = (name) => {
   const errorMessageElement = document.getElementById("name-error-message");
   if (/^[a-zA-Z0-9_]+$/.test(name)) {
     errorMessageElement.textContent = "";
     return null; // Name is valid
   } else {
     errorMessageElement.textContent =
       "Name format is invalid. Only alphanumeric characters and underscores are allowed";
     return "Name format is invalid.";
   }
 };

 const validateEmail = (email) => {
   const errorMessageElement = document.getElementById("email-error-message");
   const emailFormatRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   const studNoroffEmailSuffix = "@stud.noroff.no";
 
   if (
     emailFormatRegex.test(email) && email.endsWith(studNoroffEmailSuffix)
   ) {
     errorMessageElement.textContent = "";
     return null; // Email is valid
   } else {
     errorMessageElement.textContent =
       "Email format is invalid or does not end with @stud.noroff.no";
     return "Email format is invalid.";
   }
 };
 
 
 const validatePassword = (password) => {
   const errorMessageElement = document.getElementById("password-error-message");
   if (password.length >= 8) {
     errorMessageElement.textContent = "";
     return null; // Password is valid
   } else {
     errorMessageElement.textContent = "Password must be at least 8 characters";
     return "Password must be at least 8 characters.";
   }
 };
 
 // Register new user
 async function registerUser(url, data) {
   try {
     const postData = {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
     };
 
     const response = await fetch(url, postData);
     console.log(response);
     const json = await response.json();
     console.log(json);
     return json;
   } catch (error) {
     console.log(error);
   }
 }
 
 
 document.getElementById("signup-button").addEventListener("click", () => {
   const userName = document.getElementById("userName").value;
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
 
   const nameError = validateUserName(userName);
   const emailError = validateEmail(email);
   const passwordError = validatePassword(password);
 
   if (!nameError && !emailError && !passwordError) {
     const user = {
       name: userName,
       email: email,
       password: password,
     };
     registerUser(`${API_BASE_URL}/auth/register`, user);
   } else {
     console.log("Validation failed. User cannot be registered.");
   }
 });