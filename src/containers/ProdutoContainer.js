import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProdutoContainer extends Component {
  render() {
    // let message = `PRODUTO - The viewport's current media type is: ${this.props.browser.mediaType}.`

    // if (this.props.browser.lessThan.small) {
    //     message += 'Secret message for viewports smaller than than the "small" breakpoint!'
    // } else if (this.props.browser.lessThan.medium) {
    //     message += 'Secret message for viewports between the "small" and "medium" breakpoints!'
    // } else {
    //     message += 'Message for viewports greater than the "medium" breakpoint.'
    // }
    let cervejas = [
      {
        nome: 'AAA',
        preco: '10',
        tipo: 'XX',
        alcool: '5%',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor eu nunc aliquet blandit. Nullam consequat diam in magna egestas, at consequat tellus accumsan. Duis vehicula id metus et ornare. Sed eget egestas leo. Quisque hendrerit enim a tellus sodales, in lobortis nulla consequat. Quisque consectetur urna ligula, sed iaculis nunc scelerisque eget. Sed condimentum felis eu efficitur hendrerit. Nulla facilisi. Cras ac ex arcu.',
        volume: '600ml',
        img: 'http://via.placeholder.com/350x150'
      },
      {
        nome: 'BBB',
        preco: '11',
        tipo: 'XX',
        alcool: '6%',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor eu nunc aliquet blandit. Nullam consequat diam in magna egestas, at consequat tellus accumsan. Duis vehicula id metus et ornare. Sed eget egestas leo. Quisque hendrerit enim a tellus sodales, in lobortis nulla consequat. Quisque consectetur urna ligula, sed iaculis nunc scelerisque eget. Sed condimentum felis eu efficitur hendrerit. Nulla facilisi. Cras ac ex arcu.',
        volume: '600ml',
        img: 'http://via.placeholder.com/350x150'
      },
      {
        nome: 'CCC',
        preco: '12',
        tipo: 'XX',
        alcool: '7%',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor eu nunc aliquet blandit. Nullam consequat diam in magna egestas, at consequat tellus accumsan. Duis vehicula id metus et ornare. Sed eget egestas leo. Quisque hendrerit enim a tellus sodales, in lobortis nulla consequat. Quisque consectetur urna ligula, sed iaculis nunc scelerisque eget. Sed condimentum felis eu efficitur hendrerit. Nulla facilisi. Cras ac ex arcu.',
        volume: '600ml',
        img: 'http://via.placeholder.com/350x150'
      },
      {
        nome: 'DDD',
        preco: '13',
        tipo: 'XX',
        alcool: '8%',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor eu nunc aliquet blandit. Nullam consequat diam in magna egestas, at consequat tellus accumsan. Duis vehicula id metus et ornare. Sed eget egestas leo. Quisque hendrerit enim a tellus sodales, in lobortis nulla consequat. Quisque consectetur urna ligula, sed iaculis nunc scelerisque eget. Sed condimentum felis eu efficitur hendrerit. Nulla facilisi. Cras ac ex arcu.',
        volume: '600ml',
        img: 'http://via.placeholder.com/350x150'
      },
      {
        nome: 'EEE',
        preco: '14',
        tipo: 'XX',
        alcool: '9%',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor eu nunc aliquet blandit. Nullam consequat diam in magna egestas, at consequat tellus accumsan. Duis vehicula id metus et ornare. Sed eget egestas leo. Quisque hendrerit enim a tellus sodales, in lobortis nulla consequat. Quisque consectetur urna ligula, sed iaculis nunc scelerisque eget. Sed condimentum felis eu efficitur hendrerit. Nulla facilisi. Cras ac ex arcu.',
        volume: '600ml',
        img: 'http://via.placeholder.com/350x150'
      },
      {
        nome: 'FFF',
        preco: '15',
        tipo: 'XX',
        alcool: '10%',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor eu nunc aliquet blandit. Nullam consequat diam in magna egestas, at consequat tellus accumsan. Duis vehicula id metus et ornare. Sed eget egestas leo. Quisque hendrerit enim a tellus sodales, in lobortis nulla consequat. Quisque consectetur urna ligula, sed iaculis nunc scelerisque eget. Sed condimentum felis eu efficitur hendrerit. Nulla facilisi. Cras ac ex arcu.',
        volume: '600ml',
        img: 'http://via.placeholder.com/350x150'
      }
    ];

    let styles = {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center"
    }
    return (
      <div className="ProdutoContainer" style={styles}>
        {cervejas.map((cerveja, i) => {
          return (
            <div className="ProdutoCard">
              <img src={cerveja.img}/>
              {/*<ul>
                <li>Nome: {cerveja.nome}</li>
                <li>Preço: {cerveja.preco}</li>
                <li>Tipo: {cerveja.tipo}</li>
                <li>Alcool: {cerveja.alcool}</li>
                <li>Descrição: {cerveja.descricao}</li>
                <li>Volume: {cerveja.volume}</li>
              </ul>*/}
            </div>
          )
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.auth.email,
    browser: state.browser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProdutoContainer));
