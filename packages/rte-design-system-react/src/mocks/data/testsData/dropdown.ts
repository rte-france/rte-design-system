/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import { t } from "i18next";

export const expectedDropdownItems = {
  download: {
    key: "download",
    label: t("components.dropdown.@download"),
    value: "download",
    icon: StdIconId.Download,
  },
  archive: {
    key: "archive",
    label: t("pages.projects.dropdown.@archive"),
    value: "archive",
    icon: StdIconId.Archive,
  },
  unarchive: {
    key: "archive",
    label: t("pages.projects.dropdown.@unarchive"),
    value: "archive",
    icon: StdIconId.Unarchive,
  },
  edit: {
    key: "edit",
    label: t("components.dropdown.@edit"),
    value: "edit",
    icon: StdIconId.Edit,
  },
  manageAccess: {
    key: "manageAccess",
    label: t("pages.projects.dropdown.@manageAccess"),
    value: "manageAccess",
    icon: StdIconId.ManageAccounts,
  },
  delete: {
    key: "delete",
    label: t("components.dropdown.@delete"),
    value: "delete",
    icon: StdIconId.Delete,
  },
};
