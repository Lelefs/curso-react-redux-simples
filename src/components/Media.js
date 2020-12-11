import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

function Media({ numeros }) {
  const { min, max } = numeros;

  return (
    <Card title="Média dos Números" cor="Green">
      <div>
        <span>
          <span>Resultado:</span>
          <strong> {(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    numeros: state.numeros,
  };
}

export default connect(mapStateToProps)(Media);
