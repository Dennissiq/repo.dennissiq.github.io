import React, { Component } from 'react';
import { githubApi, repoUsername, commits } from "../../utils/api"

import Commits from '../Commits/Commits'
import HeaderPages from '../Headers/HeaderPages';
import { Link } from 'react-router-dom';

import { withLocalize, Translate } from "react-localize-redux";
import { ChangeLang } from '../Lang/ChangeLang';
import project from '../../utils/language/resource/project';



class Project extends Component {


    constructor(props) {
        super(props);

        this.state = {
            commits: [],
            repoName: '',
            messages: [],
            filteredCommits: ''
        }

        // translate
        this._changeLang = new ChangeLang(props, project);

        // bind the functions
        this.searchOnCommits = this.searchOnCommits.bind(this);
    }

    
    componentDidMount() {
        //load page scroll to the top after render 
        window.scrollTo(0, 0)

        // load commits
        let projectName = window.location.pathname.substring(9)
        let commitsEndpoint = repoUsername + projectName + commits;

        this.setState({repoName: projectName})

        githubApi.get(commitsEndpoint)
            .then(res => {
                const commits = res.data;
                this.setState({ commits });
                console.log(this.state.commits)
            })

            
    }
    // search commits on input change
    searchOnCommits = (e) => {
        this.setState({ filteredCommits: e.target.value})
    }



    render() {
        return (
            <div >
                <HeaderPages/>
                <div className="row ml-1" style={{marginRight: '0px'}} >
                    <div className="col-12 pt-10 pb-20 mb-5" style={{display: this.state.showCommits}}>
                        <h1 className="text-left title-big text-spaced text-lowercase invisible-mobile"><Translate id="project.title" /></h1>
                        <h3 className="text-center text-spaced text-lowercase invisible-desktop"><Translate id="project.title" /></h3>
                        <h2 className="text-left text-spaced text-lowercase pb-5 invisible-mobile">
                            <Link to="/">
                                <i className="fas fa-chevron-left a-primary"></i>
                            </Link>
                             {this.state.repoName.substring(0, 25)}
                            <Translate>
                                {({ translate }) => <input type="text" className="text-primary ml-5 bg-input" placeholder={translate("project.search")} value={this.state.filteredCommits} onChange={this.searchOnCommits} />}
                            </Translate>
                        </h2>
                        <h4 className="text-center text-spaced text-lowercase pb-5 invisible-desktop pt-5">
                            <Link to="/">
                                <i className="fas fa-chevron-left a-primary"></i>
                            </Link>
                             {this.state.repoName.substring(0, 25)}
                            <Translate>
                                {({ translate }) => <input type="text" className="text-primary bg-input text-center pt-3" placeholder={translate("project.search")} value={this.state.filteredCommits} onChange={this.searchOnCommits} />}
                            </Translate>
                            
                        </h4>
                        <Commits commitFilter={this.state.commits.filter((messageSearch) => {return messageSearch.commit.message.toLowerCase().indexOf(this.state.filteredCommits.toLowerCase()) !== -1;})}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withLocalize(Project);
