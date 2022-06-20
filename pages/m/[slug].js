import React, { useState } from 'react'
import Image from 'next/image'
import Header from '../../components/Header';
import styles from '../../styles/Slug.module.css'
import { AiFillStar, AiOutlineClose } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import { BsFillPlayFill } from 'react-icons/bs'


const Slug = ({ results, casts, crews }) => {

    const [showModal, setShowModal] = useState(false);

    const BASE_URL = 'https://image.tmdb.org/t/p/original'
    const src = BASE_URL + results.images.posters[0].file_path
    const src2 = BASE_URL + results.poster_path

    const trailor_src = results.videos.results[0].key

    return (
        <div>
            <Header />
            <div className={`p-8 backdrop-brightness-50 ${styles.hero}`}>

                <div className='flex  flex-col md:flex-row justify-start items-center md:space-x-10'>
                    <Image src={src || src2} height={450} width={300} objectFit='contain' className='rounded-lg' />
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-4xl text-white mt-2'>{results.title || results.original_title} <span className='font-thin'>({results.release_date.split("-")[0]})</span></h2>

                        <p className='inline-flex items-center  space-x-2'>
                            <span>{results.release_date.split("-").reverse().join("/")} </span>
                            <span>•</span>

                            {results.genres.map((genre) => (
                                <p className='' key={genre.id}>{genre.name},</p>
                            ))}
                        </p>

                        <div className='flex items-center space-x-4 my-4'>
                            <span className='inline-flex items-center text-lg'><AiFillStar className='h-6 w-6 text-yellow-500 mr-1' /> {results.vote_average}</span>
                            <span className='inline-flex items-center text-lg'><img src='/vote.jpg' className='h-6 w-6 text-orange-600  mr-1' /> {results.vote_count}</span>
                            <span className='inline-flex items-center text-lg'><FcLike className='h-6 w-6  mr-1' /> {results.vote_count}</span>
                            <button onClick={() => setShowModal(true)} className='inline-flex select-none items-center text-lg cursor-pointer hover:opacity-90 hover:text-gray-300 text-white'><BsFillPlayFill className='h-6 w-6  mr-1' />Play Trailor</button>
                        </div>


                        {showModal ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between text-black p-5 border-b border-solid  rounded-t">
                                                <h3 className="text-3xl font-semibold">
                                                    Trailor
                                                </h3>

                                                <AiOutlineClose onClick={() => setShowModal(false)} className="bg-gray-300 cursor-pointer h-6 w-6 z-50 text-4xl" />

                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                                <iframe width={560} height={315} src={`https://www.youtube.com/embed/${trailor_src}`} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}


                        <blockquote className='italic select-none text-left text-[#BABBC2]'>{results.tagline}</blockquote>


                        <div className='my-4 space-y-3'>
                            <h3 className='text-xl text-white'>Overview</h3>
                            <p className='text-sm'>{results.overview.split(".")[0]}.</p>
                        </div>


                        <div className='grid grid-cols-3 md:grid-cols-4 my-4'>
                            {crews.map((crew) => {
                                if (crew.job == 'Producer' || crew.job == 'Director') return <div className='m-4' key={crew.name}>
                                    <h4 className='font-semibold text-white'>{crew.name}</h4>
                                    <p>{crew.job}</p>
                                </div>

                                return
                            })}
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}

export default Slug

export async function getServerSideProps(context) {
    const slug = await context.query.slug;

    const API_KEY = process.env.API_KEY;
    const request = await fetch(`https://api.themoviedb.org/3/movie/${slug}?api_key=${API_KEY}&append_to_response=images,videos,credits`).then((res) => res.json());

    return {
        props: { results: request, casts: request.credits.cast, crews: request.credits.crew }
    }
}