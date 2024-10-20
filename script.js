// Fonction pour gérer le changement de l'élément actif dans le menu de navigation
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    
    links.forEach(link => {
        link.addEventListener("click", function() {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

// Ajout d'un événement sur le formulaire lors de la soumission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche le rechargement de la page

    // Récupération des valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Construction du lien mailto avec les champs du formulaire
    const mailtoLink = `mailto:rahminec98@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Redirection vers le client de messagerie avec le lien mailto
    window.location.href = mailtoLink;
});


        // Fonction pour afficher ou masquer le contenu
        function toggleParagraph() {
            var content = document.getElementById("content1");
            content.classList.toggle("show"); // Ajoute ou enlève la classe "show"
        }

        const carousel = document.querySelector('.carousel-inner');
let index = 0;
const images = carousel.querySelectorAll('img');
const totalImages = images.length;

function autoSlide() {
    index = (index + 1) % totalImages;
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(autoSlide, 3000); // Défile toutes les 3 secondes

