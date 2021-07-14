import React from 'react'
import styleFooter from './footer.module.scss'

export const Footer = () => {
    return (
        <div className={styleFooter.container}>
            <div className={styleFooter.link}>
                {/*TODO: add facebook twitter instagram links*/}
                <a href="www.facebook.com" className={styleFooter.facebook}><i class="fab fa-facebook-square"/></a>
                <a href="www.instagram.com" className={styleFooter.instagram}><i class="fab fa-instagram"></i></a>                
                <a href="www.twitter.com" className={styleFooter.twitter}><i class="fab fa-twitter-square"></i></a>
                <a href="www.github.com" className={styleFooter.github}><i class="fab fa-github-square"></i></a>
                <a href="www.linkedin.com" className={styleFooter.linkedin}><i class="fab fa-linkedin"></i></a>
            </div>

            <div className={styleFooter.copyright}>
                <span>Copyright © 2021 Mehddeb Bruno </span>
                <span>All rights reserved.</span>
            </div>
        </div>
    )
}
