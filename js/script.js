var startDate = new Date("1998-09-10");
var diffDate = new Date(new Date() - startDate);
document.getElementById("dobdiff2").innerHTML=((diffDate.toISOString().slice(0, 4) - 1970));
document.getElementById("dobdiff").innerHTML=((diffDate.toISOString().slice(0, 4) - 1970));

const statsText = document.querySelectorAll('.stats-count');
statsText.forEach((element)=>{
        let interval=setInterval(function() 
                        { 
                                let count = parseInt(element.innerText);
                                const target=parseInt(element.getAttribute('data-target'));;
                                if(count>=target) clearInterval(interval); 
                               // const increment = (target / speed);
                                element.innerText = count+2;
                        }, 50);
})

const bars = document.querySelectorAll('.bar');

bars.forEach((element)=>{
	var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= parseInt(element.getAttribute('data-target'))) {
        clearInterval(id);
      } else {
        width++;
        element.style.width = width + "%";
      }
    }
}
)


let modalBox = document.getElementById("modal");
let modalBtn = document.querySelectorAll('.modalOpen');
let modalSpan = document.getElementsByClassName("modalClose")[0];
modalBtn.forEach((element)=>{
  element.onclick = function() {
    modalBox.style.display = "block";
    document.getElementById("modalMainImage").src = element.currentSrc;
  }
  modalSpan.onclick = function() {
    modalBox.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modalBox) {
      modalBox.style.display = "none";
    }
  }
})

var msgForm = document.getElementById("contact-form");
function handleForm(event) { event.preventDefault();
  document.getElementById("cfsubmit").value="Submitted Successfully!!!";
  setTimeout(()=>{
    document.getElementById("cfsubmit").value="Submit";
  }, 5000);

} 
  msgForm.addEventListener('submit', handleForm);

