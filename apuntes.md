// With JSX
class Hello extends React.Component {
    reander() {
        return <div> Hello {this.props.toWhat} </div>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello toWhat='World'/>)

// With no JSX
class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Hello, {toWhat: 'Worl'}, null));

// with shorthand

const e = React.createElement;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e('div', null, 'Hello World'));
