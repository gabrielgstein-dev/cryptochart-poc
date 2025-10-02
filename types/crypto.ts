export interface CoinGeckoPrice {
  timestamp: number;
  price: number;
}

export interface CoinGeckoMarketChart {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

export interface ChartData {
  time: number;
  value: number;
}

export interface CandlestickData {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export type CryptoId = 'bitcoin' | 'ethereum' | 'binancecoin' | 'cardano' | 'solana';

export interface CryptoOption {
  id: CryptoId;
  name: string;
  symbol: string;
}


