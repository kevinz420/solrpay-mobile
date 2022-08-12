import React from "react";
import {Button as KButton} from '@ui-kitten/components'
import { styled } from "tailwindcss-react-native";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface ButtonProps extends React.ComponentProps<typeof KButton> {
  color: "primary" | "secondary"; // primary is dark gray button, secondary is green button
}

const StyledBtn = styled(KButton, {classProps: ["onPress", "disabled"]})

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledBtn
      onPress={props.onPress}
      className={
        `w-1/3 border-0 rounded-lg ${
          props.color === "primary"
            ? "bg-gray-900"
            : "bg-green-700"
        }`}
    >
      {props.children}
    </StyledBtn>
  );
};
