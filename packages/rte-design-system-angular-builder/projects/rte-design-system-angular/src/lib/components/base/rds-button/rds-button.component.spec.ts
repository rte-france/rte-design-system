import { AccountCircleComponent } from '../../../../assets/icons/AccountCircle';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RdsButtonComponent } from './rds-button.component';
import { IconMapsService } from '../../../../mappings/iconMap.service';

/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

const TEST_LABEL = 'Label';
const TEST_ICON = 'account_circle';
const TEST_ID = 'my-button';

describe('RdsButtonComponent', () => {
  let component: RdsButtonComponent;
  let fixture: ComponentFixture<RdsButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RdsButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsButtonComponent);
    component = fixture.componentInstance;
  });

  it('should render the default RdsButton component', () => {
    component.label = TEST_LABEL;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button).toBeTruthy();
    expect(button.textContent).toBe(TEST_LABEL);
  });

  it('should render the RdsButton with the proper id when specified', () => {
    component.label = TEST_LABEL;
    component.id = TEST_ID;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css(`#${TEST_ID}`)).nativeElement;
    expect(button).toBeTruthy();
  });

  it('should render the RdsButton component with icon + label', waitForAsync(() => {
    component.label = TEST_LABEL;
    component.icon = TEST_ICON;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button).toBeTruthy();
    expect(button.textContent).toContain(TEST_LABEL);
    fixture.whenStable().then(() => {
      const icon = fixture.debugElement.query(By.css(`[title="${TEST_ICON}"]`)).nativeElement;
      expect(icon).toBeTruthy();
    });
  }));

  it('should render the RdsButton component with icon and no label', waitForAsync(() => {
    component.icon = TEST_ICON;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button).toBeTruthy();
    fixture.whenStable().then(() => {
      const icon = fixture.debugElement.query(By.css(`[title="${TEST_ICON}"]`)).nativeElement;
      expect(icon).toBeTruthy();
    });
  }));
});