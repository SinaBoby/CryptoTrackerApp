import { displayLoading, hideLoading } from './loading.js';
export async function loadTechnicalChart(symbol) {
  try {
    
    await new TradingView.widget({
      width: 980,
      height: 610,
      symbol: `BINANCE:${symbol}`,
      interval: 'D',
      timezone: 'Europe/Amsterdam',
      theme: 'dark',
      style: '1',
      locale: 'en',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      withdateranges: true,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      hotlist: true,
      studies: ['MACD@tv-basicstudies'],
      container_id: `${symbol}`,
    });
    
  } catch (error) {
    console.log(error);
  }
}
