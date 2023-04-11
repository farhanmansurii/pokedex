import React, { useState } from "react";
import EvolutionPopup from "./PokemonEvolutions";
import Type from "./Type";
import Modal from "./Modal";
import client from "@/apollo/apollo-client";
import { gql } from "@apollo/client";
import fetchEvolution from "@/lib/fetchEvolutions";

export default function PokemonDetails({ pokemon }) {
  const { id, name, image, height, weight, classification, types, weaknesses, resistant } = pokemon;
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
    <div className="pokedex bg-gray-100 rounded-lg  shadow-md px-6  min-h-screen flex flex-col items-center">
      <div className="pokedex__screen__details__name text-4xl font-bold capitalize my-10">{name} <span className="pokedex__screen__details__number text-gray-500 text-4xl">#{pokemon.number}</span></div>

      <div className="pokedex__screen gap-10 bg-white rounded-lg flex justify-center flex-col shadow-md ">
        <div className="flex flex-row items-center p-10 ">

          <div className="pokedex__screen__image-container">
            <img className="pokedex__screen__image h-72 w-72 p-10 object-contain" src={image} alt={name} />
          </div>
          <div className="pokedex__screen__details mt-4 grid grid-cols-2 gap-x-10">
            <div className=" mt-4">
              <div className=" font-bold text-gray-500">Height:</div>
              <div className=" text-gray-700">{height.maximum} </div>
            </div>
            <div className=" mt-2">
              <div className=" font-bold text-gray-500">Weight:</div>
              <div className=" text-gray-700">{weight.maximum} </div>
            </div>
            <div className=" mt-2">
              <div className=" font-bold text-gray-500">Classification:</div>
              <div className=" text-gray-700 capitalize">{classification}</div>
            </div>
            <div className=" mt-2">
              <div className=" font-bold text-gray-500">Type:</div>
              <div className=" text-gray-700 grid grid-cols-3 grid-flow-row-dense grid-rows-2 gap-2 ">
                {types.map((type, index) => <Type key={index} text={type} />)}
              </div>
            </div>
            <div className=" mt-2">
              <div className=" font-bold text-gray-500">Weakness:</div>
              <div className=" text-gray-700 grid grid-cols-3 grid-rows-2 gap-2 ">
                {weaknesses.map((weakness, index) => <Type key={index} text={weakness} />)}
              </div>
            </div>
            <div className=" mt-2">
              <div className=" font-bold text-gray-500">Resistance:</div>
              <div className=" text-gray-700 grid grid-cols-3 grid-rows-2 gap-2 ">
                {resistant.map((resistance, index) => <Type key={index} text={resistance} />)}
              </div>
            </div>
          </div>
        </div>
        <button className="bg-red-500 px-10  py-3 rounded-b-lg text-white" onClick={() => { setOpen(true), handleShowEvolutions() }}>Show Evolutions</button>

      </div>

      {
        open &&
        <Modal evolutions={evolutions} open={open} setOpen={setOpen} />
      }</div>)
}
