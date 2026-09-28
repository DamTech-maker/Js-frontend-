const explore = document.querySelector(".explore");
const dropdown = document.querySelector(".explore .dropdown");

explore.addEventListener("click", function () {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});
const companies = document.querySelector(".companies");
const companiesDropdown = document.querySelector(".companies .dropdown");

companies.addEventListener("click", function () {
    if (companiesDropdown.style.display === "block") {
        companiesDropdown.style.display = "none";
    } else {
        companiesDropdown.style.display = "block";
    }
});