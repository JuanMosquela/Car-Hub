import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SearchManuFacturerProps {
    manufacturer : string;
    setManuFacturer: (manufacturer : string) => void;
}