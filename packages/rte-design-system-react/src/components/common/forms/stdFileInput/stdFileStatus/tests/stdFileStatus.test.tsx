/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import i18n from "@/i18n";
import { noop } from "@/shared/utils/defaultUtils";
import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import { render, screen } from "@testing-library/react";
import StdFileStatus from "../StdFileStatus";

const TEST_ID = "Id";
const TEST_NAME = "filename.txt";
const TEST_STATUS_SUCCESS = "success";
const TEST_STATUS_LOADING = "loading";
const TEST_STATUS_ERROR = "error";

describe("StdFileStatus", () => {
  it("renders the default StdFileStatus component with the proper values", () => {
    render(
      <StdFileStatus
        id={TEST_ID}
        fileName={TEST_NAME}
        status={TEST_STATUS_SUCCESS}
        onDelete={noop}
      />
    );
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
    expect(screen.getByText(TEST_NAME));
  });

  it("renders the StdFileStatus component with the success status", () => {
    render(
      <StdFileStatus
        id={TEST_ID}
        fileName={TEST_NAME}
        status={TEST_STATUS_SUCCESS}
        onDelete={noop}
      />
    );
    expect(screen.getByTitle(StdIconId.Delete)).toBeDefined();
    expect(screen.getByTitle(StdIconId.Done)).toBeDefined();
  });

  it("renders the StdFileStatus component with the loading status", () => {
    render(
      <StdFileStatus
        id={TEST_ID}
        fileName={TEST_NAME}
        status={TEST_STATUS_LOADING}
        onDelete={noop}
      />
    );
    expect(screen.getByTitle(StdIconId.Delete)).toBeDefined();
    expect(screen.getByTitle(StdIconId.Downloading)).toBeDefined();
  });

  it("renders the StdFileStatus component with the error status", () => {
    render(
      <StdFileStatus
        id={TEST_ID}
        fileName={TEST_NAME}
        status={TEST_STATUS_ERROR}
        onDelete={noop}
      />
    );
    expect(screen.queryByTitle(StdIconId.Delete)).not.toBeDefined();
    expect(screen.getByTitle(StdIconId.Close)).toBeDefined();
    expect(
      screen.getByText(i18n.t("components.fileInput.@error"))
    ).toBeDefined();
  });
});
