'use client';

import type { CryptoId, CryptoOption } from '@/types/crypto';

interface CryptoSelectorProps {
  selectedCrypto: CryptoId;
  onCryptoChange: (crypto: CryptoId) => void;
}

const cryptoOptions: CryptoOption[] = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH' },
  { id: 'binancecoin', name: 'BNB', symbol: 'BNB' },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA' },
  { id: 'solana', name: 'Solana', symbol: 'SOL' },
];

export function CryptoSelector({ selectedCrypto, onCryptoChange }: CryptoSelectorProps) {
  return (
    <div className="flex-1">
      <label className="block text-sm font-medium mb-2 text-gray-300">
        Criptomoeda
      </label>
      <select
        value={selectedCrypto}
        onChange={(e) => onCryptoChange(e.target.value as CryptoId)}
        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        {cryptoOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name} ({option.symbol})
          </option>
        ))}
      </select>
    </div>
  );
}
