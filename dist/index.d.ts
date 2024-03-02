interface ButtonProps {
    label: string;
    size?: string;
    color?: string;
    labelColor?: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

declare type Props$2 = {
    children: any;
};
declare const Center: (props: Props$2) => JSX.Element;

declare type Props$1 = {
    children: any;
};
declare const Blink: (props: Props$1) => JSX.Element;

interface HRProps {
    size?: string;
    color?: string;
}
declare const HR: (props: HRProps) => JSX.Element;

interface IconProps {
    name: string;
    size?: string;
}
declare const Icon: (props: IconProps) => JSX.Element;

declare type Props = {
    size?: any;
};
declare const UnderConstruction: (props: Props) => JSX.Element;

export { Blink, Button, Center, HR, Icon, UnderConstruction };
