import React from 'react'
import styles from './Left.module.css'
import logo from '../img/biden.jpg'

export default function Left() {
    let url = logo
    return (
        <div className = {styles.left}>
            <div className = {styles.tag}>
                HOT NEW
            </div>
            <div className = {styles.picture}>
                <img className = {styles.img} src={url} />
            </div>
            <div className = {styles.tittle}>
                Biden administration sues Texas over restrictive abortion law
            </div>
            <div className = {styles.content}>
                The US Department of Justice has filed a civil lawsuit challenging Texas' controversial abortion law.
                "The act is clearly unconstitutional," Attorney General Merrick Garland said at a briefing on Thursday.
                It bans abortions from as early as six weeks into pregnancy and allows anyone to sue those involved in the procedure.
                Doctors and women's rights groups have strongly condemned the law, which took effect last week after the Supreme Court failed to block it.
                SB8, also known as the Texas Heartbeat Act, came into effect last week after the Supreme Court did not respond to an emergency appeal filed by abortion providers.
                In an unsigned opinion, the court said that although the appeals had raised "serious questions" about the constitutionality of the law, it could not block it due to complex and "novel" procedural questions.
            </div>
        </div>
    )
}
