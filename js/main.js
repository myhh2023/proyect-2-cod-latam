
const menuPrimero = document.querySelectorAll(".menula");
menuPrimero.forEach(function(primero){
    primero.addEventListener("click", function(e){
    const activePuesto = document.querySelector(".active");
    activePuesto.classList.remove("active");
    e.target.classList.add("active");

    });
});
