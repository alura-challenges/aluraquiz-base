import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import Widget from '../../components/Widget'
import plant from '../../effects/plant.mp3';

export default function LoadingWidget() {

  return (
    <Widget>
      <Widget.Header>
        <h2>
          Loading...
        </h2>
      </Widget.Header>
      <Widget.Content>
        <p>Tenha paciência</p>
      </Widget.Content>
    </Widget>
  );
}