// navFunctions.js
function toggleDropdown(event, dropdownId) {
    event.preventDefault();
    let dropdown = document.getElementById(dropdownId);
    let allDropdowns = document.querySelectorAll(".dropdown, .dropdowns");
  
    // Close all dropdowns except the one clicked
    allDropdowns.forEach((drop) => {
      if (drop.id !== dropdownId) {
        drop.classList.remove("show-dropdown", "show-dropdowns");
      }
    });
  
    // Toggle the proper dropdown class based on the id
    dropdown.classList.toggle(dropdownId === "dropdown" ? "show-dropdown" : "show-dropdowns");
    event.stopPropagation();
  }
  
  document.addEventListener("click", function () {
    let allDropdowns = document.querySelectorAll(".dropdown, .dropdowns");
    allDropdowns.forEach((drop) => drop.classList.remove("show-dropdown", "show-dropdowns"));
  });
  
  function closeDropdowns() {
    let allDropdowns = document.querySelectorAll(".dropdown, .dropdowns");
    allDropdowns.forEach((drop) => drop.classList.remove("show-dropdown", "show-dropdowns"));
  }
  
  function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
  }
  