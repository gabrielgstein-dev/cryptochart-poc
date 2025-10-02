'use client';

interface PriceDisplayProps {
  price: number | undefined;
  isRefetching: boolean;
}

export function PriceDisplay({ price, isRefetching }: PriceDisplayProps) {
  if (!price) return null;

  return (
    <div className="mb-4 p-4 bg-gray-700 rounded-lg">
      <div className="text-sm text-gray-400 mb-1">Preço Atual</div>
      <div className="text-3xl font-bold text-green-400">
        ${price.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
      {isRefetching && (
        <div className="text-xs text-blue-400 mt-2">
          🔄 Atualizando...
        </div>
      )}
    </div>
  );
}
