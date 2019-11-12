import * as React from "react";
import { SizeMe } from 'react-sizeme'

interface Props {
    /** react divs go here. see readme. */
    children: any;
    /** how many columns do you want? */
    columnCount?: number;
    /** pixel count between columns. default: 10 */
    gutterWidth?: number;
    /** pixel count between rows. default: 10 */
    gutterHeight?: number;
}

interface State {
    columnCount: number;
    gutterWidth: number;
    gutterHeight: number;
}

export class Grid extends React.Component<Props, State> {
    state = {
        columnCount: 4,
        gutterWidth: 10,
        gutterHeight: 10
    }

    static getDerivedStateFromProps(props: Props, state: State) {
        // var newstate = {}
        // if (props.columnCount) { newstate.columnCount }
        return props;
    }

    render() {

        return (
            <SizeMe>
                {({ size }) => {
                    var gridcalc = this.calculate(size);
                    return (<div style={{}}>
                        {gridcalc}
                        <div style={{ clear: "both" }} />
                    </div>)
                }}
            </SizeMe>
        )
    }

    calculate(size: { width: number | null, height: number | null }) {

        if (!size.width) { return []; }

        var rows: any = [];

        //calc number of rows
        var numrows = Math.ceil(this.props.children.length / this.state.columnCount);

        var currow: any = [];
        for (var c = 0; c < this.props.children.length; c++) {
            var rownum = Math.floor(c / this.state.columnCount);
            var column = c % this.state.columnCount
            var lastcolumn = (column == (this.state.columnCount - 1)) ? true : false;
            var lastrow = (rownum == (numrows - 1)) ? true : false;

            if (((c / this.state.columnCount) % 1) != 0) {
                currow.push(<div key={c + "margin"} style={{ width: this.state.gutterWidth, height: "100%" }} />)
            }

            var width = (size.width - (this.state.gutterWidth * (this.state.columnCount - 1))) / this.state.columnCount

            var style = {
                ...this.props.children[c].props.style,
                ...{ width }
            };

            //console.log("column", column)
            currow.push(React.cloneElement(this.props.children[c], { style, key: c }))

            if ((c == this.props.children.length - 1) || (column == (this.state.columnCount - 1))) {
                //console.log("end of row " + rownum + "(" + c + ")")
                var style: any = { display: "flex", flexDirection: "row" }
                if (lastrow == false) { style.marginBottom = this.state.gutterHeight }
                rows.push(<div key={Math.random()} style={style}>{currow}</div>);
                currow = [];
            }
        }

        return rows;
    }
}
