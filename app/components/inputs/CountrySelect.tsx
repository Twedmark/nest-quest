"use client";

import useCountries from "@/app/hooks/useCountries";
import Select, { Theme } from "react-select";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => {
          onChange(value as CountrySelectValue);
        }}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},{" "}
              <span className="ml-1 text-neutral-500">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "border-2 p-3",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => {
          const newTheme = {
            ...theme,
            borderRadius: 6,
            colors: {
              ...theme.colors,
              primary: "black",
              primary25: fullConfig.theme?.colors?.nestLight || "#A4BE7B",
            },
          };
          return newTheme as Theme;
        }}
      />
    </div>
  );
};

export default CountrySelect;
