import React from 'react'
import { arrow, box, bulb, home, logowhite, plus, round, sound, whitear } from '../assets'
import { e, g, x, y, h } from '../assets'
import "../index.css"

export const Main = () => {

    // const show = ()=>

    return (
        <div className="max-w-screen-xl  mx-auto px-4">
            <div className="py-10">
                <div className="flex items-center space-x-1">
                    <img className='w-5' src={home} alt="Home" />
                    <img src={arrow} alt="Arrow" />
                    <p>Flashcard</p>
                    <img src={arrow} alt="Arrow" />
                    <p>Mathematics</p>
                    <img src={arrow} alt="Arrow" />
                    <p className='text-blue-900'>Relations and Functions</p>
                </div>
                <div className='p-5 -mt-10'>
                    <p className='text-3xl text-blue-950 font-semibold'>Relations and Functions (Mathematics)</p>
                </div>
                <div className="nav-list w-fit max-w-md mx-auto">

                <ul class=" grid grid-cols-3 md:flex md:flex-row space-x-5 text-2xl">
                    <li className="font-bold text-blue-800 cursor-pointer "> <a href="#">Study</a></li>
                    <li className="font-bold text-blue-800 cursor-pointer "><a href="#">Quiz</a></li>
                    <li className="font-bold text-blue-800 cursor-pointer "><a href="#">Test</a></li>
                    <li className="font-bold text-blue-800 cursor-pointer "><a href="#">Game</a></li>
                    <li className="font-bold text-blue-800 cursor-pointer "><a href="#">Other</a></li>
                </ul>

                    {/* <ul className=' grid grid-cols-3 md:flex md:flex-row space-x-5 text-2xl'>
                        <li>
                            <a href='/' className='font-bold text-blue-800 cursor-pointer'>Study</a>
                        </li>
                        <li className='font-bold text-blue-800 cursor-pointer'>
                            <a href='/' className='font-bold text-blue-800 cursor-pointer'>Quiz</a>
                        </li>
                        <li className='font-bold text-blue-800 cursor-pointer'>
                            <a href='/' className='font-bold text-blue-800 cursor-pointer'>Test</a>
                        </li>
                        <li className='font-bold text-blue-800 cursor-pointer'>
                            <a href='/' className='font-bold text-blue-800 cursor-pointer'>Game</a>
                        </li>
                        <li className='font-bold text-blue-800 cursor-pointer'>
                            <a href='/' className='font-bold text-blue-800 cursor-pointer'>Other</a>
                        </li>
                    </ul> */}
                </div>
                <div className="box mt-3">
                    <div className="mainText w-full max-w-md mx-auto py-28 px-8 rounded-2xl gradient relative">
                        <div className="top flex absolute top-4 w-full left-0 justify-around space-x-20 p-1">
                            <img className='w-3' src={sound} alt="Sound" />
                            <img className='w-3' src={bulb} alt="Bulb" />
                        </div>
                        <p className='text-white font-bold w-fit mx-auto text-2xl'>9 + 6 + 7x + - 2x - 3</p>
                    </div>
                    <div className="bottom w-fit max-w-md mx-auto mt-3 flex space-x-10 items-center">
                        <img className='w-5' src={round} alt="Round" />
                        <div className='flex space-x-5 items-center'>
                            <img className='w-7' src={whitear} alt="Arrow" />
                            <p className='text-black font-bold'>01/10</p>
                            <img className='rotate-180 w-7' src={whitear} alt="Arrow" />
                        </div>
                        <img className='w-5' src={box} alt="Box" />
                    </div>
                    <div className="bottomNav flex justify-between flex-col md:flex-row md:max-w-3xl  mx-auto items-center mt-3">
                        <div className='flex items-center'>
                            <img className='w-20' src={logowhite} alt="Logo" />
                            <div className='flex flex-col'>
                                <p className='text-xs'>powered by</p>
                                <div className="chars flex items-center">
                                    <img className='w-4' src={h} alt="h" />
                                    <img className='w-4' src={y} alt="y" />
                                    <img className='w-4' src={g} alt="g" />
                                    <img className='w-4' src={g} alt="g" />
                                    <img className='w-4' src={e} alt="e" />
                                    <img className='-mt-2' src={x} alt="x" />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <img className='w-10' src={plus} alt="Plus" />
                            <p className='text-blue-700 font-bold text-2xl'>Create Flashcards</p>
                        </div>
                    </div>
                </div>
                <div className="questions mt-5">
                    <p className='text-3xl font-bold'>FAQ</p>
                    <div className="questionBox mt-3 space-y-3">
                        <div className="q1 w-[100%] md:w-[60%] flex text-sm rounded-lg justify-between items-center p-3 border border-2 border-blue-500">
                            <p>Can education flashcards be used for all age groups?</p>
                            <img className='rotate-90' src={arrow} alt="Arrow" />
                        </div>
                        <div className="q2 w-[100%] md:w-[60%] flex text-sm rounded-lg justify-between items-center p-3 border border-2 border-blue-500">
                            <p>How do education flashcards work?</p>
                            <img className='rotate-90' src={arrow} alt="Arrow" />
                        </div>
                        <div className="q3 w-[100%] md:w-[60%] flex text-sm rounded-lg justify-between items-center p-3 border border-2 border-blue-500">
                            <p>Can education flashcards be used for test preparation?</p>
                            <img className='rotate-90' src={arrow} alt="Arrow" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
