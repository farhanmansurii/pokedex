import React, { useState } from "react";
import Type from "./Type";
import Modal from "./Modal";

import fetchEvolution from "@/lib/fetchEvolutions";
import Link from "next/link";

export default function PokemonDetails({ pokemon }) {
  const { id, name, image, height, number, weight, classification, types, weaknesses, resistant } = pokemon;
  const [open, setOpen] = useState(false)
  const [evolutions, setEvolutions] = useState(null);

  const handleShowEvolutions = async () => {
    console.log("clicked");

    if (!evolutions)
    {
      const data = await fetchEvolution(id);

      setEvolutions(data);
    }
  };
  return (
    <div className="  bg-[url('https://i.imgur.com/fmsNNrp.png')] shadow-md px-6  min-h-screen flex flex-col items-center">

      <div className=" bg-white rounded-xl mt-10 flex justify-center flex-col shadow-md ">
        <div className="p-4 flex gap-1 items-center">
          <Link href='/'>

            <svg
              viewBox="0 0 24 24"
              fill="red"
              className="w-12 mr-5 h-12 p-2 rounded-full border-2 border-red-500"
            >
              <path d="M12.74 2.32a1 1 0 00-1.48 0l-9 10A1 1 0 003 14h2v7a1 1 0 001 1h12a1 1 0 001-1v-7h2a1 1 0 001-1 1 1 0 00-.26-.68z" />
            </svg></Link>
          <div className="text-4xl  font-semibold">{name}</div>
          <div className="text-xl  text-gray-500 font-semibold">#{number}</div>
        </div>
        <div className="flex flex-row items-center p-1 ">

          <div className="">
            <img className=" h-72 w-72 p-10 object-contain" src={image} alt={name} />
          </div>
          <div className="  grid  p-4 rounded-xl grid-cols-2 gap-2 gap-x-4">
            <div className="  p-2 flex rounded-xl gap-4">
              <div className=" font-semibold  ">Height:</div>
              <div className=" ">{height.maximum} </div>
            </div>
            <div className="  p-2 flex rounded-xl gap-4">
              <div className=" font-semibold  ">Weight:</div>
              <div className=" ">{weight.maximum} </div>
            </div>
            <div className="  p-2 h-fit rounded-xl">
              <div className=" font-semibold mb-2 ">Classification:</div>
              <div className="  capitalize">{classification}</div>
            </div>
            <div className="  p-2 h-fit rounded-xl">
              <div className=" font-semibold mb-2 ">Type</div>
              <div className="  grid grid-cols-2  grid-rows-1 gap-2 ">
                {types.map((type, index) => <Type key={index} text={type} />)}
              </div>
            </div>
            <div className="  p-2 h-fit rounded-xl">
              <div className=" font-semibold mb-2 ">Weakness:</div>
              <div className="  grid grid-cols-3 grid-rows-2 gap-2 ">
                {weaknesses.map((weakness, index) => <Type key={index} text={weakness} />)}
              </div>
            </div>
            <div className="  p-2 rounded-xl">
              <div className=" font-semibold mb-2 ">Resistance:</div>
              <div className="  grid grid-cols-3 grid-rows-2 gap-2 ">
                {resistant.map((resistance, index) => <Type key={index} text={resistance} />)}
              </div>
            </div>
          </div>
        </div>
        <button className="border-4 text-red-500 font-semibold border-red-500 px-10  my-5 w-fit py-3 rounded-full mx-auto " onClick={() => { setOpen(true), handleShowEvolutions() }}>Show Evolutions</button>

      </div>

      {
        open &&
        <Modal evolutions={evolutions} open={open} setOpen={setOpen} />
      }</div>)
}
