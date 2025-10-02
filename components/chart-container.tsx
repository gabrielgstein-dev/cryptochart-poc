'use client';

import { Chart } from './chart';
import type { ChartData } from '@/types/crypto';

interface ChartContainerProps {
  data: ChartData[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export function ChartContainer({ data, isLoading, error }: ChartContainerProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Carregando dados...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center text-red-400">
          <p className="text-xl mb-2">❌ Erro ao carregar dados</p>
          <p className="text-sm text-gray-400">
            {error.message || 'Erro desconhecido'}
          </p>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center text-gray-400">
          <p className="text-xl mb-2">📊 Nenhum dado disponível</p>
          <p className="text-sm">Tente selecionar outro período ou criptomoeda</p>
        </div>
      </div>
    );
  }

  return <Chart data={data} height={400} />;
}
