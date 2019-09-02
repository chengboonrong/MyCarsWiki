import Head from 'next/head';

const HeadTitle = props => (
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <link rel="manifest" href="/static/manifest.json"></link> */}
    </Head>
);

export default HeadTitle;