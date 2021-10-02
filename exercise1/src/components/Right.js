import React from 'react'
import styles from './Right.module.css'

export default function Right(props) {
    return (
        <div className = {styles.right}>
            <div className = {styles.topic}> {props.topic} </div>
            <div className = {styles.content}> {props.content} </div>
        </div>
    )
}
