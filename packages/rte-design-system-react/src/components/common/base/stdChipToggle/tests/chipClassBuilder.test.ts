/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import {
  ACTIVE_STATUS_CLASSES,
  COMMON_CLASSES,
  HOVER_STATUS_CLASSES,
  PADDING_X_CLASSES,
  STATUS_CLASSES,
  chipClassBuilder,
} from "../chipToggleClassBuilder";

describe("generateClasses function", () => {
  it("should have the common classes", () => {
    expect(chipClassBuilder("primary").chipClasses).toContain(COMMON_CLASSES);
  });
  test.each([["primary"], ["secondary"], ["success"], ["error"]] as const)(
    "should have the proper classes for %s",
    (status) => {
      expect(chipClassBuilder(status).chipClasses).toContain(
        STATUS_CLASSES[status]
      );
      expect(chipClassBuilder(status).chipClasses).toContain(
        HOVER_STATUS_CLASSES[status]
      );
      expect(chipClassBuilder(status).chipClasses).toContain(
        ACTIVE_STATUS_CLASSES[status]
      );
    }
  );

  it("should have the proper variant and type classes", () => {
    expect(chipClassBuilder("primary", "test").chipClasses).toContain(
      PADDING_X_CLASSES.paddingDefault
    );
    expect(
      chipClassBuilder("primary", "test", StdIconId.Add).chipClasses
    ).toContain(PADDING_X_CLASSES.paddingLeftWithIcon);
  });
});
