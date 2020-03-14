import React, {Component} from 'react';
import {Scatter} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        title: ''
    }
    
    render(){
        return(
            <div className="chart">
                <Scatter
                    data={this.state.chartData}
                    options={{
                        scales: {
                            xAxes:[{
                                type: 'time',
                                distribution: 'series',
                                time: {unit: 'year'},
                            }],
                            yAxes:[{
                                type: 'linear'
                            }],
                        },
                        maintainAspectRatio:false,
                        title:{
                            display:this.props.displayTitle,
                            text:this.props.title,
                            fontSize:25,
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition,
                        }
                    }}
                    height={400}
                />
            </div>
        )
    }
}

export default Chart;