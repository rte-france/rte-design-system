/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Link, Router } from "react-router-dom";
import { buttonClassBuilder, labelClassBuilder, RdsIconId, RdsLinkButton } from "rte-design-system-react";

export function RdsLinkButtonDemo() {
  const linkButtonClasses = buttonClassBuilder("contained", "primary", "medium", false, true);
  const labelClasses = labelClassBuilder("medium");
  return (
    <RdsLinkButton
      href="/"
      location="internal"
      disabled
      id="rzqr"
      color="primary"
      size="medium"
      icon={RdsIconId.Archive}
    />
  );
  return (
    <Link to={"/"} className={linkButtonClasses} id={"link"} target={"_blank"} tabIndex={0}>
      <span className={labelClasses}>label</span>
    </Link>
  );
}
