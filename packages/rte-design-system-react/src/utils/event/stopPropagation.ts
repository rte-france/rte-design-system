/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const stopPropagation =
  <TElement extends HTMLElement, TEvent extends React.UIEvent<TElement, UIEvent>>(func: (ev: TEvent) => void) =>
  (e: TEvent) => {
    e.stopPropagation();
    func(e);
  };
