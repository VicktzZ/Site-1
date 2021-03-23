const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    const senha = document.querySelectorAll("input[type='password']")
    if (senha[0].value !== senha[1].value) {
        e.preventDefault()
        alert("As senhas não correspondem!")
    }
})
