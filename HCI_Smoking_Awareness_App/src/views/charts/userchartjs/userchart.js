import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import Apexchart from "react-apexcharts";
import * as Icon from "react-feather";
import moment from "react-moment";
import { StaticCardData } from "./staticCardData";
import { AdvancedCardData } from "./advancedCardData";

import FitnessStatisticsChart from "../../../components/cards/fitnessStatisticsWithChartCard";
import EarningStatisticsChartCard2 from "../../../components/cards/earningStatisticsChartCard2";
import MonthlySalesStatisticsBarChartCard from "../../../components/cards/monthlySalesStatisticsBarChartCard";
import MinimalStatisticsChart from "../../../components/cards/minimalStatisticsWithChartCard";

// Assume user data here
let userdata = [];
let userpay = 3000;

class userchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountOptions: {
        chart: {
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 300,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: "#fff",
              strokeWidth: "100%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              name: {
                offsetY: -10,
                show: true,
                color: "#888",
                fontSize: "17px"
              },
              value: {
                formatter: function (val) {
                  // assume user earns 3000 , smokes 1 packet a day and avg price of cig $12
                  return parseInt(val);
                },
                color: "#111",
                fontSize: "36px",
                show: true
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Percent"]
      },
      amountSeries: [12],

      ringoptions: {
        dataLabels: {
          // formatter: function(val, opts) {
          // return opts.w.config.series[opts.seriesIndex];

          formatter: function (value, { ringseries, dataPointIndex, w }) {
            return ringseries.data + ":  " + value;
          }
        },
        plotOptions: {
          radialBar: {
            offsetY: -10,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined
            },
            dataLabels: {
              name: {
                show: true
              },
              value: {
                show: true
              }
            }
          }
        },

