"use client"
import React from 'react'
import Countdown from 'react-countdown';

const endingDate = new Date("2023-12-29")

const CountDowm = () => {
  return (
    <Countdown className="font-bold text-5xl text-yellow-300" date={endingDate} />
  )
}

export default CountDowm