import { AIModel } from '@/types/types';
import { FC } from 'react';

interface Props {
  model: AIModel;
  onChange: (model: AIModel) => void;
}

export const ModelSelect: FC<Props> = ({ model, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as AIModel);
  };

  return (
    <select
      className="h-[40px] w-[180px] rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200"
      value={model}
      onChange={handleChange}
    >
      <option value="gpt-3.5-turbo">GPT-3.5</option>
      <option value="gpt-4">GPT-4</option>
      <option value="claude-2">Claude 2</option>
      <option value="claude-instant-1">Claude Instant</option>
    </select>
  );
};