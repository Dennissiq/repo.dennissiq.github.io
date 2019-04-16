import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import { withLocalize, Translate } from "react-localize-redux";
import LanguageToggle from '../Lang/LanguageToggle'
import { ChangeLang } from '../Lang/ChangeLang';
import home from '../../utils/language/resource/home.json';


class HeaderHome extends Component {

    constructor(props) {
        super(props);

        this._changeLang = new ChangeLang(props, home);

        this.state = {
            animateText: false,
            showText: 'none'
        }

        // bind the functions
        this.handleScroll = this.handleScroll.bind(this);
    }

    // watch the scroll
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    // show the brand name
    handleScroll = () => {
        if (window.pageYOffset > 400){
            this.setState({
                animateText: true,
                showText: 'block'
            })
        } else {
            this.setState({
                animateText: false
            })
        }
    }

    componentDidUpdate(prevProps) {
        const prevLangCode =
            prevProps.activeLanguage && prevProps.activeLanguage.code;
        const curLangCode =
            this.props.activeLanguage && this.props.activeLanguage.code;

        const hasLanguageChanged = prevLangCode !== curLangCode;

        if (hasLanguageChanged) {
            localStorage.setItem("languageCode", curLangCode);
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark navbar-custom-white no-p fixed-top">
                    <Animated isVisible={this.state.animateText} >
                        <a className="a-primary invisible-mobile" href="#home" >
                            <h4 className="pl-5 ml-2 mt-2 mb-2 pt-3 pb-3" style={{display: this.state.showText}}>dennis siqueira</h4>
                        </a>
                    </Animated>
                    <div className="collapse navbar-collapse float-right pt-3 pb-3 mt-3 invisible-mobile">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item active ">
                                <a className="a-primary" href="#home">
                                    <h6 className="text-spaced">HOME</h6>
                                </a> 
                            </li>
                        {/*<li className="nav-item ml-4 ">
                                <h6 className="text-dark text-spaced">ABOUT</h6>
                            </li> */}
                            <li className="nav-item ml-4 ">
                                <a className="a-primary" href="#projects">
                                    <h6 className="text-spaced"><Translate id="home.header.projects"/></h6>
                                </a>
                            </li>
                            {/* <li className="nav-item ml-4 ">
                                <a className="a-primary" href="#contact">
                                    <h6 className="text-spaced">CONTACT</h6>
                                </a>
                            </li> */}
                            {/* <li className="nav-item ml-4 mr-10">
                                <h6 className="a-primary text-spaced"><span className="text-primary">EN</span>/<span>PT</span></h6>
                            </li> */}
                            <LanguageToggle/>
                        </ul>
                    </div>
                </nav>
                    <div className="container fixed-top bg-white invisible-desktop p-3">
                        <div className="row p-2">
                            <div className="col-4 text-center">
                            <a className="a-primary" href="#home">
                                <h6 className="text-spaced">HOME</h6>
                            </a> 
                            </div>
                            <div className="col-4 text-center">
                                <a className="a-primary" href="#projects">
                                    <h6 className="text-spaced"><Translate id="home.header.projects" /></h6>
                                </a>
                            </div>
                            <div className="col-4 text-center">
                            <LanguageToggle />
                            </div>
                        </div>
                    </div> 
            </div>
        );
    }
}

export default withLocalize(HeaderHome);
