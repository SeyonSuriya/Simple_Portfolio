const academicToggle = document.getElementById("academicToggle");
const activitiesToggle = document.getElementById("activitiesToggle");
const academicContent = document.getElementById("academicContent");
const activitiesContent = document.getElementById("activitiesContent");

// Hide the content sections initially
academicContent.style.display = "none";
activitiesContent.style.display = "none";

academicToggle.addEventListener("click", () => {
  if (academicContent.style.display === "none") {
    academicContent.style.display = "block";
    activitiesContent.style.display = "none";
    academicToggle.classList.add("active");
    activitiesToggle.classList.remove("active");
  } else {
    academicContent.style.display = "none";
    academicToggle.classList.remove("active");
  }
});

activitiesToggle.addEventListener("click", () => {
  if (activitiesContent.style.display === "none") {
    activitiesContent.style.display = "block";
    academicContent.style.display = "none";
    activitiesToggle.classList.add("active");
    academicToggle.classList.remove("active");
  } else {
    activitiesContent.style.display = "none";
    activitiesToggle.classList.remove("active");
  }
});
