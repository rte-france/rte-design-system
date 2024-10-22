/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconId } from '@/shared/utils/mappings/iconMaps';
import {Icon, ExplicitIconProps, NonExplicitIconProps, PlainIconProps } from './Icon';
import { useEffect } from 'react';

export type RdsIconProps = (ExplicitIconProps | NonExplicitIconProps) & {
  name: RdsIconId;
} & Omit<PlainIconProps, 'url'>;

// const iconMap = (Object.keys(RdsIconId) as RdsIconId[]).reduce(async (acc, key:RdsIconId) => {
//   acc[key] = await import(`/icons/rds/${key}.svg#icon`);
//   return acc;
// }, {} as Record<RdsIconId, string>);

export const RdsIcon = (props: RdsIconProps) => {
  const func = async ()=> {
    const composant =  (
      await import(`icons/rds/${props.name}.svg#icon`)
    ).ReactComponent;
    const composant2 =  await (
      await import(`icons/rds/${props.name}.svg`)
    ).ReactComponent;
    console.log("🚀 QCA :  ~ func ~ composant:", composant);
    console.log("🚀 QCA :  ~ func ~ composant2:", composant2);
  }
  useEffect(() => {
    func()
  }, [])
    return <Icon {...props} url={`/icons/rds/${props.name}.svg#icon`} />
}

