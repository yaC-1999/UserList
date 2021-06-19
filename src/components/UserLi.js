import { render } from '@testing-library/react';
import React from 'react';

const renderUsers = users.map( ({id, name})=>{
    return <li key={id}>{name}</li>;
});

return (
    <ul>
        {renderUsers}
    </ul>
)