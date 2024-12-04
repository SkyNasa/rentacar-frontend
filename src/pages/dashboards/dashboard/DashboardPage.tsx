import { Fragment } from 'react';

import { Container } from '@/components/container';
import { Toolbar, ToolbarHeading } from '@/layouts/demo1/toolbar';

import { DashboardContent } from '.';

const DashboardPage = () => {
  return (
    <Fragment>
      <Container>
        <Toolbar>
          <ToolbarHeading title="Dashboard" description="Dashboard / Dashboard" />
        </Toolbar>
      </Container>

      <Container>
        <DashboardContent />
      </Container>
    </Fragment>
  );
};

export { DashboardPage };
