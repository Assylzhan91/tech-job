import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <p>
      not-found works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {

}
