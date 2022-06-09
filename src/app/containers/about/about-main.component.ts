import {Component} from "@angular/core";

@Component({
  selector: 'app-about-main',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-lg-4 d-flex align-items-center justify-content-center image">
          <img class="img-fluid" src="../../../assets/3_1.jpg"/>
        </div>
        <div class="col-lg-8 py-1 content">
          <h3 style="font-weight: bold" class="py-3">About Us</h3>
          <p>
            Studio KAI offers renewal opportunities for families, couples, singles or anyone looking for a change in
            their life and home. Our central idea is that each client has a story and the work environment is a great
            vehicle to tell it. When we do our initial scheduling for a project, we get all the basics: people, customer
            needs, etc., but we also want to get to know our customers on a personal level: who are the people and what
            do they like to do?
          </p>
          <p>
            We take a collaborative study approach to a variety of projects ranging from regional planning to rain
            gardens. Our main mission is to design, personalize and transform what gives joy. Our studio offers a full
            range of services: architecture from scratch, interior and furniture design, site planning, garden and
            landscape design. We provide and facilitate these services to PAN India. Our environmental ethic requires
            the integration of interiors and landscapes from the very first design. We and our consultants can bring you
            the latest design ideas, with family values as our core spirit.
          </p>
          <p>
            Our main associated objective is to allow the customer to live easily. The location of our studio reflects
            and shapes our attitude towards our work. The result of our work as stylists, designers and general
            contractors is a small sofa bed. We have organized our office to maintain a personal and craft connection
            throughout the planning and construction period. We listen carefully to our customers; we cherish
            traditions, but we look at each project anew and for itself; and we remain at the forefront of 21st century
            building technology and design.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }

    p {
      font-size: 1rem;
    }

    @media screen and (max-width: 576px) {
      /*.image {*/
      /*  padding: 0;*/
      /*  padding: 1rem;*/
      /*}*/

      .content {
        /*padding: 1rem;*/
      }
    }
  `]
})

export class AboutMainComponent {
}
