import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.props.onDecrement}>-</button>
                    <h1>{this.props.count}</h1>
                    <button onClick={this.props.onIncrement}>+</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Counter);