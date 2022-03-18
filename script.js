const submit = document.querySelector("#submit")
const ratings = document.querySelectorAll("[data-value]")
const rating =  document.querySelector("#rating")
const sections = document.querySelectorAll("section")

let value = 0

ratings.forEach(item => {
    item.addEventListener('click', () => {
        ratings.forEach(item=>item.classList.remove("gray"))
        value = item.dataset.value
        item.classList.add("gray")
    })
})

submit.addEventListener("click", () => {
    if(value!=0){
        rating.textContent = value
        sections[0].classList.add("shrink")
        sections[1].classList.add("grow")
    }
})