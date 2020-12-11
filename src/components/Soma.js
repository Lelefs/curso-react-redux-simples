import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

function Soma({ numeros }) {
  const { min, max } = numeros;

  return (
    <Card title="Soma dos Números" cor="Blue">
      <div>
        <span>
          <span>Resultado:</span>
          <strong> {max + min}</strong>
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

export default connect(mapStateToProps)(Soma);
