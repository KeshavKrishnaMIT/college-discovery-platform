"use client";

import { Heart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import CollegeCard from "@/components/college/CollegeCard";
import { useEffect, useState } from "react";

import { fetchColleges } from "@/lib/api";

export default function Home() {

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [colleges, setColleges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [compareColleges, setCompareColleges] = useState<number[]>([]);
  const [savedColleges, setSavedColleges] = useState<number[]>([]);

  const handleCompare = (id: number) => {

    if (compareColleges.includes(id)) {

      setCompareColleges(
        compareColleges.filter(
          (collegeId) => collegeId !== id
        )
      );

    } else {

      if (compareColleges.length < 3) {

        setCompareColleges([
          ...compareColleges,
          id,
        ]);

      }

    }

  };

  const handleSave = (id: number) => {

    if (savedColleges.includes(id)) {

      setSavedColleges(
        savedColleges.filter(
          (collegeId) => collegeId !== id
        )
      );

    } else {

      setSavedColleges([
        ...savedColleges,
        id,
      ]);

    }

  };

  useEffect(() => {

    const storedColleges =
      localStorage.getItem("savedColleges");

    if (storedColleges) {

      setSavedColleges(
        JSON.parse(storedColleges)
      );

    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "savedColleges",
      JSON.stringify(savedColleges)
    );

  }, [savedColleges]);

  useEffect(() => {

    async function loadColleges() {

      try {

        setLoading(true);

        const data = await fetchColleges();
        console.log(data);

        setColleges(data as any[]);

      } catch {

        setError("Failed to load colleges");

      } finally {

        setLoading(false);

      }

    }

    loadColleges();

  }, []);
const filteredColleges = colleges
  .filter((college) => {

    const matchesSearch = college.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      selectedLocation === "" ||
      college.location === selectedLocation;

    return matchesSearch && matchesLocation;

  })
  .sort((a, b) => {

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    if (sortBy === "fees-low") {
      return (
        Number(a.fees.replace(/[^0-9]/g, "")) -
        Number(b.fees.replace(/[^0-9]/g, ""))
      );
    }

    if (sortBy === "fees-high") {
      return (
        Number(b.fees.replace(/[^0-9]/g, "")) -
        Number(a.fees.replace(/[^0-9]/g, ""))
      );
    }

    return 0;

  });
  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />
<section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 px-8 py-24 text-center text-white shadow-2xl">
<div className="max-w-7xl mx-auto px-6 py-10"></div>
  <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-10 right-10 w-52 h-52 bg-blue-300/20 rounded-full blur-3xl"></div>

  <div className="relative z-10">

    <p className="uppercase tracking-[0.4em] text-sm text-blue-100 font-semibold">
      India’s Smart College Discovery Platform
    </p>

    <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">

      Find Your <br />

      Dream College

    </h1>

    <p className="mt-8 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">

      Compare colleges, explore placements, predict admissions,
      and make smarter career decisions.

    </p>

    <div className="flex flex-wrap items-center justify-center gap-6 mt-12">

      <div className="bg-white/10 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/20">
        <h2 className="text-4xl font-black">150+</h2>
        <p className="text-blue-100 mt-1">Top Colleges</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/20">
        <h2 className="text-4xl font-black">25K+</h2>
        <p className="text-blue-100 mt-1">Students Helped</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/20">
        <h2 className="text-4xl font-black">4.9★</h2>
        <p className="text-blue-100 mt-1">Platform Rating</p>
      </div>

    </div>

  </div>

</section>

<div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">

  <input
    type="text"
    placeholder="Search colleges..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 px-6 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm outline-none text-lg focus:ring-4 focus:ring-blue-100"
  />

  <select
    value={selectedLocation}
    onChange={(e) => setSelectedLocation(e.target.value)}
    className="px-6 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm outline-none text-lg focus:ring-4 focus:ring-blue-100"
  >
    <option value="">All Locations</option>
    <option value="New Delhi">New Delhi</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Chennai">Chennai</option>
  </select>

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="p-4 rounded-xl border border-slate-300 bg-white text-slate-700 outline-none"
  >

    <option value="">
      Sort By
    </option>

    <option value="rating">
      Highest Rating
    </option>

    <option value="lowFees">
      Lowest Fees
    </option>

    <option value="highFees">
      Highest Fees
    </option>

  </select>

</div>
{compareColleges.length === 0 && (

  <div className="text-center mt-16">

    <p className="text-slate-500 text-lg">
      Select colleges to compare
    </p>

  </div>

)}
      {compareColleges.length > 0 && (
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Compare Colleges
          </h2>

<div className="overflow-x-auto bg-white/60 backdrop-blur-2xl border border-white/30 rounded-[2rem] shadow-2xl">

  <table className="w-full overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900 text-white">
                  <th className="p-4">College</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Fees</th>
                  <th className="p-4">Rating</th>
                  <th className="p-4 text-left"></th>
                </tr>
              </thead>

              <tbody>
                {colleges
                  .filter((college) =>
                    compareColleges.includes(college.id)
                  )
                  .map((college) => (
                    <tr
  key={college.id}
  className="text-center border-b border-slate-200 text-slate-800 hover:bg-white/40 transition-all duration-300"
>
                      <td className="p-4 text-slate-700">
                        {college.name}
                      </td>

                      <td className="p-4 font-semibold text-slate-900">
                        {college.location}
                      </td>

                      <td className="p-4">
                        {college.fees}
                      </td>

                      <td className="p-4">
                        ⭐ {college.rating}
                      </td>
                      <td className="p-4">

  <button
    onClick={() =>
      setCompareColleges(
        compareColleges.filter(
          (id) => id !== college.id
        )
      )
    }
    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
  >
    Remove
  </button>

</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
{filteredColleges.length === 0 && (

  <div className="text-center mt-20">

    <h2 className="text-3xl font-bold text-slate-700">
      No colleges found
    </h2>

    <p className="text-slate-500 mt-3">
      Try changing search or filters
    </p>

  </div>

)}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-10 mt-6">
        {filteredColleges
  .slice(0, visibleCount)
  .map((college) => (
          <CollegeCard
            key={college.id}
            image={college.image}
            id={college.id}
            name={college.name}
            location={college.location}
            isSaved={savedColleges.includes(college.id)}
onSave={handleSave}
            fees={college.fees}
            rating={college.rating}
            onCompare={handleCompare}
          />
        ))}
      </section>
      {visibleCount < filteredColleges.length && (

  <div className="flex justify-center pb-16">

    <button
      onClick={() =>
        setVisibleCount(
          visibleCount + 4
        )
      }
      className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg"
    >
      Load More
    </button>

  </div>

)}
    </main>
  );
}