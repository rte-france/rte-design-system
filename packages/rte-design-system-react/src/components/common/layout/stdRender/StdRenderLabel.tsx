/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export type StdRenderLabelProps = {
  label: string;
  id?: string;
};

const StdRenderLabel = ({ label, id }: StdRenderLabelProps) => (
  <label htmlFor={id} className="peer ml-0.5 cursor-pointer ">
    {label}
  </label>
);

export default StdRenderLabel;
