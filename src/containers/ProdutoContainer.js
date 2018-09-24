import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProdutoContainer extends Component {
  render() {
    let cervejas = [
      {
        nome: 'AAA',
        preco: '10',
        tipo: 'XX',
        alcool: '5%',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor eu nunc aliquet blandit. Nullam consequat diam in magna egestas, at consequat tellus accumsan. Duis vehicula id metus et ornare. Sed eget egestas leo. Quisque hendrerit enim a tellus sodales, in lobortis nulla consequat. Quisque consectetur urna ligula, sed iaculis nunc scelerisque eget. Sed condimentum felis eu efficitur hendrerit. Nulla facilisi. Cras ac ex arcu.',
        volume: '600ml',
        img: 'http://via.placeholder.com/350.png'
      },
      {
        nome: 'BBB',
        preco: '11',
        tipo: 'XX',
        alcool: '6%',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor eu nunc aliquet blandit. Nullam consequat diam in magna egestas, at consequat tellus accumsan. Duis vehicula id metus et ornare. Sed eget egestas leo. Quisque hendrerit enim a tellus sodales, in lobortis nulla consequat. Quisque consectetur urna ligula, sed iaculis nunc scelerisque eget. Sed condimentum felis eu efficitur hendrerit. Nulla facilisi. Cras ac ex arcu.',
        volume: '600ml',
        img: 'http://via.placeholder.com/350.png'
      },
      {
        nome: 'CCC',
        preco: '12',
        tipo: 'XX',
        alcool: '7%',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor eu nunc aliquet blandit. Nullam consequat diam in magna egestas, at consequat tellus accumsan. Duis vehicula id metus et ornare. Sed eget egestas leo. Quisque hendrerit enim a tellus sodales, in lobortis nulla consequat. Quisque consectetur urna ligula, sed iaculis nunc scelerisque eget. Sed condimentum felis eu efficitur hendrerit. Nulla facilisi. Cras ac ex arcu.',
        volume: '600ml',
        img: 'http://via.placeholder.com/350.png'
      },
      {
        nome: 'DDD',
        preco: '13',
        tipo: 'XX',
        alcool: '8%',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor eu nunc aliquet blandit. Nullam consequat diam in magna egestas, at consequat tellus accumsan. Duis vehicula id metus et ornare. Sed eget egestas leo. Quisque hendrerit enim a tellus sodales, in lobortis nulla consequat. Quisque consectetur urna ligula, sed iaculis nunc scelerisque eget. Sed condimentum felis eu efficitur hendrerit. Nulla facilisi. Cras ac ex arcu.',
        volume: '600ml',
        img: 'http://via.placeholder.com/350.png'
      },
      {
        nome: 'EEE',
        preco: '14',
        tipo: 'XX',
        alcool: '9%',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor eu nunc aliquet blandit. Nullam consequat diam in magna egestas, at consequat tellus accumsan. Duis vehicula id metus et ornare. Sed eget egestas leo. Quisque hendrerit enim a tellus sodales, in lobortis nulla consequat. Quisque consectetur urna ligula, sed iaculis nunc scelerisque eget. Sed condimentum felis eu efficitur hendrerit. Nulla facilisi. Cras ac ex arcu.',
        volume: '600ml',
        img: 'http://via.placeholder.com/350.png'
      },
      {
        nome: 'FFF',
        preco: '15',
        tipo: 'XX',
        alcool: '10%',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor eu nunc aliquet blandit. Nullam consequat diam in magna egestas, at consequat tellus accumsan. Duis vehicula id metus et ornare. Sed eget egestas leo. Quisque hendrerit enim a tellus sodales, in lobortis nulla consequat. Quisque consectetur urna ligula, sed iaculis nunc scelerisque eget. Sed condimentum felis eu efficitur hendrerit. Nulla facilisi. Cras ac ex arcu.',
        volume: '600ml',
        img: 'http://via.placeholder.com/350.png'
      }
    ];

    let styles = {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center"
    }
    let cardStyles = this.props.browser.lessThan.small ?
    {
      width: "100%"
    } :
    this.props.browser.lessThan.medium ?
      {
        width: "50%"
      } : {
        width: "25%"
      }
    let headerStyles = {
      padding: "10px"
    }
    let descriptionStyles = {
      padding: "10px"
    }
    return (
      <div className="ProdutoContainer" style={styles}>
        {cervejas.map((cerveja, i) => {
          return (
            <div className="ProdutoCard" style={cardStyles} >
              <div className="ProdutoCard-header" style={headerStyles}>
                <img src={cerveja.img} style={{maxWidth: "100%"}}/>
              </div>
              <div className="ProdutoCard-description" style={descriptionStyles}>
                <span>Nome: {cerveja.nome}</span>
              </div>
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
