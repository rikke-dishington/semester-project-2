import { API_BASE_URL } from "/js/api/api_base_url.js";

// Constants
const API_LISTINGS_URL = API_BASE_URL + "/listings";
const token = localStorage.getItem("accessToken");

// Function to get form values
function getFormValues() {
  const title = document.getElementById("listingTitle").value;
  const description = document.getElementById("listingDescription").value;
  const endsAt = document.getElementById("listingEndsAt").value;
  const tag = document.getElementById("listingTag").value;
  const image = document.getElementById("listingImage").value;
  const media = image.split(",").map(url => url.trim());
  return { title, description, endsAt, tag, image, media };
}

// Function to create a new listing
async function createListing(url, data) {
  try {
    const listingOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, listingOptions);

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

// Event listener for form submission
const newListingForm = document.getElementById("newListingForm");
newListingForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  
  // Get form values
  const formValues = getFormValues();

  // Create a new listing object
  const newListing = {
    title: formValues.title,
    body: formValues.description,
    endsAt: new Date(formValues.endsAt).toISOString(),
    tags: [formValues.tag],
    media: formValues.media,
  };

  // Call createListing function with API_LISTINGS_URL and newListing
  await createListing(API_LISTINGS_URL, newListing);
});

