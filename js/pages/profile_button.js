import { API_BASE_URL } from "/js/api/api_base_url.js";

const API_PROFILES_URL = API_BASE_URL + "/profiles";
const userName = localStorage.getItem("userName");
const accessToken = localStorage.getItem("accessToken"); // Get the user's access token from localStorage

// Function to redirect to the user's profile page
function redirectToProfile() {
    // Check if both the user's name and access token are available in localStorage
    if (userName && accessToken) {
        // Construct the URL based on the user's name
        const profileURL = `${API_PROFILES_URL}/${userName}`;

        // Make a request to the server with the access token
        fetch(profileURL, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        .then(response => {
            if (response.ok) {
                // Redirect to the profile page
                window.location.href = profileURL;
            } else {
                // Handle the case where the request was not successful
                console.error("Failed to fetch user data:", response.status);
                // Optionally, display an error message or redirect to a default page
            }
        })
        .catch(error => {
            console.error("An error occurred:", error);
            // Optionally, display an error message or redirect to a default page
        });
    } else {
        // Handle the case where either the name or access token is not available
        console.error("User's name or access token not found in localStorage");
        // Optionally, display an error message or redirect to a default page
    }
}

// Event listener for the profile button
const profileButton = document.getElementById("profile-link");
profileButton.addEventListener("click", redirectToProfile);
