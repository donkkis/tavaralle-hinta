import React from 'react'

const ListView = ({ phones }) => (
    <div>
        {phones.map(p => <p key={p.id}>{p.title} {p.price}</p>)}
    </div>
)

export default ListView