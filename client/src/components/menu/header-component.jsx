import React from 'react'

import { Container } from '../Container'

const Cabecalho = (props) => {
    return (
      <Container>
          <h2  className="text-center">
              <strong>{props.title} | </strong> 
                
              <small>{props.description}</small>
            </h2>
      </Container>
    )
}

export default Cabecalho
