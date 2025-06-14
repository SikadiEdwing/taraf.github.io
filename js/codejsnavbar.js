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
  // 1) Mets ton code HTML de navbar dans une template string
  const navbarHTML = `
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
  <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
    <h3 class="m-0 text-primary d-none d-lg-inline">
      <img src="img2/45.png" class="me-3" style="height: 2.5em;">Taraf Education
    </h3>
  </a>
  <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <div class="navbar-nav ms-auto p-4 p-lg-0">
      <a href="index.html" class="nav-item nav-link active">Home</a>
      <a href="about.html" class="nav-item nav-link">About</a>
      <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
        <div class="dropdown-menu fade-down m-0">
          <a href="classes.html" class="dropdown-item">Classes</a>
          <a href="immigration.html" class="dropdown-item">Immigration</a>
          <a href="translation.html" class="dropdown-item">Translation</a>
        </div>
      </div>
      <a href="contact.html" class="nav-item nav-link">Contact</a>
    </div>
  </div>
</nav>
  `;

  // 2) Injecte-le dans le placeholder
  const container = document.getElementById("navbar");
  if (container) {
    container.innerHTML = navbarHTML;
  } else {
    console.error("Pas de <div id='navbar'> trouvé dans le DOM.");
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