openbtn = document.getElementById('openbtn')
curtain = document.querySelector(".curtain-inner")
walkarea = document.getElementById('walk')
walkarea2 = document.getElementById('walk2')
preimg = document.getElementById('preimg')
popup = document.getElementById('popup')
carousal = document.getElementById('carousal')


openbtn.addEventListener("click", () => {
    setTimeout(() =>{

        walkarea.classList.replace("static", "walk")
    }
    , 00)
    
    setTimeout(()=> {
        walkarea.classList.remove("static")
        curtain.classList.add("curtain-open");
        walkarea.classList.remove("walk")
        
     }
     ,1000);
     setTimeout(()=> {
         walkarea.classList.remove("static")
        walkarea2.classList.add('walk2')

     }
     ,2000);
     setTimeout(()=> {
        
        walkarea2.classList.add('walk2')
        walkarea2.classList.replace("walk2", "static-2")
        popup.classList.remove('d-none')
        // carousal.classList.remove('d-none')
        
     }
     ,3000);
     
     
})

//carousal-owel
$(document).ready(function(){
    $("#carousal1").owlCarousel({
        items: 1,
        margin: 10,
        dots: false,
        nav: false,
        loop:true,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        autoWidth:true,
    });
    $("#carousal2").owlCarousel({
        items: 1,
        margin:20,
        dots: false,
        nav: true,
        loop:true,
        autoplay: false,
        autoWidth:true,
    });
  });
  