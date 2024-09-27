const protectedUrls = [
   "https://www.instagram.com",
   "https://github.com",
   "https://www.youtube.com"
];

if (protectedUrls.some(url => document.URL.startsWith(url))) {
   let password = "your_password123";
   let askPass = prompt("Password");

   if (askPass === password) {
      console.log("Access Granted!");
   } else {
      alert("Access Denied!");
      window.location.href = "about:blank";
   }
}
