/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { LOREM_IPSUM } from '@/mocks/loremIpsum';
import { randomNumber } from '@/mocks/mockTools';

const LOREM_IPSUM_TAGS = LOREM_IPSUM.split(' ');
export const generateFixedTag = (tagIdx: number) => LOREM_IPSUM_TAGS[tagIdx % LOREM_IPSUM_TAGS.length];
export const randomTag = () => generateFixedTag(randomNumber(LOREM_IPSUM_TAGS.length));

export const generateFixedTags = (nbTags: number, seed = 1) =>
  Array.from({ length: nbTags }, (_, idx) => generateFixedTag((idx + seed) * seed));
export const randomTags = (nbTags: number) => generateFixedTags(nbTags, randomNumber(100));
