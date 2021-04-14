import React from 'react'
import { IPeople } from '../../app/People'
import './style.css'

const People = ({ name, age, img }: IPeople) => (
    <div className="people__main__div">

        <img className="people__img" src={img} alt={name} />
        <div className="people__div">
            <h2 className="people__name" >{name}</h2>
            <h3 className="people__age">{age} years</h3>
        </div>
    </div>
)

export { People };