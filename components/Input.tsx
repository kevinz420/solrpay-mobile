import React from 'react';
import { Autocomplete, AutocompleteItem } from '@ui-kitten/components';
import { ProfileType } from '../interfaces/types';
import { styled } from "tailwindcss-react-native";

interface InputProps {
    placeholder: string;
    onSelect: (index: number) => void;
    isPayment: boolean;
    icon?: JSX.Element;
}

const StyledAuto = styled(Autocomplete, {classProps: ["placeholder", "onSelect", "value", "onChangeText", "accessoryLeft"]})

const movies = [
  { title: 'Star Wars' },
  { title: 'Back to the Future' },
  { title: 'The Matrix' },
  { title: 'Inception' },
  { title: 'Interstellar' },
];

export const Input: React.FC<InputProps> = (props) => {
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState(movies);

  const onSelect = () => {
  };

  const onChangeText = () => {
    
  };

  const renderOption = (item: any, index: any) => (
    <AutocompleteItem
      key={index}
      title={item.title}
    />
  );

  return (
    <StyledAuto
      className="bg-gray-700 rounded-lg border-0"
      placeholder={props.placeholder}
      accessoryLeft={props.icon}
      value={value}
      onSelect={props.onSelect}
      onChangeText={onChangeText}>
      {data.map(renderOption)}
    </StyledAuto>
  );
};