import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TranslationService {
  private currentLanguage = 'en'; // default language
  private translations: any = {};

  constructor(private http: HttpClient) {
    this.loadTranslations(this.currentLanguage);
  }

  loadTranslations(lang: string): void {
    this.http.get(`/assets/texts/${lang}.json`).subscribe((data) => {
      this.translations = data;
    });
  }

  switchLanguage(lang: string): void {
    this.currentLanguage = lang;
    this.loadTranslations(lang);
  }

  translate(key: string): string {
    return this.translations[key] || key; // fallback to key if translation not found
  }
}
