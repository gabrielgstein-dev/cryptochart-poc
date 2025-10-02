'use client';

export function InfoPanel() {
  return (
    <div className="bg-gray-800 rounded-xl shadow-xl p-6">
      <h2 className="text-xl font-semibold mb-4">ℹ️ Informações</h2>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li>
          <strong>Biblioteca:</strong> Lightweight Charts v5.0.9 (TradingView)
        </li>
        <li>
          <strong>API:</strong> CoinGecko (gratuita, sem autenticação)
        </li>
        <li>
          <strong>Atualização:</strong> Automática a cada 60 segundos
        </li>
        <li>
          <strong>Framework:</strong> Next.js 15 + TypeScript + React Query
        </li>
      </ul>
    </div>
  );
}
