import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Hulu Clone Created by Sujeet Gund" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      
      <Header />
      <Nav />
      <Results results={results} />
      <Footer/>

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = await context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchActionMovies.url}`).then((res) => res.json());

  return {
    props: {results: request.results,}, // will be passed to the page component as props
  }
}