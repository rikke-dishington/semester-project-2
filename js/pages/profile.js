import { API_BASE_URL } from "/js/api/api_base_url.js";

const token = localStorage.getItem("accessToken");
const userName = localStorage.getItem("userName");
const profileContainer = document.getElementById("profile-container");
const API_PROFILES_URL = `${API_BASE_URL}/profiles`;
const API_PROFILE_URL = `${API_PROFILES_URL}/${userName}`;
const editAvatarForm = document.getElementById("edit-avatar-form");

async function fetchUserProfile() {
  try {
    const response = await fetch(`${API_PROFILE_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
}

// Function to display user profile
function displayUserProfile(userProfile) {
    try {
      if (!userProfile) {
        throw new Error("User profile not found.");
      }
  
      const { avatar, name, credits } = userProfile;
  
      const profileHTML = `
        <div class="col-12 text-center">
          <img src="${avatar}" alt="Profile Avatar" class="img-fluid" id="profile-avatar">
          <h1>@${name}</h1>
          <p>Credits: ${credits}</p>
        </div>
      `;
  
      profileContainer.innerHTML = profileHTML;
    } catch (error) {
      console.error("Error displaying user profile:", error.message);
    }
  }

  // Fetch user profile data and display it
fetchUserProfile().then(displayUserProfile);

// Attach event listener to the "Edit Avatar" button
const editAvatarButton = document.getElementById("editAvatarButton");
editAvatarButton.addEventListener("click", handleEditAvatar);

function handleEditAvatar() {
    // Toggle the visibility of the edit avatar form
    const isFormVisible = editAvatarForm.style.display !== "none";
    editAvatarForm.style.display = isFormVisible ? "none" : "block";
  }

// Update the avatar
const errorMessageElement = document.getElementById("error-message");
 
 async function updateAvatar(url, data) {
   try {
     const putAvatar = {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data)
     };
 
     const response = await fetch(url, putAvatar);
     console.log(response);
  
     if (response.ok) {
       const json = await response.json();
       console.log("Avatar updated successfully:", json);
     } else {
       errorMessageElement.textContent = "Invalid url";
     }
   } catch (error) {
     errorMessageElement.textContent = "Invalid url";
   }
 }
 
 document.getElementById("updateAvatarButton").addEventListener("click", () => {
   const avatar = document.getElementById("avatar-url").value.trim();
   updateAvatar(`${API_PROFILE_URL}/media`, avatar);
 });