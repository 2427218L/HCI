export const LineChartData = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: "My First dataset",
        fill: false,
        borderDash: [5, 5],
        borderColor: "#9C27B0",
        pointBorderColor: "#9C27B0",
        pointBackgroundColor: "#FFF",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: "My Second dataset",
        fill: false,
        borderDash: [5, 5],
        borderColor: "#00A5A8",
        pointBorderColor: "#00A5A8",
        pointBackgroundColor: "#FFF",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4
      },
      {
        data: [45, 25, 16, 36, 67, 18, 76],
        label: "My Third dataset - No bezier",
        lineTension: 0,
        fill: false,
        borderColor: "#FF7D4D",
        pointBorderColor: "#FF7D4D",
        pointBackgroundColor: "#FFF",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4
      }
    ]
  },
  options: {
    animation: {
      duration: 1000, // general animation time
      easing: "easeOutBack"
    },
    hover: {
      animationDuration: 1000, // duration of animations when hovering an item
      mode: "label"
    },
    responsiveAnimationDuration: 1000, // animation duration after a resize
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: "bottom"
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            color: "#f3f3f3",
            drawTicks: false
          },
          scaleLabel: {
            display: true,
            labelString: "Month"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            color: "#f3f3f3",
            drawTicks: false
          },
          scaleLabel: {
            display: true,
            labelString: "Value"
          }
        }
      ]
    },
    title: {
      display: true,
      text: "Chart.js Line Chart - Legend"
    }
  }
};

export const AreaChartdata = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [0, 150, 140, 105, 190, 230, 270],
        label: "Series A",
        backgroundColor: "rgba(255, 141, 96, 0.4)",
        borderColor: "transparent",
        pointBackgroundColor: "#FFF",
        pointBorderColor: "rgba(255, 141, 96,1)",
        pointHoverBackgroundColor: "rgba(255, 141, 96,1)",
        pointRadius: "5",
        pointHoverBorderColor: "#FFF",
        pointHoverRadius: "5",
        pointBorderWidth: "2"
      },
      {
        data: [0, 90, 120, 240, 140, 250, 190],
        label: "Series B",
        backgroundColor: "rgba(0, 157, 160, 0.7)",
        borderColor: "transparent",
        pointBackgroundColor: "#FFF",
        pointBorderColor: "rgba(0, 157, 160,1)",
        pointHoverBackgroundColor: "rgba(0, 157, 160,1)",
        pointRadius: "5",
        pointHoverBorderColor: "#FFF",
        pointHoverRadius: "5",
        pointBorderWidth: "2"
      }
    ]
  },
  options: {
    animation: {
      duration: 1000, // general animation time
      easing: "easeOutBack"
    },
    hover: {
      animationDuration: 1000 // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 1000, // animation duration after a resize
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            color: "#f3f3f3",
            drawTicks: false
          },
          scaleLabel: {
            display: true,
            labelString: "Month"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            color: "#f3f3f3",
            drawTicks: false
          },
          scaleLabel: {
            display: true,
            labelString: "Value"
          }
        }
      ]
    }
  }
};

