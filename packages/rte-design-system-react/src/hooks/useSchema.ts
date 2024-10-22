/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { SchemaContext } from '@/shared/context/schemaContext';
import { useContext } from 'react';

const useSchema = () => {
  const schema = useContext(SchemaContext)!;
  return schema;
};

export default useSchema;
