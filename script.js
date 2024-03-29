document.addEventListener("DOMContentLoaded", function() {
    const defaultSection = document.getElementById("about");
    defaultSection.classList.add("active");
});

const headerHeight = document.querySelector('header').offsetHeight;

const links = document.querySelectorAll("nav ul li a");

links.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    document.querySelectorAll(".section").forEach(function(section) {
      section.classList.remove("active");
    });

    targetSection.classList.add("active");


    // Scroll to the top of the target section with a smooth transition
    window.scrollTo({
      top: targetSection.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  });
});

// Add event listeners for the "RESUME" and "PROJECTS" buttons
document.querySelector(".about-button-1").addEventListener("click", function() {
  const resumeSection = document.getElementById("resume");
  document.querySelectorAll(".section").forEach(function(section) {
    section.classList.remove("active");
  });
  resumeSection.classList.add("active");

  // Scroll to the resume section with a smooth transition
  window.scrollTo({
    top: resumeSection.offsetTop - headerHeight,
    behavior: 'smooth'
  });
});

document.querySelector(".about-button-2").addEventListener("click", function() {
  const projectsSection = document.getElementById("projects");
  document.querySelectorAll(".section").forEach(function(section) {
    section.classList.remove("active");
  });
  projectsSection.classList.add("active");

  // Scroll to the projects section with a smooth transition
  window.scrollTo({
    top: projectsSection.offsetTop - headerHeight,
    behavior: 'smooth'
  });
});

document.querySelector('.nav-b').addEventListener('click', function(event) {
  document.querySelector('.nav').classList.toggle('open');
  event.stopPropagation(); // Prevent the click event from bubbling up to the document
});

document.querySelectorAll('.nav .nav-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelector('.nav').classList.remove('open');
  });
});

document.body.addEventListener('click', function(event) {
  const nav = document.querySelector('.nav');
  if (nav.classList.contains('open') && !event.target.closest('.nav-b') && !event.target.closest('.nav-item')) {
    nav.classList.remove('open');
  }
});

document.body.addEventListener('click', function(event) {
  var checkbox = document.querySelector('.nav-b input[type="checkbox"]');
  // Check if the checkbox is checked and the click is not on the .nav-b element or its children
  if (checkbox.checked && !event.target.closest('.nav-b')) {
      checkbox.checked = false; // Uncheck the checkbox
  }
});

function callNumber(phoneNumber) {
  window.location.href = 'tel:' + phoneNumber;
}

function sendEmail(emailAddress) {
  window.location.href = 'mailto:' + emailAddress;
}

function openTelegram() {
  window.open('https://t.me/dh33_6');
}

function openWhatsApp() {
  window.open('https://wa.me/8248417774');
}

function sendSMS(phoneNumber) {
  window.location.href = 'sms:' + phoneNumber;
}
