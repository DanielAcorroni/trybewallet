import React from 'react';

class TableWallet extends React.Component {
  render() {
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
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TableWallet;
