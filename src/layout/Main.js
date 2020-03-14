import React, { useState, useEffect } from 'react';
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

const Main = () => {
    const [priceData, setPriceData] = useState();
    const [hashRateData, setHashRateData] = useState();
    const [nTransactionsData, setNTransactionsData] = useState();
    const [nUniqueAddressesData, setNUniqueAddressesData] = useState();

    function convertDataToObject(dataName, dataValues){
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
                }
            ]
        };
        return obj;
    }

    useEffect(() => {
        // TODO: ajax call here
        setPriceData(convertDataToObject('Price', bitcoinPrice.values));
        setHashRateData(convertDataToObject('Hash Rate TH/s', hashRate.values));
        setNTransactionsData(convertDataToObject('Number of Transactions', nTransactions.values));
        setNUniqueAddressesData(convertDataToObject('Number of Unique Addresses', nUniqueAddresses.values));
    }, [])

    return (
        <div style={{padding:20}}>
            <Collapse 
                defaultActiveKey={[]} 
                onChange={callback}
            >
                <Panel header="Price - Actual and Predicted" key="1" >
                    <div 
                        //style={{height:"400px", width:"800px"}}
                    >
                        <Chart
                            chartData={priceData}
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
                            chartData={hashRateData}
                            title='Hash Rate TH/s'
                        />
                        <Chart
                            chartData={nTransactionsData}
                            title='Number of Transactions'
                        />
                        <Chart
                            chartData={nUniqueAddressesData}
                            title='Number of Unique Addresses'
                        />
                    </div>
                </Panel>
            </Collapse>
            
        </div>
    );
}

export default Main;