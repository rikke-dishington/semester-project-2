import { API_BASE_URL } from "/js/api/api_base_url.js";

const API_LISTINGS_URL = API_BASE_URL + "/listings";
const feedContainer = document.getElementById("all-listings");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

async function fetchAllListings() {
  try {
    const response = await fetch(API_LISTINGS_URL);

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

let allListings = []; 

async function fetchAndDisplayListings() {
  try {
    allListings = await fetchAllListings();  // Remove the 'let' keyword here
    allListings.sort((a, b) => new Date(b.endsAt) - new Date(a.endsAt));
    displayListings(allListings);
  } catch (error) {
    console.error(error);
    feedContainer.innerHTML = "Oh no! An error occurred";
  }
}


function displayListings(listings) {
  feedContainer.innerHTML = ""; // Clear the existing content

  for (const listing of listings) {
    const { id, tags, title, media, endsAt } = listing;

    const formattedDate = new Date(endsAt).toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const formattedTime = new Date(endsAt).toLocaleTimeString(undefined, {
      hour: 'numeric',
      minute: '2-digit',
    });

    const listingElement = document.createElement("div");
    listingElement.classList.add("col");
    listingElement.innerHTML = `
      <div class="card h-100">
          <img src="${media}" class="card-img-top" />
          <div class="card-body">
            <h3 class="card-title">${title}</h3>
            <p class="card-subtitle">${tags}</p>
            <p class="card-text">Deadline: 
            <br>${formattedDate} ${formattedTime}</br>
            </p>
          </div>
          <div class="card-footer">
          <a href="listing.html?id=${id}" class="card-link">View More</a>
        </div>
        </div>
    `;

    feedContainer.appendChild(listingElement);
  }
}

function filterListings() {
  const searchQuery = searchInput.value.trim().toLowerCase();

  if (searchQuery) {
    // Filter by search query
    const listingBySearch = allListings.filter((listing) => {
      const { title, tags } = listing;
      return (
        title.toLowerCase().includes(searchQuery) ||
        tags.some((tag) => tag.toLowerCase().includes(searchQuery))
      );
    });
    displayListings(listingBySearch);
  } else {
    // If no filter is selected, display all posts
    fetchAndDisplayListings(API_LISTINGS_URL);
  }
}

// Add event listeners for filtering by tag and searching
searchButton.addEventListener("click", filterListings);

// Display all posts initially
fetchAndDisplayListings(API_LISTINGS_URL);