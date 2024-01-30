/*=============== Show menu =============== */
const navMenu = document.getElementById("nav__menu"),
  navToggle = document.getElementById("nav__toggle"),
  navClose = document.getElementById("nav__close");

/*=============== menu show =============== */
//validate if constant exits
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

/*=============== hide show =============== */
//validate if constant exits
if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show__menu");
    });
  }

  
/*=============== Remove Menu Mobile =============== */
  const navLink = document.querySelectorAll('.nav__link');

  function linkAction(){
    const navMenu = document.getElementById('nav__menu');
    navMenu.classList.remove('show__menu');
  }

  navLink.forEach((n) => n.addEventListener('click', linkAction));



/*=============== Active Link =============== */
const navlink = document.querySelectorAll(".nav__link");

function activeLink() {
  navlink.forEach((a) => a.classList.remove("active-link"));
  this.classList.add("active-link");
}

navlink.forEach((a) => a.addEventListener("click", activeLink));

/*=============== Background Header =============== */
function scrollHeader() {
const header = document.getElementById('header');
if(this.scrollY >= 50) header.classList.add('scroll-header');
else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup(".projects__container", {
  selectors: {
    target: ".project__item",
  },
  animation: {
    duration: 300,
  },
});

/*=============== Testimonials Swiper =============== */
var testiSwiper = new Swiper(".testimonial__container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});


/*=============== Contact Form =============== */
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  Message = document.getElementById("message"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  //check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    Message.value === ""
  ) {
    //add and remove color
    contactMessage.classList.remove("color-light");
    contactMessage.classList.add("color-dark");

    //show message
    contactMessage.textContent = "Write all the input fields";
  } else {
    //serviceID - templateID - #form - publickey
    emailjs
      .sendForm(
        "service_9q7nusb",
        "template_ifeyndr",
        "#contact-form",
        "ato78uEKC1ZimbexU"
      )
      .then(
        () => {
          //show message and color,window + dot to open emoji
          contactMessage.classList.add("color-light");
          contactMessage.textContent = "Message sent ✔";

          //remove message after 5 seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OPPs! SOMETHING WENT WRONG...", error);
        }
      );

    //clear input fields
    contactName.value = "";
    contactEmail.value = "";
    Message.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
