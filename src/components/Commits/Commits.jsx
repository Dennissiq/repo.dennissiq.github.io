import React, { Component } from 'react';
import moment from 'moment'
import 'moment/locale/pt-br'
import 'moment/locale/en-ie'

export default class Commits extends Component {

    constructor(props) {
        super(props);

        this.state = {
            locale: 'pt-br',
            messages: [],
            filteredCommits: '',
            search: 'commit not found :/',
        }

    }

    componentDidMount() {
        this.setState({ locale: localStorage.getItem('languageCode') })
    }

    render() {
        let commits;
        if (this.props.commitFilter) {
            commits = this.props.commitFilter.map(res => {
                return (
                    <div className="container-fluid pt-2" key={res.sha}>
                        <div className="row shadow-card rounded">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1 p-4 invisible-mobile">
                                        <img src={res.author === null ? 'https://bit.ly/2P7sqr8' : res.author.avatar_url} alt="" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-11 pt-3">
                                        <div className="row">
                                            <div className="col-12">
                                                <h3 className="invisible-mobile">"{res.commit.message}"</h3>
                                                <h6 className="invisible-desktop">"{res.commit.message}"</h6>
                                                <h5 className="text-gray text-lowercase invisible-mobile">{res.commit.author.name} commited {moment(res.commit.committer.date).locale(this.state.locale).startOf().fromNow()}</h5>
                                                <h6 className="text-gray text-lowercase invisible-desktop">{res.commit.author.name} commited {moment(res.commit.committer.date).locale(this.state.locale).startOf().fromNow()}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            });
        }
        return (
            <div>
                <div>
                    {commits.length !== 0 ? commits : this.state.search}
                </div>
            </div>
        )
    }
}
