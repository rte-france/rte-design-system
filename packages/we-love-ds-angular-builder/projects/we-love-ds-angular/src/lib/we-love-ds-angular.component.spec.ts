/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeLoveDsAngularComponent } from './we-love-ds-angular.component';

describe('WeLoveDsAngularComponent', () => {
  let component: WeLoveDsAngularComponent;
  let fixture: ComponentFixture<WeLoveDsAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeLoveDsAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeLoveDsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
