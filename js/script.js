import {MAIL_KEY,MAIL_SECRET} from './apikey.js'
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

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "sender@email_address.com",
    Password: "Enter your password",
    To: 'receiver@email_address.com',
    From: "sender@email_address.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  })
    .then(function (message) {
      alert("mail sent successfully")
    });
}

function sendMail(name, email, subject, message, reciever) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.set('Authorization', 'Basic ' + btoa(MAIL_KEY+":" +MAIL_SECRET));
 
  const data = JSON.stringify({
    "Messages": [{
      "From": {"Email": 'drive.techsrijan@gmail.com', "Name": name},
      "To": [{"Email": reciever, "Name": "Amit Mishra"}],
      "Subject": subject,
      "TextPart": message
    }]
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
  };

  fetch("https://mishracodes.netlify.app/pathx", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}




const msgForm = document.getElementById("contact-form");
function handleForm(event) {
  event.preventDefault();
 
  const name=msgForm.elements[0].value
  const email=msgForm.elements[1].value
  const subject='mishracodesFormMessage - '+msgForm.elements[1].value
  const message=msgForm.elements[2].value
  sendMail(name,email,subject,message,'amitmishra.rh@gmail.com')


  document.getElementById("cfsubmit").value = "Submitted Successfully!!!";
  setTimeout(() => {
    document.getElementById("cfsubmit").value = "Submit";
  }, 3000);
}
msgForm.addEventListener("submit", handleForm);


const miniNav=document.getElementById('mini-nav-menu-snap');
miniNav.addEventListener('click',()=>{
  if(miniNav.classList[1]=='fa-bars'){
    miniNav.classList.remove("fa-bars");
    miniNav.classList.add("fa-times");
  }
  else{
    miniNav.classList.remove("fa-times");
    miniNav.classList.add("fa-bars");
  }
})