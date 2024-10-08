/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  WeLoveDsAngularComponent} from 'we-love-ds-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WeLoveDsAngularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'we-love-ds-site-test-angular';
}
