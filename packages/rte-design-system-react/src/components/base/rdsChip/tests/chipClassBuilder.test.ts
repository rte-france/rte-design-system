/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { MouseEventHandler } from 'react';
import { ChipStatus } from '../RdsChip.tsx';
import {
  CHIP_ACTIVE_CLASSES,
  CHIP_ACTIVE_KEYBOARD_CLASSES,
  CHIP_COMMON_CLASSES,
  CHIP_PADDING_X,
  CHIP_STATUS_CLASSES,
  chipClassBuilder,
} from '../chipClassBuilder.ts';
import { noop, RdsIconId, RdsIconIdKey } from '@/utils/index.ts';

const defaultConf = {
  status: 'primary',
  isActive: false,
  label: 'text',
  icon: RdsIconId.Add,
  onClick: noop,
  onClose: undefined,
} as {
  status: ChipStatus;
  isActive: boolean;
  label?: string;
  icon?: RdsIconIdKey;
  onClick?: (e: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void;
  onClose?: MouseEventHandler<HTMLButtonElement>;
};

const generateClasses = (input: typeof defaultConf) =>
  chipClassBuilder(input.status, input.isActive, input.label, input.icon, input.onClick, input.onClose);

describe('generateClasses function', () => {
  it('should have the common classes', () => {
    expect(generateClasses(defaultConf).chipClasses).toContain(CHIP_COMMON_CLASSES);
  });
  it('should have the proper variant and type classes', () => {
    expect(generateClasses(defaultConf).chipClasses).toContain(CHIP_STATUS_CLASSES.primary);
    expect(generateClasses({ ...defaultConf, status: 'secondary' }).chipClasses).toContain(
      CHIP_STATUS_CLASSES.secondary,
    );
    expect(generateClasses({ ...defaultConf, status: 'success', onClose: noop }).chipClasses).toContain(
      CHIP_STATUS_CLASSES.success,
    );
    expect(generateClasses({ ...defaultConf, status: 'error', onClose: noop }).chipClasses).toContain(
      CHIP_STATUS_CLASSES.error,
    );
    expect(generateClasses({ status: 'primary', isActive: false, label: 'text' }).chipClasses).toContain(
      CHIP_PADDING_X.paddingLeftDefault,
    );
    expect(generateClasses({ ...defaultConf, onClose: noop, icon: undefined }).chipClasses).toContain(
      CHIP_PADDING_X.paddingRightWithCloseButton,
    );
    expect(generateClasses(defaultConf).chipClasses).toContain(CHIP_PADDING_X.paddingLeftWithIcon);
    expect(generateClasses(defaultConf).chipClasses).toContain(CHIP_ACTIVE_CLASSES.primary);
    expect(generateClasses({ ...defaultConf, status: 'secondary' }).chipClasses).toContain(
      CHIP_ACTIVE_CLASSES.secondary,
    );
    expect(generateClasses({ ...defaultConf, status: 'success' }).chipClasses).toContain(CHIP_ACTIVE_CLASSES.success);
    expect(generateClasses({ ...defaultConf, status: 'error' }).chipClasses).toContain(CHIP_ACTIVE_CLASSES.error);
  });
  it('should have the active keyboard classes', () => {
    expect(generateClasses({ ...defaultConf, isActive: true }).chipClasses).toContain(
      CHIP_ACTIVE_KEYBOARD_CLASSES.primary,
    );
    expect(generateClasses({ ...defaultConf, isActive: true, status: 'secondary' }).chipClasses).toContain(
      CHIP_ACTIVE_KEYBOARD_CLASSES.secondary,
    );
    expect(generateClasses({ ...defaultConf, isActive: true, status: 'success' }).chipClasses).toContain(
      CHIP_ACTIVE_KEYBOARD_CLASSES.success,
    );
    expect(generateClasses({ ...defaultConf, isActive: true, status: 'error' }).chipClasses).toContain(
      CHIP_ACTIVE_KEYBOARD_CLASSES.error,
    );
  });
  it("shouldn't have the active keyboard classes", () => {
    expect(generateClasses(defaultConf).chipClasses).not.toContain(CHIP_ACTIVE_KEYBOARD_CLASSES.primary);
    expect(generateClasses({ ...defaultConf, status: 'secondary' }).chipClasses).not.toContain(
      CHIP_ACTIVE_KEYBOARD_CLASSES.secondary,
    );
    expect(generateClasses({ ...defaultConf, status: 'success' }).chipClasses).not.toContain(
      CHIP_ACTIVE_KEYBOARD_CLASSES.success,
    );
    expect(generateClasses({ ...defaultConf, status: 'error' }).chipClasses).not.toContain(
      CHIP_ACTIVE_KEYBOARD_CLASSES.error,
    );
  });
});
