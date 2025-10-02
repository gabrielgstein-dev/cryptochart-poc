'use client';

interface PeriodSelectorProps {
  selectedDays: number;
  onPeriodChange: (days: number) => void;
}

const dayOptions = [
  { value: 1, label: '24 Horas' },
  { value: 7, label: '7 Dias' },
  { value: 30, label: '30 Dias' },
  { value: 90, label: '90 Dias' },
];

export function PeriodSelector({ selectedDays, onPeriodChange }: PeriodSelectorProps) {
  return (
    <div className="flex-1">
      <label className="block text-sm font-medium mb-2 text-gray-300">
        Período
      </label>
      <select
        value={selectedDays}
        onChange={(e) => onPeriodChange(Number(e.target.value))}
        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        {dayOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
