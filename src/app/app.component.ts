import { Component } from '@angular/core';
import { ValidationService } from 'projects/shared-controls/src/lib/service/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(validityService: ValidationService) {}

  accessSharedIsValid() {}
}
