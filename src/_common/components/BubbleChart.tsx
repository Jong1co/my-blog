import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DataType {
  category: string;
  value: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
}

const BubbleChart: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const data: DataType[] = [
      { category: 'Category 1', value: 10 },
      { category: 'Category 2', value: 20 },
      { category: 'Category 3', value: 30 },
      { category: 'Category 4', value: 40 },
      { category: 'Category 5', value: 50 },
      { category: 'Category 1', value: 60 },
    ];

    if (ref.current) {
      const svg = d3.select(ref.current).attr('width', 800).attr('height', 600);

      const simulation = d3
        .forceSimulation<DataType>(data) //물리 기반 애니메이션 기법의 일종으로, 객체 간의 물리적인 상호작용을 시뮬레이션한대
        .force('x', d3.forceX<DataType>(800 / 2).strength(0.2))
        .force('y', d3.forceY<DataType>(600 / 2).strength(0.2)) //y축 목표 위치, strength는 힘의 강도를 나타내는 메서드로, 얼마나 빠르게 이동하는지 조절
        .force(
          'collide', // 노드 사이 충돌을 방지하기 위한 colide 힘을 생성
          d3.forceCollide<DataType>((d) => d.value + 5), //충돌이라고 감지되는 반경 value + 5를 반지름으로 사용함
        );

      const drag = (simulation: d3.Simulation<DataType, undefined>) => {
        function dragstarted(event: d3.D3DragEvent<Element, DataType, DataType>) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          event.subject.vx = event.subject.x;
          event.subject.vy = event.subject.y;
        }

        function dragged(event: d3.D3DragEvent<Element, DataType, DataType>) {
          event.subject.fx = event.x;
          event.subject.fy = event.y;
        }

        function dragended(event: d3.D3DragEvent<Element, DataType, DataType>) {
          if (!event.active) simulation.alphaTarget(0);
          event.subject.fx = null;
          event.subject.fy = null;
        }

        return d3.drag<SVGCircleElement, DataType>().on('start', dragstarted).on('drag', dragged).on('end', dragended);
      };

      const circles = svg
        .selectAll('circle')
        .data(data)
        .join('circle')
        .attr('r', (d) => d.value)
        .attr('stroke', '#83FFB7')
        .attr('stroke-width', 3)
        .call(drag(simulation) as any)
        .attr('fill', '#2f3038')
        .text((d) => d.category)
        .on('mouseover', function (event) {
          d3.select(this).attr('fill', '#83FFB7');
        })
        .on('mouseout', function (event) {
          d3.select(this).attr('fill', '#2f3038');
        });

      simulation.on('tick', () => {
        circles.attr('cx', (d) => d.x || 0).attr('cy', (d) => d.y || 0);
      });
    }
  }, []);

  return <svg ref={ref} />;
};

export default BubbleChart;
