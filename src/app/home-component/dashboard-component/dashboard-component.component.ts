import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.scss']
})
export class DashboardComponentComponent {
  isResize:boolean=true;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Main Chart', cols: 1, rows: 1 },
          { title: 'Sub Chart One', cols: 1, rows: 1 },
          { title: 'Sub Chart Two', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Main Chart', cols: 1, rows: 1 },
        { title: 'Sub Chart One', cols: 1, rows: 2 },
        { title: 'Sub Chart Two', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
