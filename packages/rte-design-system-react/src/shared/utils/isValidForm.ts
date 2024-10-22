/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { FormData, FormStore } from '../types/Form.type';

export const isValidForm = (formStore?: FormStore) =>
  formStore && Object.values(formStore).every((data: FormData<unknown>) => data?.isValid);
