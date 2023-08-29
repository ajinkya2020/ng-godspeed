import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-components';

  constructor(private router: Router, private route: ActivatedRoute) {}

  public openInputComponent() {
    this.router.navigate(['input-component'], { relativeTo: this.route });
  }
}
