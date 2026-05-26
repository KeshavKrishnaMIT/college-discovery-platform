"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { colleges } from "@/data/colleges";
import CollegeCard from "@/components/college/CollegeCard";

export default function PredictorPage() {

  const [rank, setRank] = useState("");
  const [exam, setExam] = useState("JEE Main");

const userRank = Number(rank);

const recommendedColleges = colleges.filter((college) => {

  if (!rank) return false;

  if (exam === "JEE Main") {
    return userRank <= college.cutoff.jeeMain;
  }

  if (exam === "BITSAT") {
    return userRank <= college.cutoff.bitsat;
  }

  if (exam === "VITEEE") {
    return userRank <= college.cutoff.viteee;
  }

  return false;

});
{
  recommendedColleges.length === 0 && (
    <div className="bg-white p-10 rounded-3xl shadow-lg text-center mt-10">

      <h2 className="text-3xl font-bold text-slate-800">
        No Colleges Found
      </h2>

      <p className="text-slate-600 mt-4 text-lg">
        Try a different exam or a better rank.
      </p>

    </div>
  )
}
  return (

    <main className="min-h-screen bg-slate-100">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center">

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
            College Predictor
          </h1>

          <p className="text-slate-600 mt-5 text-lg md:text-2xl">
            Predict colleges based on your exam rank
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 mt-14">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <select
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              className="p-5 rounded-2xl border border-slate-300 bg-white text-slate-800 outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            >

              <option>JEE Main</option>
              <option>BITSAT</option>
              <option>VITEEE</option>

            </select>

            <input
              type="number"
              placeholder="Enter your rank"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              className="p-5 rounded-2xl border border-slate-300 bg-white text-slate-800 outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />

          </div>

          <button className="w-full mt-8 bg-blue-600 text-white py-5 rounded-2xl text-xl font-bold hover:bg-blue-700 transition-all duration-300">
            Predict Colleges
          </button>

        </div>

        <div className="mt-16">

          <div className="flex items-center justify-between flex-wrap gap-4">

            <h2 className="text-4xl font-extrabold text-slate-900">
              Recommended Colleges
            </h2>

            <div className="bg-blue-100 text-blue-700 px-5 py-2 rounded-xl font-semibold">
              {recommendedColleges.length} Colleges Found
            </div>

          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">

            {recommendedColleges.map((college) => (

              <CollegeCard
                key={college.id}
                id={college.id}
                image={college.image}
                name={college.name}
                location={college.location}
                fees={college.fees}
                rating={college.rating}
                isSaved={false}
                onSave={() => {}}
                onCompare={() => {}}
              />

            ))}

          </section>

        </div>

      </section>

    </main>

  );

}