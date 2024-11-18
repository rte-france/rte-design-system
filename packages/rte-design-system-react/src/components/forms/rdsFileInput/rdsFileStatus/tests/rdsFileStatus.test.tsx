/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen, waitFor } from '@testing-library/react';
import { RdsFileStatus } from '../RdsFileStatus.tsx';
import { RdsIconId } from '@/utils/index.ts';
import i18n from '@/i18n.ts';
import { noop } from '@tanstack/react-table';

const TEST_ID = 'Id';
const TEST_NAME = 'filename.txt';
const TEST_STATUS_SUCCESS = 'success';
const TEST_STATUS_LOADING = 'loading';
const TEST_STATUS_ERROR = 'error';

describe('RdsFileStatus', () => {
  it('renders the default RdsFileStatus component with the proper values', () => {
    render(<RdsFileStatus id={TEST_ID} fileName={TEST_NAME} status={TEST_STATUS_SUCCESS} onDelete={noop} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
    expect(screen.getByText(TEST_NAME));
  });

  it('renders the RdsFileStatus component with the success status', async () => {
    render(<RdsFileStatus id={TEST_ID} fileName={TEST_NAME} status={TEST_STATUS_SUCCESS} onDelete={noop} />);
    await waitFor(() => expect(screen.getByTitle(RdsIconId.Delete)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTitle(RdsIconId.Done)).toBeInTheDocument());
  });

  it('renders the RdsFileStatus component with the loading status', async () => {
    render(<RdsFileStatus id={TEST_ID} fileName={TEST_NAME} status={TEST_STATUS_LOADING} onDelete={noop} />);
    await waitFor(() => expect(screen.getByTitle(RdsIconId.Delete)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTitle(RdsIconId.Downloading)).toBeInTheDocument());
  });

  it('renders the RdsFileStatus component with the error status', async () => {
    render(<RdsFileStatus id={TEST_ID} fileName={TEST_NAME} status={TEST_STATUS_ERROR} onDelete={noop} />);
    await waitFor(() => expect(screen.queryByTitle(RdsIconId.Delete)).not.toBeInTheDocument());
    await waitFor(() => expect(screen.getByTitle(RdsIconId.Close)).toBeInTheDocument());
    expect(screen.getByText(i18n.t('components.fileInput.@error'))).toBeInTheDocument();
  });
});
