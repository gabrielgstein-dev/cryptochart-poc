'use client';

import { useEffect, useRef } from 'react';
import { 
  createChart, 
  ColorType, 
  IChartApi, 
  ISeriesApi,
  AreaSeries,
  Time
} from 'lightweight-charts';
import type { ChartData } from '@/types/crypto';

interface ChartProps {
  data: ChartData[];
  height?: number;
}

export function Chart({ data, height = 400 }: ChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<'Area'> | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: '#1e1e1e' },
        textColor: '#d1d5db',
      },
      grid: {
        vertLines: { color: '#2d2d2d' },
        horzLines: { color: '#2d2d2d' },
      },
      width: chartContainerRef.current.clientWidth,
      height: height,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    const areaSeries = chart.addSeries(AreaSeries, {
      lineColor: '#3b82f6',
      topColor: '#3b82f680',
      bottomColor: '#3b82f600',
      lineWidth: 2,
    });

    chartRef.current = chart;
    seriesRef.current = areaSeries;

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [height]);

  useEffect(() => {
    if (seriesRef.current && data.length > 0) {
      const formattedData = data.map(item => ({
        time: item.time as Time,
        value: item.value,
      }));
      seriesRef.current.setData(formattedData);
      chartRef.current?.timeScale().fitContent();
    }
  }, [data]);

  return <div ref={chartContainerRef} className="w-full rounded-lg overflow-hidden" />;
}


