/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { TestBed } from '@angular/core/testing';

import { WeLoveDsAngularService } from './we-love-ds-angular.service';

describe('WeLoveDsAngularService', () => {
  let service: WeLoveDsAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeLoveDsAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
