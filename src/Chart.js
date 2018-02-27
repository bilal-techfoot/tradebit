import React from "react";
import PropTypes from "prop-types";

import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import { discontinuousTimeScaleProvider } from "./lib/scale";

import { ChartCanvas, Chart, ZoomButtons } from "react-stockcharts";
import {
    BarSeries,
    LineSeries,
    MACDSeries
} from "./lib/series";
import { XAxis, YAxis } from "./lib/axes";
import {
    CrossHairCursor,
    CurrentCoordinate,
    MouseCoordinateX,
    MouseCoordinateY
} from "./lib/coordinates";

import {
    OHLCTooltip,
    MovingAverageTooltip,
} from "./lib/tooltip";
import {
    ema,
    macd,
    change,
    elderImpulse
} from "./lib/indicator";
import { fitWidth } from "./lib/helper";
import { last } from "./lib/utils";
import { HoverTooltip } from "./lib/tooltip";
const dateFormat = timeFormat("%Y-%m-%d");
const numberFormat = format(".2f");

function tooltipContent() {
    return ({ currentItem, xAccessor }) => {
        return {
            x: dateFormat(xAccessor(currentItem)),
            y: [
                {
                    label: "open",
                    value: currentItem.open && numberFormat(currentItem.open)
                },
                {
                    label: "high",
                    value: currentItem.high && numberFormat(currentItem.high)
                },
                {
                    label: "low",
                    value: currentItem.low && numberFormat(currentItem.low)
                },
                {
                    label: "close",
                    value: currentItem.close && numberFormat(currentItem.close)
                }
            ].filter(line => line.value)
        };
    };
}

const macdAppearance = {
    stroke: {
        macd: "#FF0000",
        signal: "#00F300"
    },
    fill: {
        divergence: "#4682B4"
    }
};

class OHLCChartWithElderImpulseIndicator extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleReset = this.handleReset.bind(this);

    }
    handleReset() {

        this.setState({
            suffix: this.state.suffix + 1
        });
    }
    componentWillMount() {
        this.setState({
            suffix: 1
        });
    }
    render() {
        const changeCalculator = change();


        const ema12 = ema()
            .id(1)
            .options({ windowSize: 12 })
            .merge((d, c) => {
                d.ema12 = c;
            })
            .accessor(d => d.ema12);


        const ema50 = ema()
            .id(2)
            .options({ windowSize: 50 })
            .merge((d, c) => {
                d.ema50 = c;
            })
            .accessor(d => d.ema50);

        const macdCalculator = macd()
            .options({
                fast: 12,
                slow: 26,
                signal: 9
            })
            .merge((d, c) => {
                d.macd = c;
            })
            .accessor(d => d.macd);

        const elderImpulseCalculator = elderImpulse()
            .macdSource(macdCalculator.accessor())
            .emaSource(ema12.accessor());

        const { type, data: initialData, ratio } = this.props;

        const calculatedData = elderImpulseCalculator(
            macdCalculator(ema12(ema50(changeCalculator(initialData))))
        );
        const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
            d => d.date
        );
        const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
            calculatedData
        );

        const start = xAccessor(last(data));
        const end = xAccessor(data[Math.max(0, data.length - 150)]);
        const xExtents = [start, end];

        return (
            <ChartCanvas
                height={500}
                width={1000}
                ratio={ratio}
                mouseMoveEvent={true}
                panEvent={false }
                zoomEvent={true}
                clamp={true}
                seriesName={`MSFT_${this.state.suffix}`}
                data={data}
                xScale={xScale}
                xAccessor={xAccessor}
                displayXAccessor={displayXAccessor}
                xExtents={xExtents}>
                <Chart
                    id={1}
                    height={200}
                    yExtents={d => [d.high, d.low]}
                    padding={{ left: 10, right: 10, top: 10, bottom: 10 }}
                    origin={(w, h) => [0, 0]}>
                    <XAxis  axisAt="bottom" orient="bottom" showTicks={false} />
                    <YAxis yAccessor={d => d.low} axisAt="right" orient="right"  />

                    <MouseCoordinateY
                        at="right"
                        orient="right"
                    displayFormat={format(".2f")}/>

                    <LineSeries yAccessor={d => d.high} stroke={ema12.stroke()} />
                    <LineSeries yAccessor={d => d.low} stroke={ema50.stroke()} />

                    <CurrentCoordinate
                        yAccessor={d => d.low}
                        fill={ema50.stroke()}/>
                    <CurrentCoordinate
                        yAccessor={d => d.high}
                        fill={ema12.stroke()}
                        />
                    <HoverTooltip
                        yAccessor={d => d.ema50}
                        tooltipContent={tooltipContent()}
                        fontSize={15}
                        />

                    <OHLCTooltip origin={[-40, -10]} />

                </Chart>
                <Chart
                    id={2}
                    height={100}
                    yExtents={d => d.volume}
                    padding={{ left: 10, right: 10, top: 10, bottom: 10 }}
                    origin={(w, h) => [0, 200]}>
                    <YAxis
                        axisAt="left"
                        orient="left"
                        ticks={5}
                        tickFormat={format(".2s")}
                        />

                    <MouseCoordinateY
                        at="left"
                        orient="left"
                        displayFormat={format(".4s")}
                        />

                    <BarSeries
                        yAccessor={d => d.volume}
                        fill={d => (d.close > d.open ? "#6BA583" : "#FF0000")}
                        opacity={0.4}
                        />
                    <ZoomButtons onReset={this.handleReset} />
                </Chart>
                <Chart
                    id={3}
                    height={100}
                    yExtents={macdCalculator.accessor()}
                    origin={(w, h) => [0, h - 150]}
                    padding={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                    <XAxis axisAt="bottom" orient="bottom" />
                    <YAxis axisAt="right" orient="right" ticks={2} />

                    <MouseCoordinateX
                        at="bottom"
                        orient="bottom"
                        displayFormat={timeFormat("%Y-%m-%d")}
                        />
                    <MouseCoordinateY
                        at="right"
                        orient="right"
                        displayFormat={format(".2f")}
                        />

                    <MACDSeries yAccessor={d => d.macd} {...macdAppearance} />
                </Chart>

                <CrossHairCursor />
        </ChartCanvas>
    );
    }
}

OHLCChartWithElderImpulseIndicator.propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    ratio: PropTypes.number.isRequired,
    type: PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

OHLCChartWithElderImpulseIndicator.defaultProps = {
    type: "svg"
};
OHLCChartWithElderImpulseIndicator = fitWidth(
    OHLCChartWithElderImpulseIndicator
);

export default OHLCChartWithElderImpulseIndicator;
