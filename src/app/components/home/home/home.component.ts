import { Component} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface Partner {
  name: string;
  image: string;
  description: string;
}

interface BlogPost {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  slug: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  trackPartnerName(index: number, partner: Partner): string {
    return partner.name;
  }
  
  partners: Partner[] = [
    {
      name: 'Catfecito',
      image: 'img/catfecito.avif',
      description: 'Logo de Catfecito - Café y espacio para gatos'
    },
    {
      name: 'Felinos Resort',
      image: 'img/logo-FelinosResort.avif',
      description: 'Logo de Felinos Resort - Hotel y spa para gatos'
    },
    {
      name: 'Meow Cerveza Artesanal',
      image: 'img/logo-cerveza-meow.avif',
      description: 'Logo de Meow - Cerveza artesanal con causa felina'
    },
    {
      name: 'Sugar Cat Bakery',
      image: 'img/logo-sugar-cat-bakery.avif',
      description: 'Logo de Sugar Cat Bakery - Panadería y repostería felina'
    },
    {
      name: 'Casa del Gato',
      image: 'img/Logo-Adoptar.avif',
      description: 'Logo de Casa del Gato - Centro de adopción felina'
    },
    {
      name: 'La Tienda de los Gatos',
      image: 'img/logo-la-tienda-de-los-gatos.avif',
      description: 'Logo de La Tienda de los Gatos - Productos para felinos'
    }
  ];


  blogPosts: BlogPost[] = [
    {
      title: 'Récord histórico de calor 🔥 en Cdmx, protejamos a nuestros mishis',
      date: '2024-04-17',
      image: 'img/cat-heat.avif',
      excerpt: 'En estos días de altas temperaturas la correcta hidratación de nuestros gatitos es un tema...',
      slug: 'record-historico-calor-cdmx'
    },
    {
      title: 'Día Internacional de los derechos de los animales',
      date: '2022-12-03',
      image: 'img/animal-rights.avif',
      excerpt: 'Gazzuzeros, hoy se celebra el día internacional de los derechos de los animales, por ello...',
      slug: 'dia-internacional-derechos-animales'
    },
    {
      title: 'Santa Miau la opción perfecta para ayudar',
      date: '2022-11-29',
      image: 'img/santa-miau.avif',
      excerpt: 'Gazzuzeros, llegó Santa Miau a la temporada decembrina, para poner en nuestros corazones solo cosas...',
      slug: 'santa-miau-opcion-perfecta'
    }
  ];
}