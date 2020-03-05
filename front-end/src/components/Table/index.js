import React, { Component } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';


class Table extends Component {
  render() {

    const { autores, removeAutor } = this.props;

    return (
      <table>
        <TableHead />
        <TableBody autores = {autores} removeAutor= {removeAutor}/>
      </table>
    );
  }
}

export default Table;