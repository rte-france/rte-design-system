/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { PropsWithChildren, useRef, useState } from 'react';
import cardClassBuilder from './cardClassBuilder.ts';
import { useRdsId } from '@/hooks/index.ts';

export type RdsCardProps = {
  id?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const SPACEBAR_INPUT = ' ';

export const RdsCard = ({ id: propsId, children, disabled, onClick }: PropsWithChildren<RdsCardProps>) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { cardClasses } = cardClassBuilder(!!onClick, isActive, disabled);
  const id = useRdsId('card', propsId);

  const handleKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && e.key === SPACEBAR_INPUT && (e.target as HTMLElement) === cardRef.current) {
      e.preventDefault();
      setIsActive(true);
    }
  };

  const handleKeyup = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && e.key === SPACEBAR_INPUT && (e.target as HTMLElement) === cardRef.current) {
      onClick();
      setIsActive(false);
    }
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div
      id={id}
      tabIndex={onClick ? 0 : undefined}
      className={cardClasses}
      onKeyDown={handleKeydown}
      onKeyUp={handleKeyup}
      onBlur={handleBlur}
      onClick={onClick}
      ref={cardRef}
      role="region"
    >
      {children}
    </div>
  );
};
