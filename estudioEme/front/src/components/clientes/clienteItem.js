import React from 'react';

const ClienteItem = (props) => {
    const { name, cuit, email } = props;

    return (
        <div className='row'>
            <div className='clientes'>
                <h4>{name}</h4>
                <p>{cuit}</p>
                <p>{email}</p>
                {/* <div dangerouslySetInnerHTML={{ __html: body }} /> */}
            </div>
            <hr />
        </div>
    );
}

export default ClienteItem;