import * as d3 from 'd3';
import { HierarchyNode } from 'd3';

// https://observablehq.com/@jonghunpark/d3-hierarchy
// https://observablehq.com/@d3/cluster
// https://d3-wiki.readthedocs.io/zh_CN/master/Cluster-Layout/
// https://gist.github.com/stereocat/8e5c9927a11441f71228471d5340b406
// https://www.w3.org/TR/SVG/text.html

export declare namespace ID3Custer {
  export interface Data {
    name: string;
    children: Data[];
  }

  export interface Point {
    x: number;
    y: number;
  }
}

window.addEventListener('load', async() => {
  const data: ID3Custer.Data = {
    name: 'root', 
    children: [
      {
        name: '1',
        children: [
          {
            name: '1-1',
            children: [],
          },
        ],
      },
      {
        name: '2',
        children: [
          {
            name: '2-1',
            children: [],
          },
          {
            name: '2-2',
            children: [
              {
                name: '2-2-1',
                children: [],
              },
              {
                name: '2-2-2',
                children: [
                  {
                    name: '2-2-2-1',
                    children: [
                      
                    ],
                  },
                  {
                    name: '2-2-2-2',
                    children: [
                      
                    ],
                  },
                  {
                    name: '2-2-2-3',
                    children: [
                      
                    ],
                  },
                  {
                    name: '2-2-2-4',
                    children: [
                      
                    ],
                  },
                  {
                    name: '2-2-2-5',
                    children: [
                      
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: '2-2-3',
            children: [],
          },
        ],
      },
      {
        name: '3',
        children: [
          {
            name: '3-1',
            children: [],
          },
        ],
      },
    ],
  };

  const width = 800;
  const height = 400;

  const cluster = d3
    .cluster()
    .size([width - 100, height - 100]) // cluster ??? ????????? ????????? ??????.
  ;
  const rootNode = d3.hierarchy<ID3Custer.Data>(data); // ?????? ????????? ???????????? HierarchyNode ????????? ??????????????? d3.hierarchy ??? ???????????? rootNode ??? ??????.
  const nodes = cluster(rootNode);

  // svg ??? ????????? ??????.
  const svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  ;

  const g = svg.append('g').attr("transform", "translate(20,20)");

  // Nodes (circle)
  g.append('g')
    .attr('class', 'nodes')
    .selectAll('circle.node')
    .data(rootNode.descendants()) // ?????? ????????? ???????????? HierarchyNode ???????????? ??? ???????????? ???????????? ?????? ???????????? ???????????? ??????.
    .enter()
    .append('circle')
    .classed('node', true)
    .attr('cx', function(d: any) {return d.x;}) // ?????? ????????? ???????????? x ?????? ??????. (rootNode.descendants() ?????? ???????????? ???????????? x ?????? ??????.)
    .attr('cy', function(d: any) {return d.y;}) // ?????? ????????? ???????????? y ?????? ??????. (rootNode.descendants() ?????? ???????????? ???????????? y ?????? ??????.)
    .attr('r', 4)
  ;

  // Text
  g.append('g')
    .attr('class', 'texts')
    .selectAll('text.text')
    .data(rootNode.descendants())
    .enter()
    .append('text')
    .classed('text', true)
    .attr('x', function (d: any) { return d.x; })
    .attr('y', function (d: any) { return d.y + 15; })
    .attr('text-anchor', 'middle')
    .attr('font-size', '10px')
    // .attr('width', 10)
    .text(function (d: any) { return d.data.name })
  ;

  // Links (line)
  g.append('g')
    .attr('class', 'links')
    .selectAll('line.link')
    .data(rootNode.links())
    .enter()
    .append('line')
    .classed('link', true)
    .attr('x1', function(d: any) {return d.source.x;})
    .attr('y1', function(d: any) {return d.source.y;})
    .attr('x2', function(d: any) {return d.target.x;})
    .attr('y2', function(d: any) {return d.target.y;})
    .attr('stroke', 'black')
  ;
});

