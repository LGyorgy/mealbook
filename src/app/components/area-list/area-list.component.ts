import { Component, Input } from '@angular/core';
import { Area } from 'src/interfaces/area';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html'
})
export class AreaListComponent {
  @Input() areas!: Area[];
}
