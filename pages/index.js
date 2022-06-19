import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import styles from '../styles/Home.module.css'
import requests from '../utils/requests'

export default function Home({results}) {
  // console.log(results)
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Hulu Clone Created by Sujeet Gund" />
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" />
      </Head>
      
      <Header />
      <Nav />
      <Results results={results} />
      

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = await context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchActionMovies.url}`).then((res) => res.json());
  // console.log(genre)
  return {
    props: {results: request.results,}, // will be passed to the page component as props
  }
}