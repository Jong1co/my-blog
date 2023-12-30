import React, { useEffect } from 'react';
import * as d3 from 'd3';

type Data = { label: number; value: number };

const LineChart = () => {
  const data: Data[] = [
    { label: 1, value: 10 },
    { label: 2, value: 70 },
    { label: 3, value: 30 },
    { label: 4, value: 40 },
  ];

  useEffect(() => {
    drawLineChart();
  }, []);

  const drawLineChart = () => {
    // Remove the old svg
    d3.select('#line-chart').select('svg').remove();

    // Setup
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Append svg and g elements
    const svg = d3
      .select('#line-chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // X scale
    const x = d3
      .scaleLinear()
      .rangeRound([0, width])
      .domain(d3.extent(data, (d) => d.label) as [number, number]);

    // Y scale
    const y = d3
      .scaleLinear()
      .rangeRound([height, 0])
      .domain(d3.extent(data, (d) => d.value) as [number, number]);

    // Line generator
    const line = d3
      .line<Data>()
      .x((d) => x(d.label))
      .y((d) => y(d.value));

    //extent 최솟값과 최댓값을 리턴해줌

    // X axis
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    // Y axis
    svg.append('g').call(d3.axisLeft(y));

    console.log(line);

    // Append the path
    svg
      .append('path') // 선 그래프르르 svg요소에 추가함
      .datum(data) //
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 10)
      .attr('d', (d) => {
        //M0,450L297,0L593,300L890,225
        console.log(line(d));
        return line(d);
      });

    let tooltip = d3
      .select('body')
      .append('div')
      .style('position', 'absolute')
      .style('z-index', '10')
      .style('visibility', 'hidden')
      .style('border', '1px solid #fff')
      .style('padding', '5px')
      .text('a simple tooltip');

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d) => x(d.label))
      .attr('cy', (d) => y(d.value))
      .attr('r', 20)
      .style('fill', 'blue')
      .on('mouseover', function (event, d) {
        tooltip.style('visibility', 'visible').text(d.label);

        console.log(event);
        d3.select(this).style('fill', 'red');
      })
      .on('mousemove', function (event) {
        return tooltip.style('top', event.pageY - 10 + 'px').style('left', event.pageX + 10 + 'px');
      })
      .on('mouseout', function () {
        tooltip.style('visibility', 'hidden');

        d3.select(this).style('fill', 'blue');
      });
  };
  return <div id="line-chart"></div>;
};

export default LineChart;
