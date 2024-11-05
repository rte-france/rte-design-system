/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconId } from '@/utils/index.ts';
import { tagClassBuilder } from './tagClassBuilder.ts';
import { RdsIconButton } from '../rdsIconButton/RdsIconButton.tsx';
import { useRdsId } from '@/hooks/index.ts';

export type RdsTagProps = {
  id?: string;
  label: string;
  onDelete?: () => void;
};

export const RdsTag = ({ id: propsId, label, onDelete }: RdsTagProps) => {
  const tagClasses = tagClassBuilder(!!onDelete);
  const id = useRdsId('tag', propsId);

  return (
    <span className={tagClasses} id={id} role="listitem">
      <label className="rds-overflow-hidden rds-text-ellipsis rds-whitespace-pre rds-text-overnote">{label}</label>
      {onDelete && (
        <span className="rds-px-0.25">
          <RdsIconButton icon={RdsIconId.Close} onClick={onDelete} size="extraSmall" variant="danger" />
        </span>
      )}
    </span>
  );
};
