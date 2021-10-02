import React from 'react'
import styles from './Header.module.css'
import logo from '../img/hth.png'

export default function Header() {
    let url = logo
    return (
        <div className = {styles.header}>
            <div className = {styles.header_logo}>
                <img className = {styles.header_logo_img} src={url} />
            </div>
            <div className = {styles.header_navbar_list}>
                <ul className = {styles.header_navbar_list}>
                    <li className = {styles.header_navbar_item}>
                        <a href="">BUSINESS</a>
                        <ul className = {styles.header_navbar_hover}>
                            <li><a href="">Business1</a></li>
                            <li><a href="">Business2</a></li>
                        </ul>
                    </li>
                    <li className = {styles.header_navbar_item}>
                        <a href="">TECHNICAL</a>
                        <ul className = {styles.header_navbar_hover}>
                            <li><a href="">Tech1</a></li>
                            <li><a href="">Tech2</a></li>
                        </ul>
                    </li>
                    <li className = {styles.header_navbar_item}>
                        <a href="">SPORT</a>
                        <ul className = {styles.header_navbar_hover}>
                            <li><a href="">Sport1</a></li>
                            <li><a href="">Sport2</a></li>
                        </ul>
                    </li>
                    <li className = {styles.header_navbar_item}>
                        <a href="">ART</a>
                        <ul className = {styles.header_navbar_hover}>
                            <li><a href="">Art1</a></li>
                            <li><a href="">Art2</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
