interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function JobsSearch({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Title, skill, course or company"
      className="w-full max-w-md px-4 py-3 border rounded-lg outline-none"
    />
  );
}
