/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import useSchema from '@/hooks/useSchema';
import { PropsWithChildren } from 'react';
import { ZodObject, ZodRawShape } from 'zod';
import { FormStore } from '../types/Form.type';
import createFastContext from './createFastContext';
import { SchemaContext } from './schemaContext';

type FormContextType = {
  initialState: FormStore;
  schema?: ZodObject<ZodRawShape>;
  children: React.ReactNode;
};

const { Provider: FormContextProvider, ...fastContextHooks } = createFastContext<FormStore>();

export const FormContext = {
  Provider: ({ children, schema, initialState }: PropsWithChildren<FormContextType>) => (
    <SchemaContext.Provider value={schema}>
      <FormContextProvider initialState={initialState}>{children}</FormContextProvider>
    </SchemaContext.Provider>
  ),
  useSchema,
  ...fastContextHooks,
};
