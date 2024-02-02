import { API_BASE_URL } from "/js/api/api_base_url.js";

// Constants
const API_LISTINGS_URL = API_BASE_URL + "/listings";
const token = localStorage.getItem("accessToken");

async function createPost(event) {
  event.preventDefault();

  // Get form input values
  const title = document.getElementById("postTitle").value;
  const description = document.getElementById("postDescription").value;
  const endsAt = document.getElementById("postEndsAt").value;
  const tag = document.getElementById("postTag").value;
  const image = document.getElementById("postImage").value;
  const media = image.split(",").map(url => url.trim());


  // Create a new post object
  const newPost = {
    title: title,
    body: description,
    endsAt: endsAt,
    tags: [tag],
    media: media,
  };

  try {
    // Make a POST request to the API
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newPost),
    };

    const response = await fetch(API_LISTINGS_URL, postOptions);

    if (response.ok) {
      window.location.href = "listings.html";
    } else {
        console.error("Failed to create a new post:", response.status);
        // Optionally, display an error message to the user
    }
  } catch (error) {
    console.error("An error occurred", error);
  }
}

// Add an event listener to the form for form submission
const newPostForm = document.getElementById("newPostForm");
newPostForm.addEventListener("submit", createPost);