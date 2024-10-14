/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsAngularComponent } from './rds-angular.component';

describe('RdsAngularComponent', () => {
  let component: RdsAngularComponent;
  let fixture: ComponentFixture<RdsAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdsAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RdsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
