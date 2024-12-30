# Rte Design System

## Introduction

Librairy for sharing Rte design system components

## Objectives

TODO

## Product Information

### Overview

For now only a small amount off component are implemented

### Features

- Button
- Switch
- Toggle
- Chips
- Tag
- Link
- Radio button
- Checkbox
- Select
- Dropdown
- Searchbar
- Text input
- Text area
- Date input
- File input
- Stepper
- Navbar
- Tab
- Modal
- Card
- Toast
- Tooltip
- Breadcrumps
- Table
- Tree view
- Alert
- Banner
- Badge
- Header
- Pop over

component not implemented for version 1

- Slider
- Avatar
- Collapsible
- ProgressBar
- Spinner

### System Requirement

- Node 20

## Installation instructions

### Developer installation

```shell
  npm install
  npm run build
```

### Installation steps

```shell
npm i rte-design-system
```

## Technical details

### Architecture

we follow atomic design on this library.

- all atom are located in component folder
- all organism are located in template folder
  - for now, only page template and NavBar componentplates pour la navbar, et des pages par standardisé.

### Styling

For version 0.1 we are using tailwind 3 but for version 1.0 we should update tailwind to version 4.

Tailwind have been choose for accessibility with new developers.

All componant should follow the following rule :

- if there are more than 4 classes in className, use builder with constant.

### Tests

All atoms should be test with TU, all template should be test with integration test ( probably with cypress)

## Troubleshooting

If you use tailwind in your project, do not import @tailwind base.

## Revision

| Version | Comment                            |
| ------- | ---------------------------------- |
| 0.1     | version iso Imagrid without update |
