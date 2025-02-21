document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
        const tabId = button.getAttribute("data-tab");

        document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(tabId).classList.add("active");
    });
});

document.querySelector(".tab-button[data-tab='education']").classList.add("active");
document.getElementById("education").classList.add("active");
