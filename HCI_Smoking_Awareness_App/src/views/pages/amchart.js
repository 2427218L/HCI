import React, { Component,Fragment } from "react";
import ReactDOM from 'react-dom';
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
let chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();
chart.panBehavior = "rotateLongLat";

let grid = chart.series.push(new am4maps.GraticuleSeries());
grid.toBack();

// Create map polygon series
let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;
polygonSeries.mapPolygons.template.nonScalingStroke = true;
polygonSeries.mapPolygons.template.strokeOpacity = 0.5;

// Configure series
let polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = chart.colors.getIndex(0);

// Create hover state and set alternative fill color
let hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

let linkContainer = chart.createChild(am4core.Container);
linkContainer.isMeasured = false;
linkContainer.layout = "horizontal";
linkContainer.x = am4core.percent(50);
linkContainer.y = am4core.percent(90);
linkContainer.horizontalCenter = "middle";

let equirectangular= linkContainer.createChild(am4core.TextLink);
equirectangular.margin(10,10,10,10);
equirectangular.text = "Equirectangular";
equirectangular.events.on("hit", function(){
    chart.projection = new am4maps.projections.Projection();
})

let mercator = linkContainer.createChild(am4core.TextLink);
mercator.text = "Mercator";
mercator.margin(10,10,10,10);
mercator.events.on("hit", function(){
    chart.projection = new am4maps.projections.Mercator();
})

let miller = linkContainer.createChild(am4core.TextLink);
miller.margin(10,10,10,10);
miller.text = "Miller";
miller.events.on("hit", function(){
    chart.projection = new am4maps.projections.Miller();
})

let eckert = linkContainer.createChild(am4core.TextLink);
eckert.margin(10,10,10,10);
eckert.text = "Eckert 6";
eckert.events.on("hit", function(){
    chart.projection = new am4maps.projections.Eckert6();
})

let orthographic = linkContainer.createChild(am4core.TextLink);
orthographic.margin(10,10,10,10);
orthographic.text = "Orthographic";
orthographic.events.on("hit", function(){
    chart.projection = new am4maps.projections.Orthographic();
})