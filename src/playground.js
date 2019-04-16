import React from 'react';
import T from 'prop-types';

class Greeting extends React.Component {
    constructor(){
        super();
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    static propTypes = {
        onGoodbye: T.func.isRequired,
        name: T.string
    }

    static defaultProps = {
        name: 'Unknown'
    }

    _handleGoodbye = () => {
        this.props.onGoodbye(this.props.name);
    }

    render() {
        return (
            <div>
                <h2>
                    Hello {this.props.name}
                </h2>
                <p>The time is {this.state.time}. Enjoy your day.</p>
                <button id={this.props.btnId} onClick={this._handleGoodbye}>
                    Say Goodbye
                </button>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return(
            <h1>Look at all these people</h1>
        );
    }
}

class Playground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: ['Saeed', 'Sally']
        }
        this._handleHello = this._handleHello.bind(this);
    }

    _handleHello() {
        const name = prompt('Who am I saying hello too?');
        this.setState({
            people: [
                ...this.state.people,
                name
            ]
        });
    }

    _handleGoodbye = (name) => {
        // var people = this.state.people;
        // people.splice(e.target.id, 1)
        // this.setState({
        //     people
        // })
        this.setState({

            people: this.state.people.filter(n => n !== name)
        });
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.people.map((name, index) => {
                    return <Greeting key={index} btnId={index} name={name}
                        onGoodbye={this._handleGoodbye}
                    />
                })}
                <hr style={{ margin: '20px 0' }} />
                {

                    this.state.people.length > 3 && <p style={{color: 'red'}}>It's getting overcrowded.</p>

                }
                <button onClick={this._handleHello}>
                    Say Hello
                </button>
            </div>
        );
    }
}

export default Playground;