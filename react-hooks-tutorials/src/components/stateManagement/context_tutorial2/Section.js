/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { LevelContext } from './LevelContext.js'

export default function Section({ children }) {
    const level = useContext(LevelContext)
    return (
        <section className="section">
            <p>The level is: {level}</p>
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    )
}
