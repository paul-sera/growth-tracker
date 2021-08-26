import * as React from 'react';

import * as Types from '../common/types';
import * as Components from './index';

export interface GuildsProps {
  readonly guilds: Types.Guild[];
}

export const Guilds: React.FC<GuildsProps> = ({guilds}: GuildsProps) => {
  return (
    <>
      {guilds.map((guild, idx) => (
        <Components.GuildPreview key={idx} {...guild} />
      ))}
    </>
  );
};

export default Guilds;
