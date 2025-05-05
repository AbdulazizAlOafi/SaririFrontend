function logout() {
    // Clear cookie (token)
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure";
  
    // Clear local storage
    localStorage.removeItem("userName");
    localStorage.removeItem("userID");
    localStorage.removeItem("userRole");
  
    // Redirect to login page
    window.location.href = "Login.html";
  }