import { IconProps } from '@/types/icons/iconsProps.ts';
import { lazy, LazyExoticComponent } from 'react';

/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const AccountCircle = lazy(() =>
  import('@/assets/icons/AccountCircle.tsx').then((module) => ({ default: module.AccountCircle })),
);
const AccountCircleFilled = lazy(() =>
  import('@/assets/icons/AccountCircleFilled.tsx').then((module) => ({ default: module.AccountCircleFilled })),
);
const AccountTree = lazy(() =>
  import('@/assets/icons/AccountTree.tsx').then((module) => ({ default: module.AccountTree })),
);
const Add = lazy(() => import('@/assets/icons/Add.tsx').then((module) => ({ default: module.Add })));
const AltRoute = lazy(() => import('@/assets/icons/AltRoute.tsx').then((module) => ({ default: module.AltRoute })));
const Apps = lazy(() => import('@/assets/icons/Apps.tsx').then((module) => ({ default: module.Apps })));
const Archive = lazy(() => import('@/assets/icons/Archive.tsx').then((module) => ({ default: module.Archive })));
const ArrowDownward = lazy(() =>
  import('@/assets/icons/ArrowDownward.tsx').then((module) => ({ default: module.ArrowDownward })),
);
const ArrowDownwardAlt = lazy(() =>
  import('@/assets/icons/ArrowDownwardAlt.tsx').then((module) => ({ default: module.ArrowDownwardAlt })),
);
const ArrowRight = lazy(() =>
  import('@/assets/icons/ArrowRight.tsx').then((module) => ({ default: module.ArrowRight })),
);
const ArrowUpward = lazy(() =>
  import('@/assets/icons/ArrowUpward.tsx').then((module) => ({ default: module.ArrowUpward })),
);
const Badge = lazy(() => import('@/assets/icons/Badge.tsx').then((module) => ({ default: module.Badge })));
const Bolt = lazy(() => import('@/assets/icons/Bolt.tsx').then((module) => ({ default: module.Bolt })));
const BrandAwareness = lazy(() =>
  import('@/assets/icons/BrandAwareness.tsx').then((module) => ({ default: module.BrandAwareness })),
);
const Build = lazy(() => import('@/assets/icons/Build.tsx').then((module) => ({ default: module.Build })));
const CalendarMonth = lazy(() =>
  import('@/assets/icons/CalendarMonth.tsx').then((module) => ({ default: module.CalendarMonth })),
);
const Cancel = lazy(() => import('@/assets/icons/Cancel.tsx').then((module) => ({ default: module.Cancel })));
const Category = lazy(() => import('@/assets/icons/Category.tsx').then((module) => ({ default: module.Category })));
const CenterFocusStrong = lazy(() =>
  import('@/assets/icons/CenterFocusStrong.tsx').then((module) => ({ default: module.CenterFocusStrong })),
);
const Close = lazy(() => import('@/assets/icons/Close.tsx').then((module) => ({ default: module.Close })));
const Compare = lazy(() => import('@/assets/icons/Compare.tsx').then((module) => ({ default: module.Compare })));
const ContentCopy = lazy(() =>
  import('@/assets/icons/ContentCopy.tsx').then((module) => ({ default: module.ContentCopy })),
);
const ContentPaste = lazy(() =>
  import('@/assets/icons/ContentPaste.tsx').then((module) => ({ default: module.ContentPaste })),
);
const Crown = lazy(() => import('@/assets/icons/Crown.tsx').then((module) => ({ default: module.Crown })));
const CrownFilled = lazy(() =>
  import('@/assets/icons/CrownFilled.tsx').then((module) => ({ default: module.CrownFilled })),
);
const Database = lazy(() => import('@/assets/icons/Database.tsx').then((module) => ({ default: module.Database })));
const Delete = lazy(() => import('@/assets/icons/Delete.tsx').then((module) => ({ default: module.Delete })));
const DeleteForever = lazy(() =>
  import('@/assets/icons/DeleteForever.tsx').then((module) => ({ default: module.DeleteForever })),
);
const DeleteForeverFilled = lazy(() =>
  import('@/assets/icons/DeleteForeverFilled.tsx').then((module) => ({ default: module.DeleteForeverFilled })),
);
const Description = lazy(() =>
  import('@/assets/icons/Description.tsx').then((module) => ({ default: module.Description })),
);
const Done = lazy(() => import('@/assets/icons/Done.tsx').then((module) => ({ default: module.Done })));
const Download = lazy(() => import('@/assets/icons/Download.tsx').then((module) => ({ default: module.Download })));
const Downloading = lazy(() =>
  import('@/assets/icons/Downloading.tsx').then((module) => ({ default: module.Downloading })),
);
const DragIndicator = lazy(() =>
  import('@/assets/icons/DragIndicator.tsx').then((module) => ({ default: module.DragIndicator })),
);
const Edit = lazy(() => import('@/assets/icons/Edit.tsx').then((module) => ({ default: module.Edit })));
const FilterAlt = lazy(() => import('@/assets/icons/FilterAlt.tsx').then((module) => ({ default: module.FilterAlt })));
const FilterCenterFocus = lazy(() =>
  import('@/assets/icons/FilterCenterFocus.tsx').then((module) => ({ default: module.FilterCenterFocus })),
);
const FilterList = lazy(() =>
  import('@/assets/icons/FilterList.tsx').then((module) => ({ default: module.FilterList })),
);
const Folder = lazy(() => import('@/assets/icons/Folder.tsx').then((module) => ({ default: module.Folder })));
const FolderOpen = lazy(() =>
  import('@/assets/icons/FolderOpen.tsx').then((module) => ({ default: module.FolderOpen })),
);
const FolderShared = lazy(() =>
  import('@/assets/icons/FolderShared.tsx').then((module) => ({ default: module.FolderShared })),
);
const FormatListBulleted = lazy(() =>
  import('@/assets/icons/FormatListBulleted.tsx').then((module) => ({ default: module.FormatListBulleted })),
);
const Fullscreen = lazy(() =>
  import('@/assets/icons/Fullscreen.tsx').then((module) => ({ default: module.Fullscreen })),
);
const GridView = lazy(() => import('@/assets/icons/GridView.tsx').then((module) => ({ default: module.GridView })));
const Groups = lazy(() => import('@/assets/icons/Groups.tsx').then((module) => ({ default: module.Groups })));
const GroupWork = lazy(() => import('@/assets/icons/GroupWork.tsx').then((module) => ({ default: module.GroupWork })));
const Help = lazy(() => import('@/assets/icons/Help.tsx').then((module) => ({ default: module.Help })));
const History = lazy(() => import('@/assets/icons/History.tsx').then((module) => ({ default: module.History })));
const Home = lazy(() => import('@/assets/icons/Home.tsx').then((module) => ({ default: module.Home })));
const HorizontalRule = lazy(() =>
  import('@/assets/icons/HorizontalRule.tsx').then((module) => ({ default: module.HorizontalRule })),
);
const Hourglass = lazy(() => import('@/assets/icons/Hourglass.tsx').then((module) => ({ default: module.Hourglass })));
const ImportContacts = lazy(() =>
  import('@/assets/icons/ImportContacts.tsx').then((module) => ({ default: module.ImportContacts })),
);
const Info = lazy(() => import('@/assets/icons/Info.tsx').then((module) => ({ default: module.Info })));
const InkEraser = lazy(() => import('@/assets/icons/InkEraser.tsx').then((module) => ({ default: module.InkEraser })));
const KeepOff = lazy(() => import('@/assets/icons/KeepOff.tsx').then((module) => ({ default: module.KeepOff })));
const KeyboardArrowDown = lazy(() =>
  import('@/assets/icons/KeyboardArrowDown.tsx').then((module) => ({ default: module.KeyboardArrowDown })),
);
const KeyboardArrowLeft = lazy(() =>
  import('@/assets/icons/KeyboardArrowLeft.tsx').then((module) => ({ default: module.KeyboardArrowLeft })),
);
const KeyboardArrowRight = lazy(() =>
  import('@/assets/icons/KeyboardArrowRight.tsx').then((module) => ({ default: module.KeyboardArrowRight })),
);
const KeyboardArrowUp = lazy(() =>
  import('@/assets/icons/KeyboardArrowUp.tsx').then((module) => ({ default: module.KeyboardArrowUp })),
);
const KeyboardDoubleArrowDownward = lazy(() =>
  import('@/assets/icons/KeyboardDoubleArrowDownward.tsx').then((module) => ({
    default: module.KeyboardDoubleArrowDownward,
  })),
);
const KeyboardDoubleArrowLeft = lazy(() =>
  import('@/assets/icons/KeyboardDoubleArrowLeft.tsx').then((module) => ({ default: module.KeyboardDoubleArrowLeft })),
);
const KeyboardDoubleArrowRight = lazy(() =>
  import('@/assets/icons/KeyboardDoubleArrowRight.tsx').then((module) => ({
    default: module.KeyboardDoubleArrowRight,
  })),
);
const KeyboardDoubleArrowUp = lazy(() =>
  import('@/assets/icons/KeyboardDoubleArrowUp.tsx').then((module) => ({ default: module.KeyboardDoubleArrowUp })),
);
const Link = lazy(() => import('@/assets/icons/Link.tsx').then((module) => ({ default: module.Link })));
const LinkOff = lazy(() => import('@/assets/icons/LinkOff.tsx').then((module) => ({ default: module.LinkOff })));
const Lock = lazy(() => import('@/assets/icons/Lock.tsx').then((module) => ({ default: module.Lock })));
const LockFilled = lazy(() =>
  import('@/assets/icons/LockFilled.tsx').then((module) => ({ default: module.LockFilled })),
);
const LockOpenRight = lazy(() =>
  import('@/assets/icons/LockOpenRight.tsx').then((module) => ({ default: module.LockOpenRight })),
);
const Login = lazy(() => import('@/assets/icons/Login.tsx').then((module) => ({ default: module.Login })));
const Logout = lazy(() => import('@/assets/icons/Logout.tsx').then((module) => ({ default: module.Logout })));
const ManageAccounts = lazy(() =>
  import('@/assets/icons/ManageAccounts.tsx').then((module) => ({ default: module.ManageAccounts })),
);
const MoreHoriz = lazy(() => import('@/assets/icons/MoreHoriz.tsx').then((module) => ({ default: module.MoreHoriz })));
const MoreVert = lazy(() => import('@/assets/icons/MoreVert.tsx').then((module) => ({ default: module.MoreVert })));
const NewReleases = lazy(() =>
  import('@/assets/icons/NewReleases.tsx').then((module) => ({ default: module.NewReleases })),
);
const OpenInFull = lazy(() =>
  import('@/assets/icons/OpenInFull.tsx').then((module) => ({ default: module.OpenInFull })),
);
const OpenInNew = lazy(() => import('@/assets/icons/OpenInNew.tsx').then((module) => ({ default: module.OpenInNew })));
const Output = lazy(() => import('@/assets/icons/Output.tsx').then((module) => ({ default: module.Output })));
const Palette = lazy(() => import('@/assets/icons/Palette.tsx').then((module) => ({ default: module.Palette })));
const Person = lazy(() => import('@/assets/icons/Person.tsx').then((module) => ({ default: module.Person })));
const PersonFilled = lazy(() =>
  import('@/assets/icons/PersonFilled.tsx').then((module) => ({ default: module.PersonFilled })),
);
const PlayArrow = lazy(() => import('@/assets/icons/PlayArrow.tsx').then((module) => ({ default: module.PlayArrow })));
const PlayCircle = lazy(() =>
  import('@/assets/icons/PlayCircle.tsx').then((module) => ({ default: module.PlayCircle })),
);
const PlaylistAdd = lazy(() =>
  import('@/assets/icons/PlaylistAdd.tsx').then((module) => ({ default: module.PlaylistAdd })),
);
const PlaylistAddCheck = lazy(() =>
  import('@/assets/icons/PlaylistAddCheck.tsx').then((module) => ({ default: module.PlaylistAddCheck })),
);
const PublishedWithChanges = lazy(() =>
  import('@/assets/icons/PublishedWithChanges.tsx').then((module) => ({ default: module.PublishedWithChanges })),
);
const PushPin = lazy(() => import('@/assets/icons/PushPin.tsx').then((module) => ({ default: module.PushPin })));
const ReceiptLong = lazy(() =>
  import('@/assets/icons/ReceiptLong.tsx').then((module) => ({ default: module.ReceiptLong })),
);
const Refresh = lazy(() => import('@/assets/icons/Refresh.tsx').then((module) => ({ default: module.Refresh })));
const Reply = lazy(() => import('@/assets/icons/Reply.tsx').then((module) => ({ default: module.Reply })));
const Report = lazy(() => import('@/assets/icons/Report.tsx').then((module) => ({ default: module.Report })));
const RestoreFromTrash = lazy(() =>
  import('@/assets/icons/RestoreFromTrash.tsx').then((module) => ({ default: module.RestoreFromTrash })),
);
const RestoreFromTrashFilled = lazy(() =>
  import('@/assets/icons/RestoreFromTrashFilled.tsx').then((module) => ({ default: module.RestoreFromTrashFilled })),
);
const RocketLaunch = lazy(() =>
  import('@/assets/icons/RocketLaunch.tsx').then((module) => ({ default: module.RocketLaunch })),
);
const Save = lazy(() => import('@/assets/icons/Save.tsx').then((module) => ({ default: module.Save })));
const Schedule = lazy(() => import('@/assets/icons/Schedule.tsx').then((module) => ({ default: module.Schedule })));
const Search = lazy(() => import('@/assets/icons/Search.tsx').then((module) => ({ default: module.Search })));
const Sell = lazy(() => import('@/assets/icons/Sell.tsx').then((module) => ({ default: module.Sell })));
const Sell2 = lazy(() => import('@/assets/icons/Sell2.tsx').then((module) => ({ default: module.Sell2 })));
const Send = lazy(() => import('@/assets/icons/Send.tsx').then((module) => ({ default: module.Send })));
const ArrowBack = lazy(() => import('@/assets/icons/ArrowBack.tsx').then((module) => ({ default: module.ArrowBack })));
const Settings = lazy(() => import('@/assets/icons/Settings.tsx').then((module) => ({ default: module.Settings })));
const Sort = lazy(() => import('@/assets/icons/Sort.tsx').then((module) => ({ default: module.Sort })));
const Spellcheck = lazy(() =>
  import('@/assets/icons/Spellcheck.tsx').then((module) => ({ default: module.Spellcheck })),
);
const Star = lazy(() => import('@/assets/icons/Star.tsx').then((module) => ({ default: module.Star })));
const StarFilled = lazy(() =>
  import('@/assets/icons/StarFilled.tsx').then((module) => ({ default: module.StarFilled })),
);
const StarOff = lazy(() => import('@/assets/icons/StarOff.tsx').then((module) => ({ default: module.StarOff })));
const StoreFront = lazy(() =>
  import('@/assets/icons/StoreFront.tsx').then((module) => ({ default: module.StoreFront })),
);
const SubdirectoryArrowRight = lazy(() =>
  import('@/assets/icons/SubdirectoryArrowRight.tsx').then((module) => ({ default: module.SubdirectoryArrowRight })),
);
const Sync = lazy(() => import('@/assets/icons/Sync.tsx').then((module) => ({ default: module.Sync })));
const ArrowCircleDown = lazy(() =>
  import('@/assets/icons/ArrowCircleDown.tsx').then((module) => ({ default: module.ArrowCircleDown })),
);
const SyncAlt = lazy(() => import('@/assets/icons/SyncAlt.tsx').then((module) => ({ default: module.SyncAlt })));
const SyncProblem = lazy(() =>
  import('@/assets/icons/SyncProblem.tsx').then((module) => ({ default: module.SyncProblem })),
);
const Tune = lazy(() => import('@/assets/icons/Tune.tsx').then((module) => ({ default: module.Tune })));
const ArrowCircleUp = lazy(() =>
  import('@/assets/icons/ArrowCircleUp.tsx').then((module) => ({ default: module.ArrowCircleUp })),
);
const Unarchive = lazy(() => import('@/assets/icons/Unarchive.tsx').then((module) => ({ default: module.Unarchive })));
const Upload = lazy(() => import('@/assets/icons/Upload.tsx').then((module) => ({ default: module.Upload })));
const Visibility = lazy(() =>
  import('@/assets/icons/Visibility.tsx').then((module) => ({ default: module.Visibility })),
);
const Warning = lazy(() => import('@/assets/icons/Warning.tsx').then((module) => ({ default: module.Warning })));
const WarningFilled = lazy(() =>
  import('@/assets/icons/WarningFilled.tsx').then((module) => ({ default: module.WarningFilled })),
);
const Weight = lazy(() => import('@/assets/icons/Weight.tsx').then((module) => ({ default: module.Weight })));
const Width = lazy(() => import('@/assets/icons/Width.tsx').then((module) => ({ default: module.Width })));
const ArrowRightAlt = lazy(() =>
  import('@/assets/icons/ArrowRightAlt.tsx').then((module) => ({ default: module.ArrowRightAlt })),
);

