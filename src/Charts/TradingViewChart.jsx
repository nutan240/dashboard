import React, { useEffect } from 'react';

const TradingViewChart = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      const widget = new window.TradingView.widget({
        // Define the container element where the chart will be rendered
        container_id: 'tv_chart_container',
        // Specify the symbol to be displayed
        symbol: 'NASDAQ:AAPL',
        // Specify the interval (e.g., '1D' for daily, '1W' for weekly)
        interval: 'D',
        // Specify the timezone
        timezone: 'Etc/UTC',
        // Specify the style
        theme: 'Light',
        // Specify the locale
        locale: 'en',
        // Specify the toolbar's display mode
        toolbar_bg: '#f1f3f6',
        // Specify the color of the text in the toolbar
        enable_publishing: false,
        allow_symbol_change: true,
        autosize: true,
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="tv_chart_container" style={{ width: '100%', height: '500px' }}></div>
  );
};

export default TradingViewChart;
