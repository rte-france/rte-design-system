/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { FormContext } from '@/shared/context/formContext';
import { FormData } from '@/shared/types/Form.type';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ZodObject, ZodRawShape } from 'zod';

export type FormField<TValue> = {
  value: TValue | undefined;
  id: string;
};

export const useFormInput = <TValue, TSchema extends ZodRawShape>(
  formKey: string,
  validationSchema?: ZodObject<TSchema>,
  options?: {
    valueToId?: (value: TValue | undefined) => string;
    defaultValue?: FormField<TValue>;
  },
) => {
  const contextValidationSchema = FormContext.useSchema();
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const defaultValueRef = useRef<FormField<TValue> | undefined>(options?.defaultValue);
  const validationSchemaRef = useRef(validationSchema);
  const field = FormContext.useStore((store) => store[formKey] as FormData<FormField<TValue>>);
  FormContext.useClearOnDestroy(formKey);
  const setStore = FormContext.useSetStore();

  const error = useMemo(() => {
    if (isTouched && field && !field.isValid) {
      return field.errorMsg;
    }
    return undefined;
  }, [isTouched, field]);

  const initFormData = useCallback(async () => {
    const schema = { [formKey]: defaultValueRef.current?.value };
    const isValid = await (contextValidationSchema ?? validationSchemaRef.current).safeParseAsync(schema);
    setStore(
      {
        [formKey]: {
          isValid: isValid.success,
          errorMsg: '',
          formData: defaultValueRef.current,
        },
      },
      { addOnlyIfAbsent: true },
    );
  }, [setStore, formKey, contextValidationSchema]);
  useEffect(() => {
    void initFormData();
  }, [initFormData]);

  const setStoreFormInput = useCallback(
    async (newValue: FormField<TValue>) => {
      const schema = { [formKey]: newValue.value };
      const validationResult = await (contextValidationSchema ?? validationSchemaRef.current)
        .partial()
        .safeParseAsync(schema);
      if (validationResult.success) {
        setStore({ [formKey]: { isValid: true, formData: newValue } });
      } else {
        const errorMsg = validationResult.error.issues[0].message;
        setStore({
          [formKey]: { isValid: false, errorMsg, formData: newValue },
        });
      }
    },
    [formKey, contextValidationSchema, setStore],
  );

  const handleChange = useCallback(
    (value: TValue | undefined) => {
      setIsTouched(true);
      void setStoreFormInput({ value, id: options?.valueToId ? options.valueToId(value) : formKey });
    },
    [formKey, options, setStoreFormInput],
  );

  return {
    value: field?.formData?.value,
    handleChange,
    isTouched,
    error,
  };
};
