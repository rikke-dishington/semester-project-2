import { API_BASE_URL } from "/js/api/api_base_url.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const API_POSTS_URL = API_BASE_URL + "/listings";
const API_POST_URL = `${API_POSTS_URL}/${id}`;
const token = localStorage.getItem("accessToken");

const postContainer = document.getElementById("post-container");

async function getListing() {
  try {
    const response = await fetch(API_POST_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const data = await response.json();
    const { title, description, tags, media, endsAt, bids } = data;

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

    const bidsContainer = document.createElement("div");
    bidsContainer.classList.add("col", "col-12", "mt-5", "bids");

    if (Array.isArray(bids) && bids.length > 0) {
      bids.forEach((bid) => {
        const bidElement = document.createElement("div");
        bidElement.innerHTML = `
          <p>Bidder: ${bid.bidderName}</p>
          <p>Amount: ${bid.amount}</p>
          <p>Created: ${new Date(bid.created).toLocaleString()}</p>
        `;
        bidsContainer.appendChild(bidElement);
      });
    } else {
      // Handle the case where there are no bids
      const noBidsElement = document.createElement("p");
      noBidsElement.textContent = "No bids available.";
      bidsContainer.appendChild(noBidsElement);
    }

    const row = document.createElement("div");
    row.classList.add("row", "my-5");
    row.appendChild(listingImage);
    row.appendChild(listingDetails);
    row.appendChild(bidsContainer);
    postContainer.appendChild(row);

  } catch (error) {
    console.log(error);
  }
}
// Call the getListing function to retrieve and display the post.
getListing();