export const ScatterData = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [
          {
            x: 1,
            y: -1.711e-2
          },
          {
            x: 1.26,
            y: -2.708e-2
          },
          {
            x: 1.58,
            y: -4.285e-2
          },
          {
            x: 2.0,
            y: -6.772e-2
          },
          {
            x: 2.51,
            y: -1.068e-1
          },
          {
            x: 3.16,
            y: -1.681e-1
          },
          {
            x: 3.98,
            y: -2.635e-1
          },
          {
            x: 5.01,
            y: -4.106e-1
          },
          {
            x: 6.31,
            y: -6.339e-1
          },
          {
            x: 7.94,
            y: -9.659e-1
          },
          {
            x: 10.0,
            y: -1.445
          },
          {
            x: 12.6,
            y: -2.11
          },
          {
            x: 15.8,
            y: -2.992
          },
          {
            x: 20.0,
            y: -4.102
          },
          {
            x: 25.1,
            y: -5.429
          },
          {
            x: 31.6,
            y: -6.944
          },
          {
            x: 39.8,
            y: -8.607
          },
          {
            x: 50.1,
            y: -1.038e1
          },
          {
            x: 63.1,
            y: -1.223e1
          },
          {
            x: 79.4,
            y: -1.413e1
          },
          {
            x: 100.0,
            y: -1.607e1
          },
          {
            x: 126,
            y: -1.803e1
          },
          {
            x: 158,
            y: -2e1
          },
          {
            x: 200,
            y: -2.199e1
          },
          {
            x: 251,
            y: -2.398e1
          },
          {
            x: 316,
            y: -2.597e1
          },
          {
            x: 398,
            y: -2.797e1
          },
          {
            x: 501,
            y: -2.996e1
          },
          {
            x: 631,
            y: -3.196e1
          },
          {
            x: 794,
            y: -3.396e1
          },
          {
            x: 1000,
            y: -3.596e1
          }
        ],
        label: "V(node2)",
        backgroundColor: "rgba(81,117,224,.6)",
        borderColor: "transparent",
        pointBorderColor: "#5175E0",
        pointBackgroundColor: "#FFF",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4
      }
    ]
  },
  options: {
    animation: {
      duration: 1000, // general animation time
      easing: "easeOutBack"
    },
    hover: {
      animationDuration: 1000 // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 1000, // animation duration after a resize
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: false,
      text: "Chart.js Scatter Chart - Logarithmic X-Axis"
    },
    scales: {
      xAxes: [
        {
          type: "logarithmic",
          position: "bottom",
          gridLines: {
            zeroLineColor: "rgba(0,0,0,.1)",
            color: "#f3f3f3",
            drawTicks: false
          },
          scaleLabel: {
            labelString: "Frequency",
            display: true
          }
        }
      ],
      yAxes: [
        {
          type: "linear",
          ticks: {
            userCallback: tick => {
              return tick.toString() + "dB";
            }
          },
          gridLines: {
            zeroLineColor: "rgba(81,117,224,1)",
            color: "#f3f3f3",
            drawTicks: false
          },
          scaleLabel: {
            labelString: "Voltage",
            display: true
          }
        }
      ]
    }
  }
};

export const BarData = {
  data: {
    labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
    datasets: [
      {
        label: "Series A",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        borderColor: "rgba(148,159,177,1)",
        pointBackgroundColor: "rgba(148,159,177,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(148,159,177,0.8)"
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: "Series B",
        backgroundColor: "rgba(0, 157, 160, 0.8)",
        borderColor: "rgba(148,159,177,1)",
        pointBackgroundColor: "rgba(148,159,177,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(148,159,177,0.8)"
      }
    ]
  },
  options: {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false
  }
};

export const DoughnutData = {
  data: {
    labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: [
          "rgba(0, 157, 160, 0.8)",
          "rgba(28, 188, 216, 0.8)",
          "rgba(255, 141, 96, 0.8)"
        ]
      }
    ]
  },
  options: {
    animation: false,
    responsive: true,
    maintainAspectRatio: false
  }
};

export const RadarData = {
  data: {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running"
    ],
    datasets: [
      {
        data: [65, 59, 90, 81, 56, 55, 40],
        label: "Series A",
        backgroundColor: ["rgba(255, 141, 96, 0.8)"]
      },
      {
        data: [28, 48, 40, 19, 96, 27, 100],
        label: "Series B",
        backgroundColor: ["rgba(0, 157, 160, 0.8)"]
      }
    ]
  },
  options: {
    animation: false,
    responsive: true,
    maintainAspectRatio: false
  }
};

export const PieData = {
  data: {
    labels: ["Download Sales", "In-Store Sales", "Mail Sales"],
    datasets: [
      {
        data: [300, 500, 100],
        backgroundColor: [
          "rgba(0, 157, 160, 0.8)",
          "rgba(28, 188, 216, 0.8)",
          "rgba(255, 141, 96, 0.8)"
        ]
      }
    ]
  },
  options: {
    animation: false,
    responsive: true,
    maintainAspectRatio: false
  }
};

export const PolarData = {
  data: {
    labels: [
      "Download Sales",
      "In-Store Sales",
      "Mail Sales",
      "Telesales",
      "Corporate Sales"
    ],
    datasets: [
      {
        data: [300, 500, 100, 40, 120],
        backgroundColor: [
          "rgba(0, 157, 160, 0.8)",
          "rgba(28, 188, 216, 0.8)",
          "rgba(255, 141, 96, 0.8)",
          "rgba(12, 194, 126, 0.8)",
          "rgba(255, 88, 107, 0.8)"
        ]
      }
    ]
  },
  options: {
    animation: false,
    responsive: true,
    maintainAspectRatio: false
  }
};
