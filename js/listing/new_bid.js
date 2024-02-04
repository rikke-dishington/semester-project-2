import { API_BASE_URL } from "/js/api/api_base_url.js";

const accessToken = localStorage.getItem("accessToken");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const API_LISTINGS_URL = API_BASE_URL + "/listings";
const API_LISTING_URL = `${API_LISTINGS_URL}/${id}`;
const API_LISTING_BIDS_URL = `${API_LISTING_URL}/bids`;
const bidInput = document.getElementById("bid");

async function postBid(event) {
  event.preventDefault();
  const bidAmount = parseInt(bidInput.value, 10);
  const postBody = { amount: bidAmount };
  const postOptions = {
    method: "POST",
    body: JSON.stringify(postBody),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(API_LISTING_BIDS_URL, postOptions);
    const json = await response.json();
    if (response.ok === true) {
      window.location.reload();
    } else {
      bidError.innerHTML = `${json.errors[0].message}`;
      setTimeout(function () {
        bidError.innerHTML = "";
      }, 5000);
    }
  } catch (error) {
    bidError.innerHTML = `Something went wrong, ${error}`;
  }
}

bidForm.addEventListener("submit", postBid);