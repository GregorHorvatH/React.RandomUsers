import React from 'react';
import './Footer.less';

const Footer = () => (
    <div className="row footer">
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>Gregory <span>Horvath</span></h3>

                <p className="footer-links">
                    <a href="#">Random users</a>
                </p>

                <p className="footer-company-name">Gregory Horvath &copy; 2017</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker" />
                    <p>
                        <span>address</span>
                        Kiev, Ukraine
                    </p>
                </div>

                <div>
                    <i className="fa fa-phone" />
                    <p>
                        <span>phone</span>
                        +38 (095) 8033-193
                    </p>
                </div>

                <div>
                    <i className="fa fa-envelope" />
                    <p>
                        <span>email</span>
                        <a href="mailto:gergely.gorvath@gmail.com">gergely.gorvath@gmail.com</a>
                    </p>
                </div>
            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About myself</span>
                    Hello. My name is Gregory Horvath, I am a JavaScript programmer.
                    My portfolio is gradually growing and becoming more interesting and professional with time.
                </p>

                <div className="footer-icons">
                    <a href="https://www.facebook.com/profile.php?id=100001910599983">
                        <i className="fa fa-facebook" />
                    </a>
                    <a href="https://www.linkedin.com/in/gergely-horv%C3%A1th-a71850b6">
                        <i className="fa fa-linkedin" />
                    </a>
                    <a href="https://github.com/GregorHorvatH/React.RandomUsers">
                        <i className="fa fa-github" />
                    </a>
                </div>
            </div>
        </footer>
    </div>
);

export default Footer;