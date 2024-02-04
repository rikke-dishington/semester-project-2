import { API_BASE_URL } from "/js/api/api_base_url.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const API_LISTINGS_URL = `${API_BASE_URL}/listings`;
const API_LISTING_URL = `${API_LISTINGS_URL}/${id}?_seller=true&_bids=true`;
const parentContainer = document.getElementById("listingDetails");

async function fetchAndDisplayListing() {
  try {
    const response = await fetch(API_LISTING_URL);

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const listingData = await response.json();

    const bidResponse = await fetch(`${API_LISTING_URL}/bids`);
    const bids = await bidResponse.json();
    
    if (bids && bids.length > 0) {
      displayBids(bids);
    }

    displayListing(listingData);
  } catch (error) {
    parentContainer.innerHTML = `Something went wrong, ${error}`;
  }
}

function displayListing(listing, bids) {
  const { title, description, tags, media, endsAt } = listing;

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

  parentContainer.appendChild(listingImage);
  parentContainer.appendChild(listingDetails);

  // Display bids
  displayBids(bids);
}

function displayBids(bids) {
  const bidList = document.createElement("ul");

  if (!bids || bids.length === 0) {
    bidList.innerHTML = "<li>No bids</li>";
  } else {
    // Loop through bids and display information
    for (const bid of bids) {
      const listItem = document.createElement("li");
      listItem.textContent = `Bidder: ${bid.bidderName}, Amount: ${bid.amount}`;
      bidList.appendChild(listItem);
    }
  }

  parentContainer.appendChild(bidList);
}

// Call the combined function to fetch and display the listing
fetchAndDisplayListing();
