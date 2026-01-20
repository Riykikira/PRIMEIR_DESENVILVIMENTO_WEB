import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngFor e *ngIf em Standalone ou adicione no Module
import { HeroiComponent } from '../heroi/heroi.component';
import { ContatoComponent } from '../contato/contato.component';
interface Slide {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

@Component({
  selector: 'app-hero-carousel',
  standalone: true, // Se estiver usando Angular 14+ standalone
  imports: [CommonModule],
  templateUrl: './hero-carousel.html',
  styleUrls: ['./hero-carousel.css']
})

export class HeroCarouselComponent implements OnInit, OnDestroy {
 
  slides: Slide[] = [
    {
      image: '', // Imagem exemplo de blocos
      title: 'A qualidade que você merece',
      subtitle: 'Só na Interblock você encontra os melhores blocos de concreto',
      ctaText: 'Quero fazer o meu pedido',
      ctaLink: ''
    },
    
    {
      image: '', // Imagem exemplo 2
      title: 'qualidade e resistência',
      subtitle: 'Entregamos em toda a região com agilidade',
      ctaText: 'Solicitar Orçamento',
      ctaLink: ''
    }
  ];

  currentSlide = 0;
  autoPlayInterval: any;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  next(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.resetTimer();
  }

  prev(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.resetTimer();
  }

  // Lógica para passar sozinho (Opcional)
  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 5000); // Muda a cada 5 segundos
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  resetTimer(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}