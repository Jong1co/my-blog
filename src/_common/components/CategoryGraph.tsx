'use client';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import BarChart from './BarChart';
import LineChart from './LineChart';
import BubbleChart from './BubbleChart';

type Props = {
  category: { title: string; count: number }[];
};

const CategoryGraph = ({ category }: Props) => {
  return <BubbleChart />;
};

export default CategoryGraph;
