import { errorHandler } from "./error.js";
export async function loadTechnicalChart(symbol) {
  try {
    
    await new TradingView.widget({
      autosize:true,
      symbol: `BINANCE:${symbol}`,
      interval: 'D',
      timezone: 'Europe/Amsterdam',
      theme: 'dark',
      style: '1',
      locale: 'en',
      toolbar_bg: '#f1f3f6',
      enable_publishing: true,
      withdateranges: true,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      details:true,
      hotlist: true,
      studies: ['MACD@tv-basicstudies'],
      container_id: `${symbol}`,
    });
    
  } catch (error) {
    errorHandler(error)
  }
}
