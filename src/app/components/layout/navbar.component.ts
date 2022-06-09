import {Component} from "@angular/core";

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <div class="w-100 d-flex nav-bar-nav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 icons">
            <li class="nav-item">
              <a class="nav-link active" target="_blank" href="https://www.facebook.com/karshniarchitectsandinterior">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" target="_blank"
                 href="https://www.linkedin.com/in/karshni-architects-246767187/">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" target="_blank"
                 href="https://instagram.com/karshniarchitectsinterior?utm_medium=copy_link">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" target="_blank" aria-current="page"
                 href="https://www.youtube.com/channel/UCKaN3TU_IbC6Jcg-x02HYGw">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>

          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active d-center info" style="gap: .5rem" aria-current="page" href="#">
                  <i class="fa-solid fa-phone" style="height: 50%"></i>
                  <a href="tel:9354585559" style="margin: 0">+91 935 4585 559</a>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active d-center info" style="gap: .5rem" href="#">
                  <i class="fa-solid fa-envelope" style="height: 50%"></i>
                  <a href="mailto:karshniarchitects@gmail.com" style="margin: 0">karshniarchitects@gmail.com</a>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <hr style="margin: 0">

    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#" style="font-size: 2rem">Studio KAi</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/how-it-works">How It Works</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/about">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/themes">Themes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/team">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    * {
      color: white !important;
      font-weight: 600;
    }

    .navbar-toggler {
      border-color: white !important;
    }

    .navbar-toggler-icon {
      background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgb(255,255,255)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }

    a {
      text-decoration: none;
    }

    i {
      color: white;
    }

    @media screen and (max-width: 992px) {
      .nav-bar-nav .navbar-nav {
        flex-direction: row !important;
      }

      .info {
        display: none !important;
      }

      .icons {
        gap: 1rem;
      }
    }
  `]
})
export class NavbarComponent {
}