        //colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
        //labels: ["40 years", "20 years", "10 years", "5 years"],
        legend: {
          show: true,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: 20,
          offsetY: 10,
          labels: {
            useSeriesColors: true
          },
          markers: {
            size: 0
          },

          formatter: function (seriesName, opts) {
            return seriesName;
          },
          itemMargin: {
            horizontal: 1
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: true
              }
            }
          }
        ]
      },

      options1: {
        chart: {
          height: 350,
          //type: "line",
          id: "areachart-2"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        grid: {
          padding: {
            right: 30,
            left: 20
          }
        },
        markers: {
          size: 5,
          hover: {
            size: 7
          },
        },
        tooltip: {
          enabled: true,
          onDatasetHover: {
            highlightDataSeries: true,
          },
          x: {
            show: true,
            format: 'yyyy',
          },
        },
        colors: ["#D50000", "#3F51B5"],
        title: {
          text: "Average Daily Cigarette Consumption",
          align: "left"
        },

        labels: [
          "13/11/2011",
          "13/11/2012",
          "13/11/2013",
          "13/11/2014",
          "13/11/2015",
          "13/11/2015",
          "13/11/2016",
          "13/11/2017",
          "13/11/2018",
          "13/11/2019",
        ],
        xaxis: {
          type: "datetime",

          categories: [
            "13/11/2011",
            "13/11/2012",
            "13/11/2013",
            "13/11/2014",
            "13/11/2015",
            "13/11/2015",
            "13/11/2016",
            "13/11/2017",
            "13/11/2018",
            "13/11/2019",
          ]
        },

        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#D50000"
            },
            labels: {
              style: {
                color: "#D50000"
              }
            },
            title: {
              text: "Average # of cigarettes smoked(Global)",
              style: {
                color: "#D50000"
              }
            },
            tooltip: {
              enabled: true
            }
          },

          {
            seriesName: "Average # of cigarettes smoked(Me)",
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#3F51B5"
            },
            labels: {
              style: {
                color: "#3F51B5"
              }
            },
            title: {
              text: "Average # of cigarettes smoked(Me)",
              style: {
                color: "#3F51B5"
              }
            }
          }
        ]
      },

      futureOptions: {

        chart: {
          type: "area",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "01/01/2010",
            "01/01/2011",
            "01/01/2012",
            "01/01/2013",
            "01/01/2014",
            "01/01/2015",
            "01/01/2016",
            "01/01/2017",
            "01/01/2018",
            "01/01/2019"
          ],
          //tickAmount: 5,
          
        },
        yaxis: {
          title: {
            text: "Total Spending on Cigarettes (S$)"
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        tooltip: {
          enabled: true,
          onDatasetHover: {
            highlightDataSeries: true,
          },
          x: {
            format: 'yyyy',
          },
        },
        stroke: {
          width: 3,
          curve: "smooth"
        },


        title: {
          text: "Cost",
          align: "left",
          style: {
            fontSize: "16px",
            color: "#666"
          }
        },

        markers: {
          size: 4,
          opacity: 0.9,

          strokeColor: "#fff",
          strokeWidth: 2,

          hover: {
            size: 7
          }
        },
      },

      futureSeries: [
        {

          name: "Total Cost of Smoking",
          data: [4234, 8468, 12811.5 , 17155, 21718.5 ,26682.5, 31182.5, 35782.5, 40442.5, 45142.5 ]
        }
      ],

      ringseries: ["22400", "10200", "6800", "50"],

      series: [
        {
          name: "Average Cost (Smoker per year)",
          type: "column",
          data: [
            2581.28,
            2674.72,
            2733.12,
            2882.04,
            2981.32,
            3072.716,
            3173.456,
            3274.196,
            3374.936,
            3470.8288
          ]

          //color: "#00BCD4"
        },
        {
          name: "Cost (per pack cigarettes)",
          type: "line",
          data: [
            8.84,
            9.16,
            9.36,
            9.87,
            10.21,
            10.523,
            10.868,
            11.213,
            11.558,
            11.8864
          ]
          //color: "#FF7181"
        }
      ],
      areaseries: [
        {
          name: "cigarettes smoked(General) ",
          data: [
            ["2011", 18.9],
            ["2012", 18.5],
            ["2013", 18.1],
            ["2014", 17.7],
            ["2015", 17.3],
            ["2016", 16.9],
            ["2017", 16.1],
            ["2018", 15.7],
            ["2019", 15.3],
          ],
          type: "line"
        },
        {
          name: "cigarettes smoked(Me)",
          data: [
            ["2011", 20],
            ["2012", 19],
            ["2013", 21],
            ["2014", 25],
            ["2015", 24],
            ["2016", 24],
            ["2017", 26],
            ["2018", 27],
            ["2019", 27],
          ],
          type: "area"
        }
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <Row className="row-eq-height">
          <Col sm="12" md="6" xl="3">
            <MinimalStatisticsChart
              chartData={StaticCardData.ChartistData}
              cardBgColor="gradient-blackberry"
              statistics="S$ 876"
              text="Current year savings"
              iconSide="right"
            >
              <Icon.PieChart size={36} strokeWidth="1.3" color="#fff" />
            </MinimalStatisticsChart>

            <MinimalStatisticsChart
              chartData={StaticCardData.ChartistDataSpending}
              cardBgColor="gradient-ibiza-sunset"
              statistics="S$ 3,504"
              text="Current year spending "
              iconSide="right"
            ></MinimalStatisticsChart>
          </Col>


          <Col sm="12" md="4">
            <EarningStatisticsChartCard2
              earningStatisticData2={AdvancedCardData.EarningStatisticData2}
              cardTitle="Spending"
              cardSubTitle="2015 - today"
              earningAmount="SGD$ 21,900"
              earningText="Total Spending"
            />
          </Col>
          <Col sm="12" md="4">
            <MonthlySalesStatisticsBarChartCard
              monthlySalesStatisticsBarChartData={
                AdvancedCardData.MonthlySalesStatisticsBarChartData
              }
              cardTitle="Statistics"
              cardSubTitle="Last 6 months consumption"
            />
          </Col>
        </Row>
        <h4 className="mt-4 mb-0 text-bold-400">My Smoking Consumption Targets</h4>
        <Row className="row-eq-height">
          <Col sm="12" md="4">
            <FitnessStatisticsChart
              donutChartData={StaticCardData.DonutChartData1}
              dountChartClass="donut1"
              textTop="Monthly Consumption"
              statisticsTop="330"
              textBottom="Monthly target"
              statisticsBottom="450"
              textColor="primary"
            />
            <Icon.TrendingDown
              size={60}
              strokeWidth="1"
              className="primary icon-dount-center"
            />
          </Col>
          <Col sm="12" md="4">
            <FitnessStatisticsChart
              donutChartData={StaticCardData.DonutChartData2}
              dountChartClass="donut2"
              textTop="Monthly Savings"
              statisticsTop="S$72"
              textBottom="Saving Goal"
              statisticsBottom="S$864"
              textColor="warning"
            />
            <Icon.TrendingUp
              size={60}
              strokeWidth="1"
              className="warning icon-dount-center"
            />
          </Col>
          <Col sm="12" md="4">
            <FitnessStatisticsChart
              donutChartData={StaticCardData.DonutChartData3}
              dountChartClass="donut3"
              textTop="Yearly Spending"
              statisticsTop="3.7"
              statisticsTopUnit="IPhones / year"
              textBottom="IPhones Spent (Lifetime)"
              statisticsBottom="21.7"
              textColor="danger"
            />
            <Icon.ShoppingBag
              size={60}
              strokeWidth="1"
              className="danger icon-dount-center"
            />
          </Col>
        </Row>

        <Row className="row-eq-height">
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle>My Smoking Consumption vs the rest of the world </CardTitle>
              </CardHeader>
              <CardBody>
                <div id="chart">
                  <Apexchart
                    options={this.state.options1}
                    series={this.state.areaseries}
                    height="350"
                    type="area"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="row-eq-height">
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Cost of smoking</CardTitle>
              </CardHeader>
              <CardBody>

                <Apexchart
                  options={this.state.futureOptions}
                  series={this.state.futureSeries}
                  type="area"
                  height="350"
                />

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default userchart;
