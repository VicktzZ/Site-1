const botao = document.querySelector("#botoes img")
let click = true

botao.addEventListener("click", () => {
    const modal = document.querySelector("#modal")
    
    if(click) {
        modal.style.display = "grid"
        click = false
    } else {
        modal.style.display = "none"
        click = true
    }
    
})