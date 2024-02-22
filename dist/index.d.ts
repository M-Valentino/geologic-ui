/// <reference types="react" />
interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

declare type Props$1 = {
    children: any;
};
declare const Center: (props: Props$1) => JSX.Element;

declare type Props = {
    children: any;
};
declare const Blink: (props: Props) => JSX.Element;

export { Blink, Button, Center };
