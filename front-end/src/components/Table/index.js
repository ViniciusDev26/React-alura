import React, { Component } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';


class Table extends Component {
  render() {

    const { autores, removeAutor } = this.props;

    return (
      <table className="centered highlight z-depth-1">
        <TableHead />
        <TableBody autores = {autores} removeAutor= {removeAutor}/>
      </table>
    );
  }
}

export default Table;