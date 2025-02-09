import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(
    private meta: Meta,
    private title: Title
  ) {
    this.addMetaTags();
  }

  private addMetaTags(): void {
    this.title.setTitle('La casa del gato Gazzu - Refugio de gatos');
    
    this.meta.addTags([
      { name: 'description', content: 'La casa del gato Gazzu es un refugio dedicado al cuidado y protección de gatos desde 2016. Adopta, dona o únete como voluntario.' },
      { name: 'keywords', content: 'refugio de gatos, adopción de gatos, donaciones, voluntariado, gatos, Gazzu' },
      { property: 'og:title', content: 'La casa del gato Gazzu - Refugio de gatos' },
      { property: 'og:description', content: 'Refugio dedicado al cuidado y protección de gatos desde 2016.' },
      { property: 'og:image', content: 'https://www.gatogazzuorg.org/assets/images/gazzu-logo.png' },
      { property: 'og:url', content: 'https://www.gatogazzuorg.org' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]);
  }
}
