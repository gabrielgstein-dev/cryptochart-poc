'use client';

import { useState } from 'react';
import { useCryptoPrices } from '@/hooks/use-crypto-prices';
import { Header } from '@/components/header';
import { CryptoSelector } from '@/components/crypto-selector';
import { PeriodSelector } from '@/components/period-selector';
import { PriceDisplay } from '@/components/price-display';
import { ChartContainer } from '@/components/chart-container';
import { InfoPanel } from '@/components/info-panel';
import type { CryptoId } from '@/types/crypto';

export default function Home() {
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoId>('bitcoin');
  const [selectedDays, setSelectedDays] = useState(7);

  const { data, isLoading, error, isRefetching } = useCryptoPrices(
    selectedCrypto,
    selectedDays
  );

  const latestPrice = data?.[data.length - 1]?.value;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <div className="bg-gray-800 rounded-xl shadow-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <CryptoSelector
              selectedCrypto={selectedCrypto}
              onCryptoChange={setSelectedCrypto}
            />
            <PeriodSelector
              selectedDays={selectedDays}
              onPeriodChange={setSelectedDays}
            />
          </div>

          <PriceDisplay price={latestPrice} isRefetching={isRefetching} />

          <ChartContainer data={data} isLoading={isLoading} error={error} />
        </div>

        <InfoPanel />
      </div>
    </main>
  );
}
