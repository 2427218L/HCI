// import external modules
import React, { Component,Fragment } from "react";
import ReactDOM from 'react-dom';
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import Chart from "react-apexcharts";
import ApexChart from "apexcharts";

import {
   BarData,
   LineChartData,
   AreaChartdata,
   ScatterData,
   DoughnutData,
   RadarData,
   PieData,
   PolarData
} from "./apexchartData";

class apexchart extends Component {

 constructor(props) {
        super(props);
        this.updateCharts = this.updateCharts.bind(this)
        this.state = {
        mainseries: [{
                                                name: 'Website Blog',
                                                type: 'column',
                                                data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],

                                                //color: "#00BCD4"
                                              }, {
                                                name: 'Social Media',
                                                type: 'line',
                                                data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
                                                //color: "#FF7181"
                                              }],
        subseries: [{
                              name: 'Placeholder',
                              type: 'column',
                              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

                              //color: "#00BCD4"
                            }, {
                              name: 'Placeholder',
                              type: 'line',
                              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                              //color: "#FF7181"
                            }],
        genseries: [{
                              name: 'Website Blog',
                              type: 'column',
                              data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],

                              //color: "#00BCD4"
                            }, {
                              name: 'Social Media',
                              type: 'line',
                              data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
                              //color: "#FF7181"
                            }],
        suboptions: {
                              stroke: {
                                width: [0, 4],

                              },

                             markers:{
                                  size: 2
                             },
                              colors: ["#00BCD4", "#FF7181"],
                              title: {
                                //text: 'Traffic Sources'
                              },
                              fill: {
                                colors: ["#00BCD4", "#FF7181"]
                              },
                              labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'
                              ],
                              xaxis: {
                                type: 'datetime',

                              },
                              yaxis: [{
                                title: {
                                  text: 'Website Blog',

                                },

                              }, {
                                opposite: true,
                                title: {
                                  text: 'Social Media',

                                }
                              }],

                            },
          mainoptions: {
            stroke: {
              width: [0, 4],

            },

           markers:{
                size: 2
           },
            colors: ["#00BCD4", "#FF7181"],
            title: {
              //text: 'Traffic Sources'
            },
            fill: {
              colors: ["#00BCD4", "#FF7181"]
            },
            labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'
            ],
            xaxis: {
              type: 'datetime',

            },
            yaxis: [{
              title: {
                text: 'Website Blog',

              },

            }, {
              opposite: true,
              title: {
                text: 'Social Media',

              }
            }],
            chart: {
                            events: {
                                    dataPointSelection: (event, chartContext, config) => {
                                        console.log(config.w.config.labels[config.dataPointIndex])
                                        //let chart = new Chart(this.state.genseries, this.state.suboptions)
                                        //console.log(this.state.genseries)
                                        //console.log(this.state.suboptions)
                                        //ReactDOM.hydrate(chart, document.getElementById("sub"))
                                        //document.getElementById("sub").series = this.state.genseries
                                        //document.getElementById("sub").options = this.state.suboptions
                                        //chart.render()
                                        //changeseries()
                                        //console.log(document.querySelector("#chart"))
                                        //document.getElementById("omg").style.visibility = "hidden"
                                        const max = 90
                                        const min = 30
                                        const newMixedSeries = [{
                                                                                              name: 'Website Blog',
                                                                                              type: 'column',
                                                                                              data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],

                                                                                              //color: "#00BCD4"
                                                                                            }, {
                                                                                              name: 'Social Media',
                                                                                              type: 'line',
                                                                                              data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
                                                                                              //color: "#FF7181"
                                                                                            }]
                                        const newBarSeries = []



                                                    this.setState({
                                                          subseries: newMixedSeries,
                                                        })
                                        //ApexChart.exec(document.querySelector("#chart"), 'updateSeries', this.state.genseries,true)
                                    }
                                }
                            },
          },



          }

        }

updateCharts(){
            const max = 90;
            const min = 30;
            const newMixedSeries = [];
            const newBarSeries = [];

            this.state.subseries.map((s) => {
                  const data = s.data.map(() => {
                    return Math.floor(Math.random() * (max - min + 1)) + min
                  })
                  newMixedSeries.push({ data: data, type: s.type })
                })

            this.setState({
                  subseries: newMixedSeries,
                })

          }


  render() {
    return (
        <Fragment>
        <Row className="row-eq-height">
        <Col sm="12">
        <Card>
        <CardHeader><CardTitle>Title here</CardTitle></CardHeader>
        <CardBody>

                       <Chart id="main" options={this.state.mainoptions} series={this.state.mainseries} width="1100"/>

</CardBody>


        </Card>
        </Col>
        </Row>
        <Row className="row-eq-height">
        <Col sm="12" lg="6" xl="6">
                <Card>
                <CardHeader><CardTitle>Generated Chart(s)</CardTitle></CardHeader>
                <CardBody>

                               <div id="chart">
                               <Chart id="sub" options={this.state.suboptions} series={this.state.subseries} width="550"/>
                               </div>

                </CardBody>
                </Card>
        </Col>

        <Col sm="12" lg="6" xl="6">
        <Card>
                                <CardHeader><CardTitle>Generated Chart(s)</CardTitle></CardHeader>
                                <CardBody>


                                               <Chart id="sub" options={this.state.suboptions} series={this.state.subseries} width="550"/>


                                </CardBody>
        </Card>
        </Col>

       </Row>
        </Fragment>
    );
  }
}
export default apexchart;
