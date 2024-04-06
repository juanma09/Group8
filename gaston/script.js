let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

let faq = document.getElementById("faq-btn");

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add(active)
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

faq.addEventListener("click", function() {
    var faqContent = document.getElementById("faq-content");
    if (faqContent.classList.contains("hidden")) {
        faqContent.classList.remove("hidden");
    } else {
        faqContent.classList.add("hidden");
    }
});
