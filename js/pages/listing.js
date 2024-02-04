import { API_BASE_URL } from "/js/api/api_base_url.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const API_LISTINGS_URL = API_BASE_URL + "/listings/";
const API_LISTING_URL = `${API_LISTINGS_URL}${id}`;

async function getListing() {
  try {
    const response = await fetch(API_LISTING_URL);
      
    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    const { title, description, tags, media, endsAt } = data;

    const formattedDate = new Date(endsAt).toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const formattedTime = new Date(endsAt).toLocaleTimeString(undefined, {
      hour: 'numeric',
      minute: '2-digit',
    });

    const listingImage = document.createElement("div");
    listingImage.classList.add("col", "col-md-6");
    listingImage.innerHTML = `
      <img src="${media}" id="listingImage" />
    `;

    const listingDetails = document.createElement("div");
    listingDetails.classList.add("col", "col-md-6");
    listingDetails.innerHTML = `
      <h1>${title}</h1>
      <p>${tags}</p>
      <p>${description}</p>
      <p>Deadline: <br>${formattedDate} ${formattedTime}</br></p>
    `;

    const parentContainer = document.getElementById("listingDetails");
    parentContainer.appendChild(listingImage);
    parentContainer.appendChild(listingDetails);
  } catch (error) {
    console.error(error);
  }
}

 // Call the getListing function to retrieve and display the post
 getListing();

