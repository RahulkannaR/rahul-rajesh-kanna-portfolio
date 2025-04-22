$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

// scroller 
window.onscroll = function() { updateProgressBar(); };

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

document.addEventListener("DOMContentLoaded", function() {
  const dynamicTextElement = document.getElementById("dynamic-text");
  const textArray = ["Analog Circuit Developer", "Digital Circuit Developer", "VLSI Designer"]; // Array of texts
  const typingDelay = 100; // Adjust the speed of typing (in milliseconds)
  const erasingDelay = 50; // Adjust the speed of erasing (in milliseconds)
  const newTextDelay = 2000; // Delay between typing each text (in milliseconds)
  
  let textArrayIndex = 0;
  let charIndex = 0;

  function typeText() {
      if (charIndex < textArray[textArrayIndex].length) {
          dynamicTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeText, typingDelay);
      } else {
          setTimeout(eraseText, newTextDelay);
      }
  }

  function eraseText() {
      if (charIndex > 0) {
          dynamicTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(eraseText, erasingDelay);
      } else {
          textArrayIndex++;
          if (textArrayIndex >= textArray.length) {
              textArrayIndex = 0;
          }
          setTimeout(typeText, typingDelay);
      }
  }

  setTimeout(typeText, newTextDelay);
});

function openPopup1() {
  document.getElementById('popup1').style.display = 'block';
}
function openPopup2() {
    document.getElementById('popup2').style.display = 'block';
  }
  function openPopup3() {
    document.getElementById('popup3').style.display = 'block';
  }
  function openPopup4() {
    document.getElementById('popup4').style.display = 'block';
  }
  function openPopup5() {
    document.getElementById('popup5').style.display = 'block';
  }
function closePopup1() {
  document.getElementById('popup1').style.display = 'none';
}
function closePopup2() {
    document.getElementById('popup2').style.display = 'none';
  }
function closePopup3() {
    document.getElementById('popup3').style.display = 'none';
  }
function closePopup4() {
    document.getElementById('popup4').style.display = 'none';
  }
  function closePopup5() {
    document.getElementById('popup5').style.display = 'none';
  }
// Get the popup overlay and content elements
const popup = document.createElement("div");
popup.classList.add("popup-overlay");
popup.id = "popup";
popup.style.display = "none";
popup.innerHTML = `<div class="popup" id="popup-content"></div>`;
document.body.appendChild(popup);

const popupContent = document.getElementById("popup-content");

// Function to show custom popup
function showPopup(type) {
  let content = "";

  if (type === "mail") {
    content = `
      <h3>Mail ID</h3>
      <p>rahulkannavcet@gmail.com</p>
      <button onclick="window.location.href='mailto:rahulkannavcet@gmail.com'">Open in Mail App</button>
    `;
  } else if (type === "whatsapp") {
    content = `
      <h3>WhatsApp</h3>
      <p>+91 9345814480</p>
      <button onclick="window.open('https://wa.me/919345814480')">Open in WhatsApp</button>
    `;
  } else if (type === "phone") {
    content = `
      <h3>Phone</h3>
      <p>+91 9345814480</p>
      <button onclick="window.location.href='tel:+919345814480'">Call Now</button>
    `;
  }

  content += `<br><button onclick="popup.style.display='none'">Close</button>`;
  popupContent.innerHTML = content;
  popup.style.display = "flex";
}

// Confirmation popup for external links
document.querySelectorAll('.confirm-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const url = this.href;

    popupContent.innerHTML = `
      <h3>Leaving this page</h3>
      <p>You are about to visit:<br><strong>${url}</strong></p>
      <button onclick="window.open('${url}', '_blank'); popup.style.display='none'">Continue</button>
      <button onclick="popup.style.display='none'">Cancel</button>
    `;
    popup.style.display = "flex";
  });
});

  function openDegreePopup() {
    document.getElementById('popup-degree').style.display = 'flex';
  }

  function closeDegreePopup() {
    document.getElementById('popup-degree').style.display = 'none';
  }
