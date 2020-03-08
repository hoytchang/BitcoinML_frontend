import React from 'react';
import Chart from '../components/Chart'
import { Layout, Row, Col } from 'antd';
import bitcoinPrice from '../data/market-price.json';

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            priceData:{},
        };
    }

    componentWillMount(){
        this.getChartData();
    }

    getChartData(){
        // ajax call here
        this.setState({
            priceData: {
                labels: ['price'],
                datasets:[
                    {
                        label: 'Price',
                        showLine: true,
                        pointRadius: 0.0,
                        data: bitcoinPrice.values,
                        //backgroundColor: 'red'
                    }
                ]
            },
        });
    }

    render() {
        return (
            <div>
                <div style={{}}>
                    <div style={{display:"inline", background: 'lightgrey'}}>
                        left
                        
                    </div>
                    <div style={{display:"inline", background: 'black', color:"white"}}>
                        mid
                        
                    </div>
                    <div style={{display:"inline", background: 'grey'}}>
                        right
                    </div>
                </div>
                <div 
                    //style={{height:"400px", width:"800px"}}
                >
                    <Chart
                        chartData={this.state.priceData}
                        title='Bitcoin Market Price (USD)'
                    />

                </div>
            </div>
        );
    }
}

export default Main;