export const RdsIconId = {
  AccountCircle: 'AccountCircle',
  ArrowCircleDown: 'ArrowCircleDown',
  ArrowBack: 'ArrowBack',
  ArrowUpward: 'ArrowUpward',
  RestoreFromTrashFilled: 'RestoreFromTrashFilled',
  DeleteForeverFilled: 'DeleteForeverFilled',
  DeleteForever: 'DeleteForever',
  Delete: 'Delete',
  KeyboardDoubleArrowDownward: 'KeyboardDoubleArrowDownward',
  Output: 'Output',
  AccountTree: 'AccountTree',
  Add: 'Add',
  AltRoute: 'AltRoute',
  Apps: 'Apps',
  Archive: 'Archive',
  ArrowDownwardAlt: 'ArrowDownwardAlt',
  Badge: 'Badge',
  Bolt: 'Bolt',
  BrandAwareness: 'BrandAwareness',
  Build: 'Build',
  CalendarMonth: 'CalendarMonth',
  Cancel: 'Cancel',
  Category: 'Category',
  AccountCircleFilled: 'AccountCircleFilled',
  CenterFocusStrong: 'CenterFocusStrong',
  Close: 'Close',
  Compare: 'Compare',
  ContentCopy: 'ContentCopy',
  ContentPaste: 'ContentPaste',
  Crown: 'Crown',
  CrownFilled: 'CrownFilled',
  Database: 'Database',
  Description: 'Description',
  Done: 'Done',
  Download: 'Download',
  Downloading: 'Downloading',
  DragIndicator: 'DragIndicator',
  Edit: 'Edit',
  FilterCenterFocus: 'FilterCenterFocus',
  FilterList: 'FilterList',
  FilterAlt: 'FilterAlt',
  Folder: 'Folder',
  FolderOpen: 'FolderOpen',
  FormatListBulleted: 'FormatListBulleted',
  Fullscreen: 'Fullscreen',
  GridView: 'GridView',
  Groups: 'Groups',
  GroupWork: 'GroupWork',
  Help: 'Help',
  History: 'History',
  Home: 'Home',
  HorizontalRule: 'HorizontalRule',
  Hourglass: 'Hourglass',
  ImportContacts: 'ImportContacts',
  Info: 'Info',
  InkEraser: 'InkEraser',
  KeepOff: 'KeepOff',
  KeyboardArrowDown: 'KeyboardArrowDown',
  ArrowRightAlt: 'ArrowRightAlt',
  ArrowCircleUp: 'ArrowCircleUp',
  KeyboardArrowLeft: 'KeyboardArrowLeft',
  KeyboardArrowRight: 'KeyboardArrowRight',
  KeyboardArrowUp: 'KeyboardArrowUp',
  KeyboardDoubleArrowLeft: 'KeyboardDoubleArrowLeft',
  KeyboardDoubleArrowRight: 'KeyboardDoubleArrowRight',
  Link: 'Link',
  ArrowRight: 'ArrowRight',
  LinkOff: 'LinkOff',
  Lock: 'Lock',
  LockFilled: 'LockFilled',
  LockOpenRight: 'LockOpenRight',
  Login: 'Login',
  Logout: 'Logout',
  ManageAccounts: 'ManageAccounts',
  MoreHoriz: 'MoreHoriz',
  MoreVert: 'MoreVert',
  NewReleases: 'NewReleases',
  OpenInFull: 'OpenInFull',
  OpenInNew: 'OpenInNew',
  Palette: 'Palette',
  Person: 'Person',
  PersonFilled: 'PersonFilled',
  PlayArrow: 'PlayArrow',
  PlayCircle: 'PlayCircle',
  PlaylistAdd: 'PlaylistAdd',
  PlaylistAddCheck: 'PlaylistAddCheck',
  PublishedWithChanges: 'PublishedWithChanges',
  PushPin: 'PushPin',
  ReceiptLong: 'ReceiptLong',
  Refresh: 'Refresh',
  Report: 'Report',
  RocketLaunch: 'RocketLaunch',
  Save: 'Save',
  Schedule: 'Schedule',
  Search: 'Search',
  Sell: 'Sell',
  Sell2: 'Sell2',
  Send: 'Send',
  Settings: 'Settings',
  Sort: 'Sort',
  RestoreFromTrash: 'RestoreFromTrash',
  SpellCheck: 'SpellCheck',
  Star: 'Star',
  StarFilled: 'StarFilled',
  StarOff: 'StarOff',
  Storefront: 'Storefront',
  SubdirectoryArrowRight: 'SubdirectoryArrowRight',
  ArrowDownward: 'ArrowDownward',
  Sync: 'Sync',
  SyncAlt: 'SyncAlt',
  SyncProblem: 'SyncProblem',
  Tune: 'Tune',
  Unarchive: 'Unarchive',
  Upload: 'Upload',
  Visibility: 'Visibility',
  Warning: 'Warning',
  WarningFilled: 'WarningFilled',
  Weight: 'Weight',
  Width: 'Width',
  Reply: 'Reply',
  FolderShared: 'FolderShared',
  KeyboardDoubleArrowUp: 'KeyboardDoubleArrowUp',
} as const;

