export interface ButtonRadioGroupProps {
  selection: string;
  // eslint-disable-next-line no-unused-vars
  setSelection: (value: string) => void;
  selections: string[];
  className?: string;
  suffix?: Record<string, string>;
}

export const ButtonRadioGroup = ({
  selection,
  setSelection,
  selections,
  suffix,
  className = 'btn data-[selected=true]:btn-dark btn-light data-[selected=false]:btn-clear'
}: ButtonRadioGroupProps) => {
  return (
    <div className="flex gap-2">
      {selections.map((value) => (
        <button
          key={value}
          data-selected={selection === value}
          className={className}
          onClick={() => setSelection(value)}
        >
          {value}
          {suffix?.[value] ?? ''}
        </button>
      ))}
    </div>
  );
};
