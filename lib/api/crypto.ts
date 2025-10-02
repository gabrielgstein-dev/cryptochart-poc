import type { ChartData, CoinGeckoMarketChart, CryptoId } from '@/types/crypto';

export async function fetchCryptoPrices(
  coinId: CryptoId,
  days: number
): Promise<ChartData[]> {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`,
    {
      next: { revalidate: 60 },
    }
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
