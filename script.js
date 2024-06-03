const buttons = Array.from(document.querySelector(".btns-container").children)

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active")
        button.classList.add("active")
    })
})

const submitBtn = document.querySelector(".submit-btn")

submitBtn.addEventListener("click", function() {
    let activeBtn = document.querySelector(".active")
    if (activeBtn != null) {
        document.querySelector(".rating-card").classList.add("hidden")
        document.querySelector(".thankyou-card").classList.remove("hidden")
        buttonVal = activeBtn.textContent
        let selectionBtn = document.querySelector(".selection-btn")
        selectionBtn.textContent = "You selected " + buttonVal + " out of 5"
    } else {
        alert("No value selected")
    }
})