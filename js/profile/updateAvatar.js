import { API_BASE_URL } from "/js/api/api_base_url.js";

const accessToken = localStorage.getItem("accessToken");
const userName = localStorage.getItem("userName");

const API_PROFILES_URL = `${API_BASE_URL}/profiles`;
const API_PROFILE_URL = `${API_PROFILES_URL}/${userName}`;
const API_PROFILE_AVATAR_URL = `${API_PROFILE_URL}/media`;

const avatarForm = document.getElementById("avatarForm");
const avatar = document.getElementById("avatar");
const avatarError = document.getElementById("avatarError");

async function changeAvatar(event) {
  event.preventDefault();
  const putBody = { avatar: avatar.value };
  const putOptions = {
    method: "PUT",
    body: JSON.stringify(putBody),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(API_PROFILE_AVATAR_URL, putOptions);
    const json = await response.json();
    if (response.ok === true) {
      console.log(response);
      window.location.reload();
    } else {
      avatarError.innerHTML = `${json.errors[0].message}`;
      setTimeout(function () {
        avatarError.innerHTML = "";
      }, 5000);
    }
  } catch (error) {
    avatarError.innerHTML = `Something went wrong, ${error}`;
  }
}

avatarForm.addEventListener("submit", changeAvatar);