import { API_BASE_URL } from "/js/api/api_base_url.js";

// Constants
const API_LISTINGS_URL = API_BASE_URL + "/listings";
const token = localStorage.getItem("accessToken");

async function createListing(event) {
  event.preventDefault();

  // Get form input values
  const title = document.getElementById("listingTitle").value;
  const description = document.getElementById("listingDescription").value;
  const endsAt = document.getElementById("listingEndsAt").value;
  const tag = document.getElementById("listingTag").value;
  const image = document.getElementById("listingImage").value;
  const media = image.split(",").map(url => url.trim());


  // Create a new Listing object
  const newListing = {
    title: title,
    body: description,
    endsAt: endsAt,
    tags: [tag],
    media: media,
  };

  try {
    // Make a POST request to the API
    const ListingOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newListing),
    };

    const response = await fetch(API_LISTINGS_URL, ListingOptions);

    if (response.ok) {
      window.location.href = "index.html";
    } else {
        console.error("Failed to create a new listing:", response.status);
        // Optionally, display an error message to the user
    }
  } catch (error) {
    console.error("An error occurred", error);
  }
}

// Add an event listener to the form for form submission
const newListingForm = document.getElementById("newListingForm");
newListingForm.addEventListener("submit", createListing);