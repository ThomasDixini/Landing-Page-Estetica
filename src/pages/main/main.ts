import { Component, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-main',
  imports: [CarouselModule, FontAwesomeModule, AnimateOnScrollModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
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



  enviarMensagemWhatsApp(){
    const number = "5535992468053";
    const message = `
      Olá, tudo bem?
    Estava navegando pelo seu site e me interessei pelos seus procedimentos estéticos.
    Gostaria de receber mais informações sobre os tratamentos disponíveis e o agendamento.
    `;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${number}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }
}
