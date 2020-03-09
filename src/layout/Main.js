import React from 'react';
import Chart from '../components/Chart'
import { Collapse, Button } from 'antd';

import bitcoinPrice from '../data/market-price.json';
import hashRate from '../data/hash-rate.json';
import nTransactions from '../data/n-transactions.json';
import nUniqueAddresses from '../data/n-unique-addresses.json';

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
}

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            priceData:{},
            hashRateData:{},
            nTransactionsData:{},
            nUniqueAddressesData:{},
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
            hashRateData: {
                datasets:[
                    {
                        label: 'Hash Rate TH/s',
                        showLine: true,
                        pointRadius: 0.0,
                        data: hashRate.values,
                        //backgroundColor: 'red'
                    }
                ]
            },
            nTransactionsData: {
                datasets:[
                    {
                        label: 'Number of Transactions',
                        showLine: true,
                        pointRadius: 0.0,
                        data: nTransactions.values,
                        //backgroundColor: 'red'
                    }
                ]
            },
            nUniqueAddressesData: {
                datasets:[
                    {
                        label: 'Number of Transactions',
                        showLine: true,
                        pointRadius: 0.0,
                        data: nUniqueAddresses.values,
                        //backgroundColor: 'red'
                    }
                ]
            },
        });
    }

    render() {
        return (
            <div style={{padding:20}}>
                <Collapse 
                    defaultActiveKey={['1']} 
                    onChange={callback}
                >
                    <Panel header="Price - Actual and Predicted" key="1" >
                        <div 
                            //style={{height:"400px", width:"800px"}}
                        >
                            <Chart
                                chartData={this.state.priceData}
                                title='Bitcoin Market Price (USD)'
                            />

                        </div>
                    </Panel>
                    <Panel header="Model Settings" key="2">
                        <p>model settings under construction</p>
                        <Button type="primary">Train Model</Button>
                    </Panel>
                    <Panel header="Factors" key="3">
                        <div>
                            <Chart
                                chartData={this.state.hashRateData}
                                title='Hash Rate TH/s'
                            />
                            <Chart
                                chartData={this.state.nTransactionsData}
                                title='Number of Transactions'
                            />
                            <Chart
                                chartData={this.state.nUniqueAddressesData}
                                title='Number of Unique Addresses'
                            />
                        </div>
                    </Panel>
                </Collapse>
                
            </div>
        );
    }
}

export default Main;