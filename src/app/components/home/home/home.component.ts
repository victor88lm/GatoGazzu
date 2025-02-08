import { Component, OnInit, OnDestroy } from '@angular/core';

import { 
  Mail, 
  ClipboardList, 
  Cat, 
  ShoppingBasket 
} from 'lucide-angular';

interface BankInfo {
  name: string;
  bank: string;
  account: string;
  clabe: string;
  oxxo: string;
  paypal: string;
}

interface Step {
  number: number;
  icon: any; // Cambiamos el tipo de string a any para aceptar componentes de lucide
  text: string;
  email?: string;
}
interface Slide {
  id: number;
  image?: string; // Ahora es opcional
  alt?: string;   // Ahora es opcional
  title?: string;
  subtitle?: string;
  description?: string;
  steps?: Step[];
  logos?: { img: string; alt: string; }[];
  bankInfo?: BankInfo;
  footer?: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private autoSlideInterval: any;

  slides: Slide[] = [
    {
      id: 1,
      image: '/img/Banner1.avif',
      alt: 'Banner donación Casa del Gato Gazzu',
      title: '¡Juntos vamos a lograrlo!',
      description: 'Ayúdanos a que todos los gatitos de La Casa del Gato Gazzu tengan lo necesario durante su estancia. ¡Contamos contigo, Gazzuzero! No hay donativo pequeño, recuerda que todo suma.',
      logos: [
        {
          img: 'img/logo-gazzu.avif',
          alt: 'La casa del gato Gazzu'
        },
        {
          img: 'img/logo-donar.avif',
          alt: 'Donar es un acto de amor'
        }
      ]
    },
  ];

  ngOnInit(): void {
    this.startAutoSlide();
    this.preloadImages();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  private preloadImages(): void {
    this.slides.forEach(slide => {
      if (slide.image) { // Solo pre-cargar si hay imagen
        const img = new Image();
        img.src = slide.image;
        img.fetchPriority = 'high';
      }
    });
  }
  

  private startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide(): void {
    this.resetTimer();
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.resetTimer();
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.resetTimer();
    this.currentSlide = index;
  }

  private resetTimer(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}