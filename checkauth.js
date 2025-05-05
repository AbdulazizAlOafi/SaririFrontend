// auth.js
function checkAuth(allowedRoles = []) {
    const token = getCookie("token");
    const role = localStorage.getItem("userRole");
  
    if (!token || !allowedRoles.includes(role)) {
      alert("ليس لديك صلاحية الوصول لهذه الصفحة.");
      window.location.href = "login.html"; // Change as needed
    }
  }
  
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  