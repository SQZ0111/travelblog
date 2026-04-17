const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(el => {
    el.addEventListener("click",(e) => {
        const faqText = el.children[1];
        faqText.classList.toggle("faq-answer-hidden");
    })
}) 