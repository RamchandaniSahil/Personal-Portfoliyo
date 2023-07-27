const contact = document.querySelector(".contact");

contact.addEventListener("click", () => {
  if (contact.innerText === "shahilramchandani@gmial.com") {
    contact.innerText = "CONTACT ME";
  } else {
    contact.innerText = "shahilramchandani@gmial.com";
  }
});
