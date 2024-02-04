

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
  
  



     // Add event listener for the "Edit Avatar" button
     const editAvatarBtn = document.getElementById("edit-avatar-btn");
     editAvatarBtn.addEventListener("click", () => {
         // Open a modal or navigate to the avatar editing page
         // You can implement the avatar editing functionality here
         // (e.g., using a form or a modal for uploading a new avatar)
         // For simplicity, let's assume a modal opens for avatar editing.
         openAvatarEditModal();
     });
 }
 
 // Function to open a modal for avatar editing (placeholder)
 function openAvatarEditModal() {
     // Implement your modal logic here
     console.log("Open Avatar Edit Modal");
 }







// Attach event listener to the "Edit Avatar" button
const editAvatarButton = document.getElementById("editAvatarButton");
editAvatarButton.addEventListener("click", handleEditAvatar);

function handleEditAvatar() {
    // Toggle the visibility of the edit avatar form
    const isFormVisible = editAvatarForm.style.display !== "none";
    editAvatarForm.style.display = isFormVisible ? "none" : "block";
  }

// Update the avatar
const errorMessageElement = document.getElementById("error-message");
 
 async function updateAvatar(url, data) {
   try {
     const putAvatar = {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data)
     };
 
     const response = await fetch(url, putAvatar);
     console.log(response);
  
     if (response.ok) {
       const json = await response.json();
       console.log("Avatar updated successfully:", json);
     } else {
       errorMessageElement.textContent = "Invalid url";
     }
   } catch (error) {
     errorMessageElement.textContent = "Invalid url";
   }
 }
 
 document.getElementById("updateAvatarButton").addEventListener("click", () => {
   const avatar = document.getElementById("avatar-url").value.trim();
   updateAvatar(`${API_PROFILE_URL}/media`, avatar);
 });