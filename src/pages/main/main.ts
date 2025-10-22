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
      icon: 'fa-solid fa-spa',
      title: 'Limpeza de pele',
      description: 'Revigore sua pele com uma limpeza que remove impurezas e promove frescor e maciez.'
    },
    {
      icon: 'fa-solid fa-fire',
      title: 'Ventosaterapia',
      description: 'Ative a circulação e alivie tensões musculares com uma técnica natural e relaxante.'
    },
    {
      icon: 'fa-solid fa-droplet',
      title: 'Drenagem Linfática',
      description: 'Elimine toxinas e reduza inchaços, melhorando o bem-estar e a sensação de leveza.'
    },
    {
      icon: 'fa-solid fa-pen',
      title: 'Design de Sobrancelhas',
      description: 'Realce sua beleza com sobrancelhas perfeitamente definidas e harmoniosas.'
    },
  ]

  public results = [
    {
      image: 'images/pele/pele2.jpeg',
      title: 'Limpeza de Pele',
      description: 'Procedimento facial'
    },
    {
      image: 'images/drenagem/drenagem4.jpeg',
      title: 'Drenagem Linfática',
      description: 'Procedimento corporal'
    },
    {
      image: 'images/ventosa/ventosa1.jpeg',
      title: 'Ventosaterapia',
      description: 'Procedimento corporal'
    },
    {
      image: 'images/sobrancelha/sobrancelha2.jpeg',
      title: 'Design de Sobrancelhas',
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
