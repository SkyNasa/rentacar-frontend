import { Fragment } from 'react';

import { toAbsoluteUrl } from '@/utils/Assets';
import { Container } from '@/components/container';

import { MaintenancePage } from '.';

const Maintenance = () => {
  const image = (
    <img
      src={toAbsoluteUrl('/media/avatars/300-1.png')}
      className="rounded-full border-3 border-success size-[100px] shrink-0"
    />
  );

  return (
    <Fragment>
      <Container>
        <MaintenancePage />
      </Container>
    </Fragment>
  );
};

export { Maintenance };