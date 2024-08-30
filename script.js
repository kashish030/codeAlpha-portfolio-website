document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerText = "↑ Top";
    scrollToTopBtn.style.position = "fixed";
    scrollToTopBtn.style.bottom = "20px";
    scrollToTopBtn.style.right = "20px";
    scrollToTopBtn.style.padding = "10px";
    scrollToTopBtn.style.display = "none";
    scrollToTopBtn.style.backgroundColor = "#333";
    scrollToTopBtn.style.color = "#fff";
    scrollToTopBtn.style.border = "none";
    scrollToTopBtn.style.cursor = "pointer";

    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });
});