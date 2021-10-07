import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import {
  MatCarousel,
  MatCarouselComponent,
  MatCarouselSlide,
  MatCarouselSlideComponent,
} from '@ngbmodule/material-carousel';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides = [
    { image: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg', tcurso: 'curso1' },
    {
      image: 'https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg',
      tcurso: 'curso2',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Plaike.jpg/1200px-Plaike.jpg',
      tcurso: 'curso3',
    },
    { image: 'https://como-funciona.com/wp-content/uploads/2019/09/los-paisajes-1.jpg', tcurso: 'curso4' },
    { image: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg', tcurso: 'curso5' },
  ];

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {}
}
