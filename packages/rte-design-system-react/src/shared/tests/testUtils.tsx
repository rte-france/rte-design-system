/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import i18n from '@/i18n.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RenderOptions, render } from '@testing-library/react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import ModalProvider from '../providers/modalProvider.tsx';

export const renderWithRouter = (ui: React.ReactElement) => render(ui, { wrapper: BrowserRouter });

export const renderWithTranslation = (ui: React.ReactElement) =>
  render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);

export class RenderWrapper {
  ui: React.ReactElement;
  options?: Omit<RenderOptions, 'queries'>;
  constructor(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) {
    this.ui = ui;
    this.options = options;
  }

  static create(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) {
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
    this.ui = <QueryClientProvider client={actualQueryClient}>{this.ui}</QueryClientProvider>;
    return this;
  }

  withModal(defaultModalKey?: string) {
    this.ui = <ModalProvider defaultModalKey={defaultModalKey}>{this.ui}</ModalProvider>;
    return this;
  }

  render() {
    return { ...render(this.ui, this.options) };
  }
}
