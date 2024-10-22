/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import i18n from "@/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RenderOptions, render } from "@testing-library/react";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { FormContext } from "../context/formContext";
import { FormStore } from "../types/Form.type";

export const renderWithRouter = (ui: React.ReactElement) =>
  render(ui, { wrapper: BrowserRouter });

export const renderInRoute = (
  ui: React.ReactElement,
  { route, location }: { route: string; location: string }
) =>
  render(
    <MemoryRouter initialEntries={[location]}>
      <Routes>
        <Route path={route} element={ui} />
      </Routes>
    </MemoryRouter>
  );

export const renderWithTranslation = (ui: React.ReactElement) =>
  render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);

export const renderWithTranslationAndRouter = (ui: React.ReactElement) =>
  render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>, {
    wrapper: BrowserRouter,
  });

export class RenderWrapper {
  ui: React.ReactElement;
  options?: Omit<RenderOptions, "queries">;
  formStore: { current: FormStore | undefined } | undefined;
  constructor(
    ui: React.ReactElement,
    options?: Omit<RenderOptions, "queries">
  ) {
    this.ui = ui;
    this.options = options;
  }

  static create(
    ui: React.ReactElement,
    options?: Omit<RenderOptions, "queries">
  ) {
    return new RenderWrapper(ui, options);
  }

  withRouter() {
    this.ui = <BrowserRouter>{this.ui}</BrowserRouter>;
    return this;
  }

  inRoute({ route, location }: { route: string; location: string }) {
    this.ui = (
      <MemoryRouter initialEntries={[location]}>
        <Routes>
          <Route path={route} element={this.ui} />
        </Routes>
      </MemoryRouter>
    );
    return this;
  }

  withTranslation() {
    this.ui = <I18nextProvider i18n={i18n}>{this.ui}</I18nextProvider>;
    return this;
  }

  withQuery({ queryClient }: { queryClient?: QueryClient } = {}) {
    const actualQueryClient = queryClient ?? new QueryClient();
    this.ui = (
      <QueryClientProvider client={actualQueryClient}>
        {this.ui}
      </QueryClientProvider>
    );
    return this;
  }

  withForm({ initialState }: { initialState: FormStore }) {
    this.formStore = { current: undefined };
    const FormContextGetter = () => {
      this.formStore!.current = FormContext.useStore((s) => s);
      return <></>;
    };

    this.ui = (
      <FormContext.Provider initialState={initialState}>
        <FormContextGetter />
        {this.ui}
      </FormContext.Provider>
    );
    return this;
  }

  render() {
    return { ...render(this.ui, this.options), formStore: this.formStore };
  }
}
