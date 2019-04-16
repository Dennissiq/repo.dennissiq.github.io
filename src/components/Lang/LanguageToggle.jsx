// @flow
import React from 'react';
import { withLocalize } from 'react-localize-redux';


const LanguageToggle = ({setActiveLanguage }) => {
    return (
        <div>
            <li className="nav-item ml-4 mr-10 invisible-mobile">
                <h6 className="text-spaced" ><span className="a-primary" onClick={() => setActiveLanguage('en')}>EN</span>/<span className="a-primary" onClick={() => setActiveLanguage('pt-br')}>PT</span></h6>
            </li> 
            <h6 className="text-spaced invisible-desktop" ><span className="a-primary" onClick={() => setActiveLanguage('en')}>EN</span>/<span className="a-primary" onClick={() => setActiveLanguage('pt-br')}>PT</span></h6>
        </div> 
    );
};

export default withLocalize(LanguageToggle);