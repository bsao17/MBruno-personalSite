import React from 'react'
import styleFooter from './footer.module.scss'

export const Footer = () => {
    return (
        <div className={styleFooter.footer}>
            <div className={styleFooter.container}>

{/* 3 Columns */}
                <div class="row row-cols-2">
                    <div className="d-flex flex-column justify-content-center align-items-center text-light pt-3">
                        <img src="images/logo/mb.png" className={styleFooter.logo} alt="Logo Mehddeb Bruno"/>
                        <code className="text-info ">v1.0.1</code>
                    </div>
                    <div className="text-center text-light pt-3">
                        <div className="fw-bold ">mehddebbruno.com <br/> <code className="text-info fw-light">freelance-developer</code>
                        </div>
                        <div>
                            <span
                                className="fw-bold text-decoration-underline">Email
                            </span> : <a
                                className={styleFooter.mailto}
                                href="mailto:contact@mehddebbruno.com">contact@mehddebbruno.com</a>
                        </div>
                        <div><span className="fw-bold text-decoration-underline">Phone</span> : +33(0)7 52 07 30 25</div>
                    </div>

                </div>

{/* Row links social network*/}
                <div className={styleFooter.socialLink}>
                    <a href="https://www.facebook.com/devwebdino" className={styleFooter.facebook}><i
                        className="fab fa-facebook-square"/></a>
                    <a href="https://www.instagram.com" className={styleFooter.instagram}><i
                        className="fab fa-instagram"/></a>
                    <a href="https://www.twitter.com" className={styleFooter.twitter}><i
                        className="fab fa-twitter-square"/></a>
                    <a href="https://github.com/bsao17" className={styleFooter.github}><i
                        className="fab fa-github-square"/></a>
                    <a href="https://www.linkedin.com/in/bruno-mehddeb-1349111a3/" className={styleFooter.linkedin}>
                        <i className="fab fa-linkedin"/></a>
                </div>

                <div className={styleFooter.copyright}>
                    <span>Copyright © 2021 Mehddeb Bruno </span>
                    <span>All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}
