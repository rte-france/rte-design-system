/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import StdAvatar, { AvatarSize } from '../stdAvatar/StdAvatar';
import { classBuilder as groupContainerClassBuilder } from './avatarGroupClassBuilder';
import { getColor, getUserFullname, getUserInitials, splitNameList } from './avatarTools';

type StdAvatarGroup = {
  names: string[];
  avatarSize?: AvatarSize;
  id?: string;
};

const StdAvatarGroup = ({ names, avatarSize = 'es', id: propsId }: StdAvatarGroup) => {
  const groupContainerClasses = groupContainerClassBuilder(avatarSize);
  const splittedNames = splitNameList(names);

  const id = useStdId('avatarGroup', propsId);

  return (
    <div role="group" id={id} className={groupContainerClasses}>
      {splittedNames.map((name) => (
        <StdAvatar
          key={getUserFullname(name)}
          initials={getUserInitials(name)}
          size={avatarSize}
          backgroundColor={getColor(name)}
          fullname={getUserFullname(name)}
        />
      ))}
    </div>
  );
};

export default StdAvatarGroup;
