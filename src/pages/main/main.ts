import { Component } from '@angular/core';
import { title } from '@primeuix/themes/aura/card';
import { CarouselModule } from 'primeng/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-main',
  imports: [CarouselModule, FontAwesomeModule],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  public services = [
    {
      icon: '',
      title: 'Limpeza de pele',
      description: 'Alguma breve descrição so para testar como vai ficar na pagina'
    },
    {
      icon: '',
      title: 'Limpeza de pele',
      description: 'Alguma breve descrição so para testar como vai ficar na pagina'
    },
    {
      icon: '',
      title: 'Limpeza de pele',
      description: 'Alguma breve descrição so para testar como vai ficar na pagina'
    },
  ]

  public results = [
    {
      icon: '',
      title: 'Limpeza de Pele',
      description: 'Procedimento facial'
    },
    {
      icon: '',
      title: 'Limpeza de Pele',
      description: 'Procedimento facial'
    },
    {
      icon: '',
      title: 'Limpeza de Pele',
      description: 'Procedimento facial'
    },
  ]

  public testmonials = [
    {
      avatar: 'images/foto_perfil.jpeg',
      description: '"Procedimento excelente, aplicado por um excelente profissional!"',
      name: 'Thomas Dixini',
      procedure: 'Ventosaterapia'
    }
  ]
}
