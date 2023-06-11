import React, { useEffect } from 'react';
import * as d3 from 'd3';

interface Datum {
  label: string;
  value: number;
}
const BarChart = () => {
  useEffect(() => {
    drawBarChart();
  }, []);

  const data: Datum[] = [
    { label: 'A', value: 10 },
    { label: 'B', value: 20 },
    { label: 'C', value: 30 },
    { label: 'D', value: 40 },
    { label: 'E', value: 50 },
    { label: 'F', value: 20 },
  ];

  const drawBarChart = () => {
    // Remove the old svg
    d3.select('#bar-chart').select('svg').remove();

    // Setup
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3
      .select('#bar-chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const x = d3
      .scaleBand()
      .rangeRound([0, width])
      .padding(0.1)
      .domain(data.map((d) => d.label));

    const y = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, (d: Datum) => d.value) || 0]);

    svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x));

    svg.append('g').call(d3.axisLeft(y));

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.label) || 0)
      .attr('y', (d) => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', (d) => height - y(d.value));
  };

  return <div id="bar-chart"></div>;
};

export default BarChart;
