import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ContactForm } from '../models/contactForm';
import { Project } from '../models/project';

const domain = 'https://localhost:7257/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // ===== Projects API Calls =====
  
  async getProjects(language: string): Promise<{ success: boolean; data?: Project[]; error?: any }> {
    try {
      const response = await firstValueFrom(
        this.http.get<Project[]>(`${domain}api/Projects/GetAllWebsite/${language}`)
      );
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  // ===== Forms API Calls =====

  async sendContactForm(contactForm: ContactForm): Promise<{ success: boolean; data?: any; error?: any }> {
    try {
      const response = await firstValueFrom(
        this.http.post(`${domain}api/Forms/PostContactForm`, contactForm)
      );
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }
}
