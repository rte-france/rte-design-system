import { RdsButtonComponent } from 'rte-design-system-angular';
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RdsButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: '../styles.css',
})
export class AppComponent {
  title = 'we-love-ds-site-test-angular';
}
