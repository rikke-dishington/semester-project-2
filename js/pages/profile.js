import { API_BASE_URL } from "/js/api/api_base_url.js";

const token = localStorage.getItem("accessToken");
const profileContainer = document.getElementById("profile-container");
const profileLink = document.getElementById("profile-link");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const name = params.get("name");
const API_PROFILES_URL = API_BASE_URL + "/profiles";
const API_PROFILE_URL = `${API_PROFILES_URL}/${name}`;

document.addEventListener("DOMContentLoaded", () => {
  fetchUserProfile();
});

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

      const userData = await response.json();
      renderUserProfile(userData);
  } catch (error) {
      console.error("Error fetching user profile:", error);
  }
}

// Render user profile details on the page
function renderUserProfile(userData) {
    const { avatar, name, credits, listings } = userData;

    profileLink.href = `profile.html?name=${encodeURIComponent(name)}`;


    const profileHTML = `
        <div class="col-12 text-center">
            <img src="${avatar}" alt="Profile Avatar" class="img-fluid" id="profile-avatar">
            <h1>${name}</h1>
            <p>Credits: ${credits}</p>
            <p>Listings: ${listings.length}</p>
            <button class="btn btn-primary" id="edit-avatar-btn">Edit Avatar</button>
        </div>
    `;

    profileContainer.innerHTML = profileHTML;

    // Add event listener for the "Edit Avatar" button
    const editAvatarBtn = document.getElementById("edit-avatar-btn");
    editAvatarBtn.addEventListener("click", () => {
        // Open a modal or navigate to the avatar editing page
        // You can implement the avatar editing functionality here
        // (e.g., using a form or a modal for uploading a new avatar)
        // For simplicity, let's assume a modal opens for avatar editing.
        openAvatarEditModal();
    });
}

// Function to open a modal for avatar editing (placeholder)
function openAvatarEditModal() {
    // Implement your modal logic here
    console.log("Open Avatar Edit Modal");
}

// Function to update the profile link href
function updateProfileLink() {
    const profileLink = document.getElementById("profile-link");

    // Update the href with the dynamically generated URL based on the user's name
    profileLink.href = `profile.html?name=${encodeURIComponent(name)}`;

    updateProfileLink();
}

//  <button class="btn btn-primary" id="edit-post-button">Edit Post</button>
// <button class="btn btn-danger" id="delete-post-button">Delete Post</button>