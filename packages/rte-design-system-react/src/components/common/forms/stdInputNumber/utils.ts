/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const getInputNumberValue = (inputRef: React.RefObject<HTMLInputElement>, defaultValue: number) => {
  const inputValue = inputRef.current?.valueAsNumber;
  return typeof inputValue === 'number' && !Number.isNaN(inputValue) ? inputValue : defaultValue;
};
