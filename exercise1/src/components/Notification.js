import React from 'react'
import styles from './Notification.module.css'

export default function Notification(props) {
    return (
        <div className = {styles.noti}>
            <span className = {styles.topic}> {props.topic}: </span> {props.content}
            {/* <span className = {styles.topic}> {props.data.topic}: </span> {props.data.content} */}
        </div>
    )
}
