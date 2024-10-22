/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { FormField } from '@/hooks/form/useFormInput';
import { FormDataOK, FormStore } from '../types/Form.type';

type MappedFormDataValues = { [key: string]: unknown };

export const mapFormDataToValues = (formData: FormStore): MappedFormDataValues => {
  const result: MappedFormDataValues = Object.fromEntries(Object.keys(formData).map((key) => [key, undefined]));

  for (const key in formData) {
    const field = formData[key] as FormDataOK<FormField<unknown>>;

    if (field.formData && field.formData.value !== undefined) {
      result[key] = field.formData.value;
    }
  }

  return result;
};
