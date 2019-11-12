import * as React from "react";
interface Props {
    children: any;
    columnCount?: number;
}
interface State {
    columnCount: number;
    gutterWidth: number;
    gutterHeight: number;
}
export declare class Grid extends React.Component<Props, State> {
    state: {
        columnCount: number;
        gutterWidth: number;
        gutterHeight: number;
    };
    static getDerivedStateFromProps(props: Props, state: State): Props;
    render(): JSX.Element;
    calculate(size: {
        width: number | null;
        height: number | null;
    }): any;
}
export {};
