/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from "@testing-library/react";

import StdBadge from "../stdBadge";
import { randomMinMax, randomNumber } from "@/mocks/mockTools";

const TEST_CHILDREN = <div />;
const TEST_NOTIF_LESS_100 = randomNumber(99);
const TEST_NOTIF_MORE_THAN_99 = randomMinMax(100, 1000);

describe("StdBadge", () => {
  it("renders StdBadge component", () => {
    render(<StdBadge>{TEST_CHILDREN}</StdBadge>);
    expect(screen.getByRole("note")).toBeDefined();
  });
  it("display the exact number of notifications", () => {
    render(
      <StdBadge badgeValue={TEST_NOTIF_LESS_100}>{TEST_CHILDREN}</StdBadge>
    );
    expect(screen.getByRole("note").innerHTML).toBe(
      TEST_NOTIF_LESS_100.toString()
    );
  });
  it("display +99 in every cases", () => {
    render(
      <StdBadge badgeValue={TEST_NOTIF_MORE_THAN_99}>{TEST_CHILDREN}</StdBadge>
    );
    expect(screen.getByRole("note").innerHTML).toBe("+99");
  });
});
