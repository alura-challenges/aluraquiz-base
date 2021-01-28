import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import Widget from '../../components/Widget'
import plant from '../../effects/plant.mp3';

export default function ResultWidget() {

  return (
    <Widget>
      <Widget.Header>
        <h2>
          Resultado
        </h2>
      </Widget.Header>
      <Widget.Content>
        <p>Você acertou x questões</p>
      </Widget.Content>
    </Widget>
  );
}