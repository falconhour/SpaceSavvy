import React, { Component } from "react";

import "./Footer.scss";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <footer className='container footer'>
                    <p>Copyright 2019 Space Savvy</p>
            </footer>
        );
    }
}

export default Footer;