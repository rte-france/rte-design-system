/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Queries, RenderHookOptions, RenderHookResult, queries, renderHook } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default class RenderHookWrapper<
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
> {
  renderer: (initialProps: Props) => Result;
  options?: RenderHookOptions<Props, Q, Container, BaseElement>;

  constructor(
    renderer: (initialProps: Props) => Result,
    options?: RenderHookOptions<Props, Q, Container, BaseElement>,
  ) {
    this.renderer = renderer;
    this.options = options;
  }

  static create<
    Result,
    Props,
    Q extends Queries = typeof queries,
    Container extends Element | DocumentFragment = HTMLElement,
    BaseElement extends Element | DocumentFragment = Container,
  >(renderer: (initialProps: Props) => Result, options?: RenderHookOptions<Props, Q, Container, BaseElement>) {
    return new RenderHookWrapper(renderer, options);
  }

  private wrapWithCurrent(
    Wrapper: RenderHookOptions<Props, Q, Container, BaseElement>['wrapper'] | undefined,
    children: React.ReactNode,
  ): React.ReactNode {
    if (!Wrapper) {
      return children;
    }
    return <Wrapper>{children}</Wrapper>;
  }

  withQuery({ queryClient }: { queryClient?: QueryClient } = {}) {
    const actualQueryClient = queryClient ?? new QueryClient();
    const currentWrapper = this.options?.wrapper;
    this.options = {
      ...this.options,
      wrapper: ({ children }) => (
        <QueryClientProvider client={actualQueryClient}>
          {this.wrapWithCurrent(currentWrapper, children)}
        </QueryClientProvider>
      ),
    };
    return this;
  }

  withRouter({ route, location }: { route: string; location: string }) {
    const currentWrapper = this.options?.wrapper;
    this.options = {
      ...this.options,
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={[location]}>
          <Routes>
            <Route path={route} element={this.wrapWithCurrent(currentWrapper, children)} />
          </Routes>
        </MemoryRouter>
      ),
    };
    return this;
  }

  renderHook(): RenderHookResult<Result, Props> {
    return renderHook(this.renderer, this.options);
  }
}
