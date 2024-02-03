import { API_BASE_URL } from "/js/api/api_base_url.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const bids = params.get("_bids");
const API_LISTINGS_URL = API_BASE_URL + "/listings/";
const API_LISTING_URL = `${API_LISTINGS_URL}${id}`;
const API_LISTING_BIDS_URL = `${API_LISTING_URL}/${bids}`;
const token = localStorage.getItem("accessToken");
const postContainer = document.getElementById("post-container");

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
    listingImage.classList.add("col", "col-12", "col-md-6", "listingImage");
    listingImage.innerHTML = `
      <img src="${media}" class="img-fluid" />
    `;

    const listingDetails = document.createElement("div");
    listingDetails.classList.add("col", "col-12", "col-md-6", "listingDetails");
    listingDetails.innerHTML = `
      <h1>${title}</h1>
      <p>${tags}</p>
      <p>${description}</p>
      <p>Deadline: <br>${formattedDate} ${formattedTime}</br></p>
    `;

    const row = document.createElement("div");
    row.classList.add("row", "my-5");
    row.appendChild(listingImage);
    row.appendChild(listingDetails);
    postContainer.appendChild(row);
  } catch (error) {
    console.error(error);
  }
}

 // Call the getListing function to retrieve and display the post
 getListing();

