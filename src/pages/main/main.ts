import { Component } from '@angular/core';
import { title } from '@primeuix/themes/aura/card';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-main',
  imports: [CarouselModule],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  public services = [
    {
      icon: '',
      title: '',
      description: ''
    }
  ]

  public results = [
    {
      icon: '',
      title: '',
      description: ''
    }
  ]
}
