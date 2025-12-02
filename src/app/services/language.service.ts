import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  getCurrentLanguage(): string {
    const langCookie = localStorage.getItem('lang');
    const browserLang = navigator.language?.substring(0,2);
    if (langCookie && ['en', 'fr'].includes(langCookie)) {
      return langCookie;
    } else if (browserLang && ['en', 'fr'].includes(browserLang)) {
      return browserLang;
    } else {
      return 'fr';
    }
  }
}
