const startDate = new Date("1998-09-10");
const diffDate = new Date(new Date() - startDate);
document.getElementById("dobdiff2").innerHTML =diffDate.toISOString().slice(0, 4) - 1970;
document.getElementById("dobdiff").innerHTML =diffDate.toISOString().slice(0, 4) - 1970;

const statsText = document.querySelectorAll(".stats-count");
const aboutSection = document.getElementById("aboutme");
let statDone = false;
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.5 && statDone === false) {
      statsText.forEach((element) => {
        let interval = setInterval(function () {
          let count = parseInt(element.innerText);
          const target = parseInt(element.getAttribute("data-target"));
          if (count >= target) clearInterval(interval);
          // const increment = (target / speed);
          element.innerText = count + 2;
        }, 10);
      });

      statDone = true;
    }
  });
};

const obsOptions = {
  root: null,
  threshold: 0.6,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(aboutSection);

const bars = document.querySelectorAll(".bar");

bars.forEach((element) => {
  let width = 10;
  const id = setInterval(frame, 10);
  function frame() {
    if (width >= parseInt(element.getAttribute("data-target"))) {
      clearInterval(id);
    } else {
      width++;
      element.style.width = width + "%";
    }
  }
});

const modalBox = document.getElementById("modal");
const modalBtn = document.querySelectorAll(".modalOpen");
const modalSpan = document.getElementsByClassName("modalClose")[0];
modalBtn.forEach((element) => {
  element.onclick = function () {
    modalBox.style.display = "block";
    
    document.getElementById("modalMainImage").src = element.getAttribute('data-src');
  };
  modalSpan.onclick = function () {
    modalBox.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modalBox) {
      modalBox.style.display = "none";
    }
  };
});

const msgForm = document.getElementById("contact-form");
function handleForm(event) {
  event.preventDefault();
  document.getElementById("cfsubmit").value = "Submitted Successfully!!!";
  setTimeout(() => {
    document.getElementById("cfsubmit").value = "Submit";
  }, 3000);
}
msgForm.addEventListener("submit", handleForm);
