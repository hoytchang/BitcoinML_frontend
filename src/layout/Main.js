import React from 'react';
import Chart from '../components/Chart'

class Main extends React.Component {
    render() {
        return (
            <div>
                <Chart legendPosition='left' />
            </div>
        );
    }
}

export default Main;