import React from 'react';

const TableBody = props => {
  const rows = props.autores.map((autor, index) => {
    return(
      <tr key={index}>
          <td>{autor.nome}</td>
          <td>{autor.livro}</td>
          <td>{autor.preco}</td>
          <td><button onClick={() => {props.removeAutor(index)}}>Remover</button></td>
      </tr>
    );
  });

  return(
    <tbody>
      {rows}
    </tbody>
  );
}

export default TableBody;