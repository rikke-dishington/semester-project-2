document.addEventListener('DOMContentLoaded', function () {
    const newListingButton = document.getElementById('newListingButton');
    const profileLink = document.getElementById('profile-link');
    const signinButton = document.getElementById('signinButton');
    const signoutButton = document.getElementById('signoutButton');
  
    // Check if user is signed in
    const accessToken = localStorage.getItem('accessToken');
    const isSignedIn = accessToken !== null && accessToken !== undefined;
  
    if (isSignedIn) {
      // User is signed in
      newListingButton.style.display = 'inline-block';
      profileLink.style.display = 'inline-block';
      signoutButton.style.display = 'inline-block';
      signinButton.style.display = 'none';
    } else {
      // User is not signed in
      newListingButton.style.display = 'none';
      profileLink.style.display = 'none';
      signoutButton.style.display = 'none';
      signinButton.style.display = 'inline-block';
    }
  });
  