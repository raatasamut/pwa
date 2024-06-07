import type { AppProps } from 'next/app';
import '@styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/pwa-service-worker.js')
          .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  return <Component {...pageProps} />;
}
