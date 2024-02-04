

    async function placeBid(url, data) {
        try {
          const bidsOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
          };
      
          const response = await fetch(url, bidsOptions);
      
          if (response.ok) {
            window.location.href = "index.html";
          } else {
            console.error("Failed to add bid:", response.status);
            // Optionally, display an error message to the user
          }
        } catch (error) {
          console.error("An error occurred", error);
        }
      }
  
      // Event listener for bid form submission
      const bidForm = document.getElementById("bid-form");
      bidForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const bidAmount = document.getElementById("bidAmount").value
        placeBid(bidAmount);
      });
  
  
  
  
      // Function to display bids
      function displayBids(bids) {
    const bidsContainer = document.getElementById("bids-container");
    bidsContainer.innerHTML = ""; // Clear existing content
  
    if (Array.isArray(bids) && bids.length > 0) {
      bids.forEach(bid => {
        const { id, amount, bidderName, created } = bid;
  
        const bidElement = document.createElement("div");
        bidElement.classList.add("bid-item");
        bidElement.innerHTML = `
          <p>Bid ID: ${id}</p>
          <p>Amount: ${amount}</p>
          <p>Bidder: ${bidderName}</p>
          <p>Created: ${created}</p>
        `;
  
        bidsContainer.appendChild(bidElement);
      });
    } else {
      // Display a message when there are no bids
      const noBidsElement = document.createElement("p");
      noBidsElement.textContent = "No bids for this listing.";
      bidsContainer.appendChild(noBidsElement);
    }
  }
  
      const bidsContainer = document.createElement("div");
      bidsContainer.classList.add("col", "col-12", "mt-5", "bids");
  
      // Call the displayBids function with the _bids data
      displayBids(_bids);

       // Function to retrieve data for bids
async function fetchBids() {
    try {
      const response = await fetch(API_LISTING_BIDS_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("An error occurred", error);
      throw error;
    }
  }
  
     // Function to display bids
     function displayBids(bids) {
      const bidsContainer = document.getElementById("bids-container");
      bidsContainer.innerHTML = ""; // Clear existing content
  
    // Call createListing function with API_LISTINGS_URL and newListing
    await fetchBids(API_LISTING_BIDS_URL, newListing);
  }