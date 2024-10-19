import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Import HttpClient support
import { provideProtractorTestingSupport } from '@angular/platform-browser'; // Keep the Protractor support

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Add HttpClient support
    provideProtractorTestingSupport()
  ]
}).catch((err) => console.error(err));
