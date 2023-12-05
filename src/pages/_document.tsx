import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' href='/favicon.png' sizes='any' />
				<title> Amazon | Page </title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
