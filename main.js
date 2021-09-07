const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  document.cookie = "cookieBannerDisplayed=true; expires=Tue, 19 Jan 2038 03:14:07 GMT";
});

setTimeout(() => {
  if (!document.cookie.includes("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);
