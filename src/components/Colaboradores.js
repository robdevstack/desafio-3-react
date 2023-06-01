import React from 'react'
import Form from "./Form";

const Colaboradores = () => {
    const colaboradores = [
        { name: "Juan", email: "juan@gmail.com" },
        { name: "María", email: "maria@outlook.com" },
        { name: "Pedro", email: "pedro@hotmail.com" },
      ];

      return <Form colaboradores={colaboradores} />;

}


export default Colaboradores