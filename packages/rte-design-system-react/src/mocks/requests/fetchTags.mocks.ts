/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { delay } from '@/shared/utils/asyncUtils';
import { generateFixedTags } from '../data/testsData/tags';

const fetchTags = async (): Promise<string[]> => {
  await delay(10);
  const tags = generateFixedTags(45);
  return Array.from(new Set(tags));
};

export default fetchTags;
