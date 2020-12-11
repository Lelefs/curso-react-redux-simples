import React from 'react';
import { connect } from 'react-redux';
import './Intervalo.css';

import Card from './Card';
import {
  alterarNumeroMaximo,
  alterarNumeroMinimo,
} from '../store/actions/numeros';

function Intervalo({ numeros, alterarMinimo, alterarMaximo }) {
  const { min, max } = numeros;

  return (
    <Card title="Intervalo de Números" cor="Red">
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={e => alterarMinimo(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={e => alterarMaximo(+e.target.value)}
          />
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

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },

    alterarMaximo(novoNumero) {
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
