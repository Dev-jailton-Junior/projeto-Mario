const form = document.querySelector(".form-fale-conosco")
const mascara = document.querySelector(".mascara-form")


function buttonForm(){
    form.style.left= "35%"
    form.style.transform = "translateX (-50)"
    mascara.style.visibility = "visible"
}
function hideForm(){
    form.style.left = "-300px"
    form.style.transform = "translateX (0)"
    mascara.style.visibility = "hidden"
}