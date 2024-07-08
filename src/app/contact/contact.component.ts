// // src/app/contact/contact.component.ts
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent {
//   contactForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient
//   ) {
//     this.contactForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       message: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.contactForm.valid) {
//       console.log(this.contactForm.value);

//       // Send data to Laravel backend
//       this.http.post('http://your-laravel-app-url/api/contact', this.contactForm.value)
//         .subscribe(response => {
//           console.log('Response from Laravel:', response);
//           // Optionally handle response or redirect here
//         }, error => {
//           console.error('Error sending data:', error);
//           // Handle error as needed
//         });
//     }
//   }
// }
// src/app/contact/contact.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);

      // Send data to desired URL
      const url = 'contacts'; // Replace with your actual URL

      this.http.post(url, this.contactForm.value)
        .subscribe(response => {
          console.log('Response from server:', response);
          // Handle response as needed
          alert('Message sent successfully!');
          this.contactForm.reset(); // Optionally reset the form after successful submission
        }, error => {
          console.error('Error sending data:', error);
          // Handle error as needed
          alert('Failed to send message. Please try again later.');
        });
    }
  }
}

