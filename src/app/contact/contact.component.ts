import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    try {
      // Here you would typically make an API call to send the email
      // For demonstration, we'll use a timeout to simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form submitted:', this.contactData);

      // Reset form
      this.contactData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      this.isSubmitting = false;
    }
  }
}
