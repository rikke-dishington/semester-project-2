import { API_BASE_URL } from "/js/api/api_base_url.js";

const token = localStorage.getItem("accessToken");
const userName = localStorage.getItem("userName");
const API_PROFILES_URL = `${API_BASE_URL}/profiles`;
const API_PROFILE_URL = `${API_PROFILES_URL}/${userName}`;
const profileContainer = document.getElementById("profile-details");

async function fetchUserProfile() {
  try {
    const response = await fetch(API_PROFILE_URL, {
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
    console.error(error);
    throw error;
  }
}

let userProfile = [];

async function fetchAndDisplayUserProfile() {
  try {
    userProfile = await fetchUserProfile();
    displayProfile(userProfile);
  } catch (error) {
    console.error(error);
    profileContainer.innerHTML = "Oh no! An error occurred";
  }
}

function displayProfile(userProfile) {
  profileContainer.innerHTML = "";

  const { avatar, name, credits } = userProfile;

  const profileElement = document.createElement("div");
  profileElement.classList.add("col", "text-center");
  profileElement.innerHTML = `
          <img src="${avatar}" alt="Profile Avatar" id="profile-avatar">
          <h1 class="mt-4">@${name}</h1>
          <p class="mt-2">Credits: ${credits}</p>
      `;
  profileContainer.appendChild(profileElement);
}

// Fetch user profile data and display it
fetchAndDisplayUserProfile(API_PROFILE_URL);
