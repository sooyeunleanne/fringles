// translation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<string>('en');
  private translations: any = {};

  constructor(private http: HttpClient) {
    this.loadTranslations(this.currentLanguageSubject.value);
    
    // Subscribe to language changes
    this.currentLanguageSubject.subscribe(lang => {
      this.loadTranslations(lang);
    });
  }

  private loadTranslations(lang: string) {
    this.http.get(`assets/i18n/${lang}.json`).subscribe({
      next: (translations) => {
        this.translations = translations;
        console.log('Loaded translations:', translations); // Log translations to check
      },
      error: (err) => {
        console.error('Error loading translations:', err);
      }
    });
  }

  changeLanguage(lang: string) {
    this.currentLanguageSubject.next(lang);
  }

  getTranslation(key: string) {
    const keys = key.split('.');
    return keys.reduce((acc, curr) => acc && acc[curr], this.translations) || key;
  }

  get currentLanguage$() {
    return this.currentLanguageSubject.asObservable();
  }
}
