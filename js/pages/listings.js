
import { API_BASE_URL } from "/js/api/api_base_url.js";
import { fetchWithToken } from "/js/api/authentication.js";

const API_POSTS_URL = API_BASE_URL + "/listings";
const feedContainer = document.getElementById("all-posts");
const searchInput = document.getElementById("searchInput");
const filterDropdown = document.getElementById("filterDropdown");
const searchButton = document.getElementById("searchButton");

let allPosts = [];

function clearFeedContainer() {
  feedContainer.innerHTML = "";
}

function displayPosts(posts) {
  clearFeedContainer();

  for (const post of posts) {
    const { id, tags, title, media, endsAt } = post;

    const formattedDate = new Date(endsAt).toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    
    const formattedTime = new Date(endsAt).toLocaleTimeString(undefined, {
      hour: 'numeric',
      minute: '2-digit',
    });

    const postElement = document.createElement("div");
    postElement.classList.add("row", "my-3");
    postElement.innerHTML = `
        <img src="${media}" class="img-fluid" />
        <a href="listing.html?id=${id}"
        <h3>${title}</h3>
        <p>${tags}</p>
        <p>Deadline: ${formattedDate} ${formattedTime}</p>
        </a>
      `;

    feedContainer.appendChild(postElement);
  }
}

async function fetchAndDisplayPosts(url) {
  try {
    const data = await fetchWithToken(url);

    allPosts = data;

    data.sort((a, b) => new Date(b.endsAt) - new Date(a.endsAt));
    displayPosts(allPosts);
  } catch (error) {
    console.error(error);
    feedContainer.innerHTML = "Oh no! An error occurred";
  }
}

function filterPosts() {
  const searchQuery = searchInput.value.trim().toLowerCase();
  const selectedFilter = filterDropdown.value;

  if (selectedFilter === "active") {
    const url = `${API_POSTS_URL}?active=true`;
    fetchAndDisplayPosts(url);
  } else if (searchQuery) {
    // Filter by search query
    const postBySearch = allPosts.filter((post) => {
      const { title, tags } = post;
      return (
        title.toLowerCase().includes(searchQuery) ||
        tags.some((tag) => tag.toLowerCase().includes(searchQuery))
      );
    });
    displayPosts(postBySearch);
  } else {
    // If no filter is selected, display all posts
    fetchAndDisplayPosts(API_POSTS_URL);
  }
}

// Add event listeners for filtering by tag and searching
searchButton.addEventListener("click", filterPosts);

filterDropdown.addEventListener("change", function() {
  const selectedFilter = filterDropdown.value;

  if (selectedFilter === "active") {
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    const url = `${API_POSTS_URL}?active=true&endsAt_gte=${formattedToday}`;
    fetchAndDisplayPosts(url);
  } else {
    // If no filter is selected or another filter is chosen, display all posts
    fetchAndDisplayPosts(API_POSTS_URL);
  }
});

// Display all posts initially
fetchAndDisplayPosts(API_POSTS_URL);