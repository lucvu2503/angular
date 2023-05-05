import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { HeroService } from 'src/app/hero.service';
import { MessageService } from 'src/app/message.service';
import { of } from 'rxjs';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: any = {
    id: 1,
    name: 'Windstorm',
  };
  heroes: any = HEROES;
  selectedHero?: any;
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    const mashup = of('anything', 3);

    mashup.subscribe((val) => console.log(val));
    this.getHeroes();
  }
  onSelect(hero: any): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
