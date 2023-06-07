'use client';
import React, { useEffect, useRef } from 'react';
import { pack, hierarchy, select, easeExpInOut } from 'd3';

type Props = {
  category: string[];
};

const CategoryGraph = ({ category }: Props) => {
  const ref = useRef<SVGSVGElement>(null);
  const width = 500;
  const height = 800;

  const mapC = category.map((c, i) => ({ title: c, value: i }));

  useEffect(() => {
    const packLayout: (root: any) => any = pack().size([width, height]).padding(-5);

    const root = hierarchy(mapC);
    console.log(root);
    const svg = select(ref.current);
    const packRoot = packLayout(root);
    console.log(packRoot);

    const node = svg
      .selectAll()
      .data(packRoot.data)
      .enter()
      .append('g')
      .attr('transform', `translate(${Math.random() * 1000}, ${Math.random() * 500})`);

    const circle = node.append('circle').style('fill', 'red');
    circle.transition().ease(easeExpInOut).duration(1000).attr('r', 100);
    console.log(root);
  }, []);

  return <svg ref={ref} style={{ width: '100vw', height: '500px' }}></svg>;
};

export default CategoryGraph;
