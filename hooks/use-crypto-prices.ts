import { useQuery } from '@tanstack/react-query';
import { fetchCryptoPrices } from '@/lib/api/crypto';
import type { CryptoId } from '@/types/crypto';

export function useCryptoPrices(coinId: CryptoId, days: number = 7) {
  return useQuery({
    queryKey: ['crypto-prices', coinId, days],
    queryFn: () => fetchCryptoPrices(coinId, days),
    refetchInterval: 60000,
    staleTime: 30000,
  });
}
