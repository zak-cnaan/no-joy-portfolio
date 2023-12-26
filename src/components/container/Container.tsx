import React from 'react'
import css from './style.module.css'

function Container(props: {children: React.ReactNode, className?: string}){
    return <div className={css.container + " " + props.className}>{props.children}</div>
}

export default Container