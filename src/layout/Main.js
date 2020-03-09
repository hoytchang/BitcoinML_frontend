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

    convertDataToObject(dataName, dataValues){
        // Convert unix time
        dataValues.forEach(i => i.x = new Date(i.x * 1000));

        // Put data in a format ChartJS can read
        let obj = {
            labels: [dataName],
            datasets:[
                {
                    label: dataName,
                    showLine: true,
                    pointRadius: 0.0,
                    data: dataValues,
                    //backgroundColor: 'red'
                }
            ]
        };
        return obj;
    }

    componentWillMount(){
        // ajax call here
        this.setState({
            priceData: 
                this.convertDataToObject('Price', bitcoinPrice.values),
            hashRateData: 
                this.convertDataToObject('Hash Rate TH/s', hashRate.values),
            nTransactionsData: 
                this.convertDataToObject('Number of Transactions', nTransactions.values),
            nUniqueAddressesData: 
                this.convertDataToObject('Number of Unique Addresses', nUniqueAddresses.values),
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