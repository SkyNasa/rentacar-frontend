import { Fragment } from 'react';

import { toAbsoluteUrl } from '@/utils/Assets';
import { Container } from '@/components/container';

import { ProfileDefaultContent } from '.';

const Device = () => {
  const image = (
    <img
      src={toAbsoluteUrl('/media/avatars/300-1.png')}
      className="rounded-full border-3 border-success size-[100px] shrink-0"
    />
  );

  return (
    <Fragment>
      <Container>
        <h3 className="font-bold text-xl text-gray-800">Device List</h3>

        <ProfileDefaultContent />
      </Container>
    </Fragment>
  );
};

export { Device };
