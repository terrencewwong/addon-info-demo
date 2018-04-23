import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button, { ExportConstButton, NamedExportButton } from '../Button'

storiesOf('Button', module)
  .add('default', withInfo({
    header: false,
    inline: true,
    source: false
  })(() => (
    <div>
      <Button>Hello Button</Button>
      <ExportConstButton>Hello MyButton</ExportConstButton>
      <NamedExportButton>Hello MyButton</NamedExportButton>
    </div>
  )))