export const IconComps: Record<keyof typeof RdsIconId, LazyExoticComponent<(props: IconProps) => JSX.Element>> = {
  [RdsIconId.KeyboardDoubleArrowDownward]: KeyboardDoubleArrowDownward,
  [RdsIconId.ArrowCircleDown]: ArrowCircleDown,
  [RdsIconId.ArrowCircleUp]: ArrowCircleUp,
  [RdsIconId.ArrowRightAlt]: ArrowRightAlt,
  [RdsIconId.ArrowBack]: ArrowBack,
  [RdsIconId.RestoreFromTrashFilled]: RestoreFromTrashFilled,
  [RdsIconId.ArrowDownward]: ArrowDownward,
  [RdsIconId.RestoreFromTrash]: RestoreFromTrash,
  [RdsIconId.DeleteForeverFilled]: DeleteForeverFilled,
  [RdsIconId.DeleteForever]: DeleteForever,
  [RdsIconId.ArrowRight]: ArrowRight,
  [RdsIconId.Delete]: Delete,
  [RdsIconId.ArrowUpward]: ArrowUpward,
  [RdsIconId.AccountCircleFilled]: AccountCircleFilled,
  [RdsIconId.KeyboardDoubleArrowUp]: KeyboardDoubleArrowUp,
  [RdsIconId.Output]: Output,
  [RdsIconId.FolderShared]: FolderShared,
  [RdsIconId.AccountCircle]: AccountCircle,
  [RdsIconId.AccountTree]: AccountTree,
  [RdsIconId.Add]: Add,
  [RdsIconId.Reply]: Reply,
  [RdsIconId.AltRoute]: AltRoute,
  [RdsIconId.Apps]: Apps,
  [RdsIconId.Archive]: Archive,
  [RdsIconId.ArrowDownwardAlt]: ArrowDownwardAlt,
  [RdsIconId.Badge]: Badge,
  [RdsIconId.Bolt]: Bolt,
  [RdsIconId.BrandAwareness]: BrandAwareness,
  [RdsIconId.Build]: Build,
  [RdsIconId.CalendarMonth]: CalendarMonth,
  [RdsIconId.Cancel]: Cancel,
  [RdsIconId.Category]: Category,
  [RdsIconId.CenterFocusStrong]: CenterFocusStrong,
  [RdsIconId.Close]: Close,
  [RdsIconId.Compare]: Compare,
  [RdsIconId.ContentCopy]: ContentCopy,
  [RdsIconId.ContentPaste]: ContentPaste,
  [RdsIconId.CrownFilled]: CrownFilled,
  [RdsIconId.Crown]: Crown,
  [RdsIconId.Database]: Database,
  [RdsIconId.Description]: Description,
  [RdsIconId.Done]: Done,
  [RdsIconId.Downloading]: Downloading,
  [RdsIconId.Download]: Download,
  [RdsIconId.DragIndicator]: DragIndicator,
  [RdsIconId.Edit]: Edit,
  [RdsIconId.FilterCenterFocus]: FilterCenterFocus,
  [RdsIconId.FilterList]: FilterList,
  [RdsIconId.FilterAlt]: FilterAlt,
  [RdsIconId.FolderOpen]: FolderOpen,
  [RdsIconId.Folder]: Folder,
  [RdsIconId.FormatListBulleted]: FormatListBulleted,
  [RdsIconId.Fullscreen]: Fullscreen,
  [RdsIconId.GridView]: GridView,
  [RdsIconId.Groups]: Groups,
  [RdsIconId.GroupWork]: GroupWork,
  [RdsIconId.Help]: Help,
  [RdsIconId.History]: History,
  [RdsIconId.Home]: Home,
  [RdsIconId.HorizontalRule]: HorizontalRule,
  [RdsIconId.Hourglass]: Hourglass,
  [RdsIconId.ImportContacts]: ImportContacts,
  [RdsIconId.Info]: Info,
  [RdsIconId.InkEraser]: InkEraser,
  [RdsIconId.KeepOff]: KeepOff,
  [RdsIconId.KeyboardArrowDown]: KeyboardArrowDown,
  [RdsIconId.KeyboardArrowLeft]: KeyboardArrowLeft,
  [RdsIconId.KeyboardArrowRight]: KeyboardArrowRight,
  [RdsIconId.KeyboardArrowUp]: KeyboardArrowUp,
  [RdsIconId.KeyboardDoubleArrowLeft]: KeyboardDoubleArrowLeft,
  [RdsIconId.KeyboardDoubleArrowRight]: KeyboardDoubleArrowRight,
  [RdsIconId.LinkOff]: LinkOff,
  [RdsIconId.Link]: Link,
  [RdsIconId.LockFilled]: LockFilled,
  [RdsIconId.LockOpenRight]: LockOpenRight,
  [RdsIconId.Lock]: Lock,
  [RdsIconId.Login]: Login,
  [RdsIconId.Logout]: Logout,
  [RdsIconId.ManageAccounts]: ManageAccounts,
  [RdsIconId.MoreHoriz]: MoreHoriz,
  [RdsIconId.MoreVert]: MoreVert,
  [RdsIconId.NewReleases]: NewReleases,
  [RdsIconId.OpenInFull]: OpenInFull,
  [RdsIconId.OpenInNew]: OpenInNew,
  [RdsIconId.Palette]: Palette,
  [RdsIconId.PersonFilled]: PersonFilled,
  [RdsIconId.Person]: Person,
  [RdsIconId.PlayArrow]: PlayArrow,
  [RdsIconId.PlayCircle]: PlayCircle,
  [RdsIconId.PlaylistAddCheck]: PlaylistAddCheck,
  [RdsIconId.PlaylistAdd]: PlaylistAdd,
  [RdsIconId.PublishedWithChanges]: PublishedWithChanges,
  [RdsIconId.PushPin]: PushPin,
  [RdsIconId.ReceiptLong]: ReceiptLong,
  [RdsIconId.Refresh]: Refresh,
  [RdsIconId.Report]: Report,
  [RdsIconId.RocketLaunch]: RocketLaunch,
  [RdsIconId.Save]: Save,
  [RdsIconId.Schedule]: Schedule,
  [RdsIconId.Search]: Search,
  [RdsIconId.Sell2]: Sell2,
  [RdsIconId.Sell]: Sell,
  [RdsIconId.Send]: Send,
  [RdsIconId.Settings]: Settings,
  [RdsIconId.Sort]: Sort,
  [RdsIconId.SpellCheck]: Spellcheck,
  [RdsIconId.StarFilled]: StarFilled,
  [RdsIconId.StarOff]: StarOff,
  [RdsIconId.Star]: Star,
  [RdsIconId.Storefront]: StoreFront,
  [RdsIconId.SubdirectoryArrowRight]: SubdirectoryArrowRight,
  [RdsIconId.SyncAlt]: SyncAlt,
  [RdsIconId.SyncProblem]: SyncProblem,
  [RdsIconId.Sync]: Sync,
  [RdsIconId.Tune]: Tune,
  [RdsIconId.Unarchive]: Unarchive,
  [RdsIconId.Upload]: Upload,
  [RdsIconId.Visibility]: Visibility,
  [RdsIconId.WarningFilled]: WarningFilled,
  [RdsIconId.Warning]: Warning,
  [RdsIconId.Weight]: Weight,
  [RdsIconId.Width]: Width,
};

export type IconToggle = [keyof typeof RdsIconId, keyof typeof RdsIconId];

export const rdsFavoriteIcon: Record<string, IconToggle> = {
  star: [RdsIconId.Star, RdsIconId.StarFilled],
} as const;
