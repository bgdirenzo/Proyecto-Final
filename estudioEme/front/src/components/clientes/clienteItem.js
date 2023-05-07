import React from 'react';

const ClienteItem = (props) => {
    const { name, cuit, email } = props;

    return (
        <div className='clientes'>
            <p>{name}</p>
            <p>{cuit}</p>
            <p>{email}</p>
            {/* <div dangerouslySetInnerHTML={{ __html: body }} /> */}
            <hr />
        </div>);
}

export default ClienteItem;