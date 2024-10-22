/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import { t } from "i18next";
import { expectedDropdownItems } from "./dropdown";

export const openOption = {
  key: "open",
  label: t("pages.simulations.objects.@open"),
  value: "open",
  icon: StdIconId.OpenInNew,
};

export const encapsulateOption = {
  key: "encapsulate",
  label: t("pages.simulations.objects.@encapsulate"),
  value: "encapsulate",
  icon: StdIconId.CenterFocusStrong,
};

export const createInGridsuiteOption = {
  key: "createInGridsuite",
  label: t("pages.simulations.objects.@createInGridsuite"),
  value: "createInGridsuite",
  icon: StdIconId.AccountTree,
};

export const editOption = {
  key: "edit",
  label: t("pages.simulations.objects.@edit"),
  value: "edit",
  icon: StdIconId.Edit,
};

export const expectedNetworkObjectDropdownItems = [
  openOption,
  encapsulateOption,
  createInGridsuiteOption,
  expectedDropdownItems.delete,
];

export const expectedChronicleObjectDropdownItems = [
  openOption,
  encapsulateOption,
  expectedDropdownItems.delete,
];

export const expectedScriptObjectDropdownItems = [
  editOption,
  expectedDropdownItems.delete,
];

export const expectedDatatableObjectDropdownItems = [
  editOption,
  expectedDropdownItems.delete,
];
