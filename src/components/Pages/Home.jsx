import React, { Component } from 'react';
import dennis from '../../img/dennis.png';
import { Animated } from "react-animated-css";

class Home extends Component {

    render() {
        return (
            <div>
                <div className="row invisible-mobile" style={{marginRight: '0px'}} >
                    <div className="col-4 pt-20">
                    <Animated animationIn="fadeInLeft" animationInDuration={2000}>
                        <img src={dennis} alt="" className="img-fluid" srcSet=""/>
                    </Animated>
                    </div>
                    <div className="col-5 pt-30">
                    <Animated animationInDuration={3500}>
                        <h1 className="text-center title-big text-spaced">dennis siqueira</h1>
                    </Animated>
                        <h5 className="text-center subtitle-spaced animation-title">FRONTEND DEVELOPER</h5>
                    </div>
                </div>
                <div className="container invisible-desktop pt-10">                
                <div className="row">
                    <div className="col-12 ">
                    <Animated animationInDuration={3500}>
                            <h2 className="text-center text-spaced">dennis siqueira</h2>
                    </Animated>
                            <h6 className="text-center text-spaced animation-title" >FRONTEND DEVELOPER</h6>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Home;
