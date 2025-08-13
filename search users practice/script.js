const searchInput = document.querySelector("[data-search]");
const cards = document.querySelectorAll(".card");

const users = Array.from(cards).map((card) => {
    return {
        name: card.querySelector(".header").textContent.trim(),
        email: card.querySelector(".body").textContent.trim(),
        element: card
    };
});


searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) ||
            user.email.toLowerCase().includes(value);
        user.element.classList.toggle("hide", !isVisible);
    })
})
