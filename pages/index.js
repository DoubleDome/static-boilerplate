import Head from 'next/head'

export default function Home() {
  async function getStaticProps(){
    console.log('-----------------> ehhlo google sheets');
  }
  return (
    <div className="container">
      <Head>
        <title>Hello World!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello World!</h1>
      </main>
    </div>
  );
}
