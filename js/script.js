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