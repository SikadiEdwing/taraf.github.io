/*document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(response => {
      if (!response.ok) throw new Error("Status code: " + response.status);
      return response.text();
    })
    .then(html => {
      document.getElementById("navbar").innerHTML = html;
    })
    .catch(error => console.error("Erreur de chargement de la navbar :", error));
});*/
// js/codejsnavbar.js
document.addEventListener("DOMContentLoaded", () => {
  const navbarHTML = `
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <img src="img2/45.png" class="me-3" style="height: 4em;">
        <h3 class="m-0 text-primary d-none d-md-inline landscape-show">
          Taraf Education
        </h3>
      </a>
      <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
          <a href="index.html" class="nav-item nav-link" id="nav-home">Home</a>
          <a href="about.html" class="nav-item nav-link" id="nav-about">About</a>
          <div class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div class="dropdown-menu fade-down m-0">
              <a href="classes.html" class="dropdown-item" id="nav-classes">Classes</a>
              <a href="immigration.html" class="dropdown-item" id="nav-immigration">Immigration</a>
              <a href="translation.html" class="dropdown-item" id="nav-translation">Translation</a>
            </div>
          </div>
          <a href="contact.html" class="nav-item nav-link" id="nav-contact">Contact</a>
        </div>
      </div>
    </nav>
  `;

  const container = document.getElementById("navbar");
  if (container) {
    container.innerHTML = navbarHTML;

    // Gestion de l'état actif
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = {
      'index.html': 'nav-home',
      'about.html': 'nav-about',
      'classes.html': 'nav-classes',
      'immigration.html': 'nav-immigration',
      'translation.html': 'nav-translation',
      'contact.html': 'nav-contact'
    };

    if (navLinks[currentPage]) {
      const activeLink = document.getElementById(navLinks[currentPage]);
      if (activeLink) {
        activeLink.classList.add('active');

        // Pour les éléments dropdown
        if (currentPage === 'classes.html' ||
          currentPage === 'immigration.html' ||
          currentPage === 'translation.html') {
          document.querySelector('.dropdown-toggle').classList.add('active');
        }
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const navbarHTML = `<div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-2 col-md-6">
                    <h4 class="text-white mb-3">Quick Link</h4>
                    <a class="btn btn-link" href="">About Us</a>
                    <a class="btn btn-link" href="">Contact Us</a>
                    <a class="btn btn-link" href="">Privacy Policy</a>
                    <a class="btn btn-link" href="">Terms & Condition</a>
                    <a class="btn btn-link" href="">FAQs & Help</a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h4 class="text-white mb-3">Contact</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Acassia Biyem-Assi derrière Maison MTN</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+237 696 719 319/670 658 052</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>TarafEjlscameroun2025@gmail.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Gallery</h4>
                    <div class="row g-2 pt-2">
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="img2/27.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="img2/23.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="img2/9.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="img2/16.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="img2/29.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="img2/33.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Newsletter</h4>
                    <p>Sign up to receive training notifications</p>
                    <div class="position-relative mx-auto" style="max-width: 400px;">
                        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">Taraf education</a>, All Right Reserved.

                        <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                     </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="footer-menu">
                            <a href="">Home</a>
                            <a href="">Cookies</a>
                            <a href="">Help</a>
                            <a href="">FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>  `;
  // 2) Injecte-le dans le placeholder
  const container = document.getElementById("footer");
  if (container) {
    container.innerHTML = navbarHTML;
  } else {
    console.error("Pas de <div id='navbar'> trouvé dans le DOM.");
  }
});


// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function () {
  // Sélectionner le formulaire
  const form = document.getElementById('contactForm');

  if (form) {
    // Écouter l'événement submit
    form.addEventListener('submit', function (event) {
      // Empêcher l'envoi si invalide
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      // Ajouter la classe de validation
      form.classList.add('was-validated');

      // Optionnel: Envoi personnalisé si valide
      if (form.checkValidity()) {
        // Ici vous pourriez ajouter un loader ou autre logique
        console.log('Formulaire valide, envoi en cours...');
      }
    }, false);

    // Validation en temps réel (optionnel)
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', function () {
        if (input.checkValidity()) {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
        } else {
          input.classList.remove('is-valid');
          input.classList.add('is-invalid');
        }
      });
    });
  }
});