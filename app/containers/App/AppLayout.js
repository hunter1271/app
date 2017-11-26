import React from 'react';
import { compose, pure } from 'recompose';

import Layout from 'components/Layout';

function AppLayout() {
  return (
    <Layout>
      <p>Page with default app layout</p>
    </Layout>
  );
}

export default compose(pure)(AppLayout);
