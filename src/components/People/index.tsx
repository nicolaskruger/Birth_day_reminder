import React from 'react'
import { IPeople } from '../../app/People'


const People = ({ name, age, img }: IPeople) => (
    <div>
        <img src={img} alt={name} />
        <div>
            <h2>{name}</h2>
            <h3>{age}</h3>
        </div>
    </div>
)

export { People };