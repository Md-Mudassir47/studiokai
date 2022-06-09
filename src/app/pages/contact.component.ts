import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
    <div style="position:relative;">
      <app-contanct-hero-main></app-contanct-hero-main>

      <div
        class="main-container"
        style="background-color: #f8f9fa!important;"
        (submit)="send()"
      >
        <div class="container">
          <h1>SAY <span>HELLO</span></h1>
          <form [formGroup]="contactForm" style="background-color: white">
            <div class="mb-3 form-group">
              <label for="name" class="form-label">Full Name</label>
              <input
                formControlName="name"
                type="text"
                placeholder="Full Name"
                id="name"
                class="form-control"
              />
            </div>
            <div class="mb-3 form-group">
              <label for="email" class="form-label">Email</label>
              <input
                formControlName="email"
                type="text"
                placeholder="Email Address"
                id="email"
                class="form-control"
              />
            </div>
            <div class="mb-3 form-group">
              <label for="address" class="form-label">Address</label>
              <input
                formControlName="address"
                type="text"
                placeholder="Your Address"
                id="address"
                class="form-control"
              />
            </div>
            <div class="mb-3 form-group">
              <label for="message" class="form-label">Message</label>
              <textarea
                formControlName="message"
                class="form-control"
                placeholder="Say hello to us"
                id="message"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn">Send</button>
          </form>
        </div>
      </div>

      <app-footer></app-footer>
      <app-whatsapp></app-whatsapp>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 4rem 0;
      }

      a {
        width: 100%;
        height: 3rem;
      }

      label {
        font-weight: bold;
        color: gray;
      }

      form {
        box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
        margin-top: 4rem;
        padding: 4rem;
      }

      input {
        padding: 0.8rem;
      }

      span {
        font-weight: bold;
      }

      button {
        background-color: #98ccd3;
        border: 2px solid #98ccd3;
        cursor: pointer;
        color: #fff;
        border-radius: 0 !important;
        padding: 10px 20px;
        font-size: 1rem;
      }

      button:hover {
        background-color: white;
      }

      @media screen and (max-width: 576px) {
        .main-container {
          padding: 0 1.5rem;
        }

        form {
          padding: 3rem 2rem;
        }
      }
    `,
  ],
})
export class ContactComponent {
  contactForm: FormGroup;
  url: any;
  name: any;
  email: any;
  address: any;
  message: any;

  constructor(private router: Router) {
    this.contactForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      address: new FormControl(null),
      message: new FormControl(null),
    });
  }

  send() {
    this.name = this.contactForm.controls['name'].value;
    this.email = this.contactForm.controls['email'].value;
    this.address = this.contactForm.controls['address'].value;
    this.message = this.contactForm.controls['message'].value;
    this.url = `https://wa.me/9354585559?text='My Name is:- ${this.name}\n
    My Email is:- ${this.email}\n
    My Address is:- ${this.address}\n
    ${this.message}'`;

    // @ts-ignore
    window.open(this.url, '_blank').focus();
  }
}
