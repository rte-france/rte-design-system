/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { dateInputClassBuilder } from '../dateInputClassBuilder.ts';

const TEXT_ERROR = 'rds-text-error-600';
const BORDER_ERROR = 'rds-border-error-500';

describe('dateInputClassBuilder function', () => {
  it('should not have the error classes when forceError is false', () => {
    const { divLabelClasses, divInputsClasses, spanClasses } = dateInputClassBuilder(false);
    expect(divInputsClasses.split(' ').includes(BORDER_ERROR)).toBe(false);
    expect(spanClasses.split(' ').includes(TEXT_ERROR)).toBe(false);
    expect(divLabelClasses.split(' ').includes(TEXT_ERROR)).toBe(false);
  });
  it('should have the error classes when forceError is true', () => {
    const { divLabelClasses, divInputsClasses, spanClasses } = dateInputClassBuilder(true);
    expect(divInputsClasses.split(' ').includes(BORDER_ERROR)).toBe(true);
    expect(spanClasses.split(' ').includes(TEXT_ERROR)).toBe(true);
    expect(divLabelClasses.split(' ').includes(TEXT_ERROR)).toBe(true);
  });
});
