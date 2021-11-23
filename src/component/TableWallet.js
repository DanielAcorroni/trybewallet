import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableWallet extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Valor convertido</th>
            <th>Moeda</th>
            <th>Moeda de conversão</th>
            <th>Método de pagamento</th>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Câmbio utilizado</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense) => {
              console.log(expense);
              let totalValue = 0;
              const { exchangeRates, currency, value } = expense;
              const actualExchange = exchangeRates[currency];
              const { ask, name } = actualExchange;
              const separateName = name.split('/');
              totalValue += (Number(value) * ask);
              return (
                <tr key={ expense.id }>
                  <td role="cell">{ totalValue.toFixed(2) }</td>
                  <td role="cell">{ expense.value }</td>
                  <td role="cell">{ separateName[0] }</td>
                  <td role="cell">{ expense.method }</td>
                  <td role="cell">{ expense.description }</td>
                  <td role="cell">{ expense.tag }</td>
                  <td role="cell">{ Number(ask).toFixed(2) }</td>
                  <td role="cell">Real</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

TableWallet.defaultProps = {
  expenses: [],
};

TableWallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
};

function mapStateToProps(state) {
  const { wallet: { expenses } } = state;
  return {
    expenses,
    state,
  };
}

export default connect(mapStateToProps, null)(TableWallet);
