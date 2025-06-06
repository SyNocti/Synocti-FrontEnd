import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactForm } from '../models/contactForm';
import { firstValueFrom } from 'rxjs';

const domain = 'https://localhost:7257/';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(public http: HttpClient) { }

  async sendContactForm(contactForm: ContactForm): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.http.post(`${domain}api/OurCompany/Forms/PostContactForm`, contactForm)
      );
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async sendQuoteForm(formData: FormData): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.http.post(`${domain}api/OurCompany/Forms/PostQuoteForm`, formData)
      );
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }
}
