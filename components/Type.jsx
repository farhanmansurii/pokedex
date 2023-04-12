import React from "react";

export default function Type({ text }) {
  return (
    <div
      className={`px-3 py-1 rounded-full  hover:opacity-100 flex justify-center text-center text-sm text-white ${text === "Normal"
        ? "bg-gray-400"
        : text === "Fire"
          ? "bg-red-500"
          : text === "Water"
            ? "bg-blue-500"
            : text === "Grass"
              ? "bg-green-500"
              : text === "Fairy"
                ? "bg-pink-200"
                : text === "Electric"
                  ? "bg-yellow-500"
                  : text === "Ice"
                    ? "bg-blue-200"
                    : text === "Fighting"
                      ? "bg-red-600"
                      : text === "Poison"
                        ? "bg-purple-500"
                        : text === "Ground"
                          ? "bg-yellow-700"
                          : text === "Flying"
                            ? "bg-blue-300"
                            : text === "Psychic"
                              ? "bg-pink-500"
                              : text === "Bug"
                                ? "bg-green-400"
                                : text === "Rock"
                                  ? "bg-gray-800"
                                  : text === "Ghost"
                                    ? "bg-purple-700"
                                    : text === "Dragon"
                                      ? "bg-red-800"
                                      : text === "Dark"
                                        ? "bg-gray-700"
                                        : text === "Steel"
                                          ? "bg-gray-500"
                                          : "bg-gray-400"
        }`}
    >
      {text}
    </div>
  );
}
