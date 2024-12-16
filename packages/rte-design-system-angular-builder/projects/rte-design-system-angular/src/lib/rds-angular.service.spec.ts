/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { TestBed } from '@angular/core/testing';

import { RdsAngularService } from './rds-angular.service';

describe('RdsAngularService', () => {
  let service: RdsAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
