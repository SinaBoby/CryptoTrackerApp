export async function loadLightChart(coinId, id) {
  try {
    await new TradingView.MediumWidget({
      symbols: [[`BINANCE:${coinId}|1D`]],
      chartOnly: false,
      width: '100%',
      height: '500px',
      locale: 'en',
      colorTheme: 'dark',
      gridLineColor: 'rgba(42 ,46, 57, 0)',
      fontColor: '#787B86',
      isTransparent: false,
      autosize: false,
      showVolume: false,
      scalePosition: 'no',
      scaleMode: 'Normal',
      fontFamily: 'Trebuchet MS, sans-serif',
      noTimeScale: false,
      valuesTracking: '1',
      chartType: 'area',
      lineColor: '#2962FF',
      bottomColor: 'rgba(41, 98, 255, 0)',
      topColor: 'rgba(41, 98, 255, 0.3)',
      container_id: `${id}`,
    });
  } catch (error) {
    console.log(error, 'someThing went wrong');
  }
}
