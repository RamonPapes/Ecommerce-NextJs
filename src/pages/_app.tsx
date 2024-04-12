// src/pages/_app.js
import MainLayout from '../layouts/MainLayout';
import '../app/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps } : AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}

export default MyApp;
