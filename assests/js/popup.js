const expbtn =document.querySelector("#explore-btn");
expbtn.addEventListener("click",clicked)
    function clicked(){
        const popup = document.querySelector(".main-pop-up");
        popup.style.display="block";
    }
    const crossbtn =document.querySelector("#cross-btn");
    crossbtn.addEventListener("click",crossclicked)
    function crossclicked(){
        const popup = document.querySelector(".main-pop-up");
        popup.style.display="none";
    }