import React, { Component } from 'react';
import { githubApi } from "../../utils/api"
import moment from 'moment'
import 'moment/locale/pt-br'
import 'moment/locale/en-ie'
import { Link } from 'react-router-dom';

import { withLocalize, Translate } from "react-localize-redux";
import { ChangeLang } from '../Lang/ChangeLang';
import home from '../../utils/language/resource/home';


class Projects extends Component {


    constructor(props) {
        super(props);
        // this._changeLang = new ChangeLang(props, home);

        this.state = {
            locale: 'pt-br',
            dateFormat: 'DD/MM/YYYY HH:MM',
            repositories: {
                items: []
            },
            commits: [],
            messages: [],
            filteredCommits: ''
        }

        // translate
        this._changeLang = new ChangeLang(props, home);

        // bind the functions
        this.searchOnCommits = this.searchOnCommits.bind(this);
    }

    // load repositories
    componentDidMount() {
        githubApi.get("/search/repositories?q=user:dennissiq&sort=updated&order=desc")
            .then(res => {
                const repositories = res.data;
                this.setState({ repositories });
                console.log(this.state.repositories)
            })           
    }

    // search commits on input change
    searchOnCommits = (e) => {
        this.setState({ filteredCommits: e.target.value})
    }

    render() {
        return (
            <div className="ml-5">
                <div className="row" style={{marginRight: '0px'}}>
                    <div className="col-12 pt-10">
                    {/* <Animated animationInDuration={3500}> */}
                        <h1 className="text-left title-big text-spaced invisible-mobile"><Translate id="projects.title" /></h1>
                        <h3 className="text-left text-center text-spaced invisible-desktop"><Translate id="projects.title" /></h3>
                    {/* </Animated> */}
                        <div className="container-fluid">
                            <div className="row">
                            { this.state.repositories.items.map(repository => 
                                <div className="col-12 pt-4 mb-3 col-sm-12 col-md-6 col-lg-6 col-xl-3" key={repository.id} >
                                    <Link to={`/project/${repository.name}`} className="a-link">
                                        <div className="row shadow-card rounded mr-2">
                                            <div className="p-4 col-12 card-link">
                                                <h4 className="text-center text-lowercase pb-4 a-primary">{repository.name.substring(0, 15)}</h4>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h6 className="text-normal"><i className=" text-primary far fa-clock pr-1"></i> <span className="text-spaced-min"><Translate id="projects.cardInfo.lastUpdate"/></span>{moment(repository.updated_at).format(this.state.dateFormat)}</h6>
                                                    </div>
                                                    {/* <div className="col-12 pt-2">
                                                        <h6 className="text-normal"><i className=" text-primary fab fa-github pr-1"></i> <span className="text-spaced-min">COMMITS:</span></h6>
                                                    </div> */}
                                                    <div className="col-12 pt-2">
                                                        <h6 className="text-normal"><i className=" text-primary fas fa-hourglass-start pr-1"></i> <span className="text-spaced-min"><Translate id="projects.cardInfo.createdAt" /></span> {moment(repository.created_at).format(this.state.dateFormat)}</h6>
                                                    </div>
                                                    <div className="col-12 pt-2">
                                                        {/* just kidding, because my repositories are with 0 stars  ¯\_(ツ)_/¯ */}
                                                        <h6 className="text-normal"><i className=" text-primary fas fa-star pr-1"></i> <span className="text-spaced-min">STARS:</span> {repository.size}</h6>
                                                        {/* <p className="text-gray capitalize-txt"><i className="fas fa-map-marker-alt"></i> {offer.address.split(" ").splice(0, 3).join(" ")}</p> */}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 p-3">
                                                        <span className="mr-2 badge badge-primary">{repository.language}</span>
                                                        {/* <span className="mr-2 badge badge-primary">java</span>
                                                        <span className="mr-2 badge badge-primary">node.js</span>
                                                        <span className="mr-2 badge badge-primary">c#</span>  */}
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                 )} 
                                
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-12 pt-10 pb-20 mb-5" style={{display: this.state.showCommits}}>
                        <h1 className="text-left title-big text-spaced text-lowercase">project</h1>
                        <h2 className="text-left text-spaced text-lowercase pb-5"><i className="fas fa-chevron-left a-primary" onClick={this.backToProjects}></i> {this.state.repoName.substring(0, 25)}
                            <input type="text" className="text-primary ml-5 bg-input" placeholder="click to search" value={this.state.filteredCommits} onChange={this.searchOnCommits} />
                        </h2>
                        <Commits commitFilter={this.state.commits.filter((messageSearch) => {return messageSearch.commit.message.toLowerCase().indexOf(this.state.filteredCommits.toLowerCase()) !== -1;})}/>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default withLocalize(Projects);
