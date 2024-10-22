/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/**
 * Utility function to validate the translation of a key without actually translating it.
 *
 * It uses "@amarant/eslint-plugin-react-i18next" to statically validate the key.
 *
 * Usefull regex to find unvalidated translation keys: (?<!t\()(?<!tv\()'[^']*\.@[^']*'
 * @param key A translation key.
 * @returns The same translation key.
 */
export const tv = (key: string) => key;
