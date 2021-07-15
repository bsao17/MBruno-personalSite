import React from 'react'
import styleFooter from './footer.module.scss'

export const Footer = () => {
    return (
        <div className={styleFooter.footer}>
            <div className={styleFooter.container}>
                <div className={styleFooter.link}>
                    {/*TODO: add facebook twitter instagram links*/}
                    <a href="https://www.facebook.com/devwebdino" className={styleFooter.facebook}><i className="fab fa-facebook-square"/></a>
                    <a href="https://www.instagram.com" className={styleFooter.instagram}><i className="fab fa-instagram"/></a>
                    <a href="https://www.twitter.com" className={styleFooter.twitter}><i className="fab fa-twitter-square"/></a>
                    <a href="https://github.com/bsao17" className={styleFooter.github}><i className="fab fa-github-square"/></a>
                    <a href="https://www.linkedin.com/in/bruno-mehddeb-1349111a3/" className={styleFooter.linkedin}><i className="fab fa-linkedin"></i></a>
                </div>

                <div className={styleFooter.copyright}>
                    <span>Copyright © 2021 Mehddeb Bruno </span>
                    <span>All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}
