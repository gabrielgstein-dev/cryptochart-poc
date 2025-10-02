import { useQuery } from '@tanstack/react-query';
import type { ChartData, CoinGeckoMarketChart, CryptoId } from '@/types/crypto';

async function fetchCryptoPrices(
  coinId: CryptoId,
  days: number
): Promise<ChartData[]> {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
  );

  if (!response.ok) {
    throw new Error('Falha ao buscar dados da API');
  }

  const data: CoinGeckoMarketChart = await response.json();

  return data.prices.map(([timestamp, price]) => ({
    time: Math.floor(timestamp / 1000),
    value: price,
  }));
}

export function useCryptoPrices(coinId: CryptoId, days: number = 7) {
  return useQuery({
    queryKey: ['crypto-prices', coinId, days],
    queryFn: () => fetchCryptoPrices(coinId, days),
    refetchInterval: 60000,
    staleTime: 30000,
  });
}


