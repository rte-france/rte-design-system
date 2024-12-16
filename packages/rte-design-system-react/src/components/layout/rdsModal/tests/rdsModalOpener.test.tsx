/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { ModalContext } from '@/contexts/modalContext.ts';
import { ModalProvider } from '@/providers/modalProvider.tsx';
import { render, screen } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { RdsModalOpener } from '../RdsModalOpener.tsx';
import { RdsModal } from '../RdsModal.tsx';

const TEST_TEXT = 'My component wrapped in the modal';
const TEST_COMPONENT = <span role="article">{TEST_TEXT}</span>;
const TEST_MODAL_KEY = 'test-modal-key';
const TEST_OTHER_MODAL_KEY = 'other-test-modal-key';

vi.mock('@/providers/modalProvider.tsx', () => ({
  ModalProvider: ({ children }: PropsWithChildren) => (
    <ModalContext.Provider
      value={{ currentModalKey: TEST_MODAL_KEY, closeModal: vi.fn(), openModal: vi.fn(), isOpen: () => true }}
    >
      {children}
    </ModalContext.Provider>
  ),
}));

describe('useModal', () => {
  it('render the expected component in the modal when the correct modal key is setted', () => {
    render(
      <ModalProvider>
        <RdsModalOpener modalKey={TEST_MODAL_KEY}>
          <RdsModal.Content>{TEST_COMPONENT}</RdsModal.Content>
        </RdsModalOpener>
      </ModalProvider>,
    );
    expect(screen.getByRole('article')).toBeInTheDocument();
  });
  it('do not render the component in a modal when the wrong modal key is setted', () => {
    render(
      <ModalProvider>
        <RdsModalOpener modalKey={TEST_OTHER_MODAL_KEY}>
          <RdsModal.Content>{TEST_COMPONENT}</RdsModal.Content>
        </RdsModalOpener>
      </ModalProvider>,
    );
    expect(screen.queryByRole('article')).not.toBeInTheDocument();
  });
});
