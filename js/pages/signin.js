import { API_BASE_URL } from "/js/api/api_base_url.js";

 const errorMessageElement = document.getElementById("error-message");
 
 async function loginUser(url, data) {
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
 
     if (response.status === 200) {
       const json = await response.json();
       const accessToken = json.accessToken;
       const userName = json.name;
       const userEmail = json.email;
       const avatar = json.avatar;
       const credits = json.credits;
       localStorage.setItem("accessToken", accessToken);
       localStorage.setItem("userName", userName);
       localStorage.setItem('email', userEmail);
       localStorage.setItem('avatar', avatar);
       localStorage.setItem('credits', credits);
       console.log(json);
       window.location.href = "/index.html";
     } else if (response.status === 401) {
       errorMessageElement.textContent =
         "User does not exist or invalid email/password.";
     } else {
       errorMessageElement.textContent = "User does not exist or invalid email/password.";
     }
   } catch (error) {
     errorMessageElement.textContent = "User does not exist or invalid email/password.";
   }
 }
 
 document.getElementById("signin-button").addEventListener("click", () => {
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   const user = {
     email: email,
     password: password,
   };
 
   loginUser(`${API_BASE_URL}/auth/login`, user);
 });