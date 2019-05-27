import React, { Component } from 'react';
import './FlightLink.scss'
import { Button } from 'react-bootstrap';

const flightLinkTypes = [
    {
        type: 'redditCampaign',
        linkLabel: 'Reddit Campaign'
    },
    {
        type: 'redditLaunch',
        linkLabel: 'Reddit Launch'
    },
    {
        type: 'redditMedia',
        linkLabel: 'Reddit Media'
    },
    {
        type: 'articleLink',
        linkLabel: 'Article'
    },
    {
        type: 'videoLink',
        linkLabel: 'Watch Video'
    },
    {
        type: 'presskit',
        linkLabel: 'Press Kit'
    },
    {
        type: 'wikipedia',
        linkLabel: 'Wiki'
    }
]

function checkFlightLinks(flightLinks){
    var links = [];
    flightLinkTypes.map(linkType => {
        if(flightLinks.hasOwnProperty(linkType.type))
            links.push({
                linkLabel: linkType.linkLabel,
                url: flightLinks[linkType.type]
            });
    });
    return links;
}

class FlightLink extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const flightLinks = this.props.flightLinks;
        const links = checkFlightLinks(flightLinks);
        return (
            <React.Fragment>
                {links.map(link => {
                    return <Button variant='outline-secondary' className='flight-link'
                        href={link.url}
                        >
                        {link.linkLabel}
                    </Button>
                })}
            </React.Fragment>
        );
    }
}

export default FlightLink;