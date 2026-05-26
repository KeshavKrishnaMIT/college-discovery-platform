import Image from "next/image";
import { colleges } from "@/data/colleges";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CollegeDetails({
  params,
}: Props) {

  const { id } = await params;

  const college = colleges.find(
    (c) => c.id === Number(id)
  );

  if (!college) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-slate-100">

        <h1 className="text-5xl font-black text-slate-800">
          College not found
        </h1>

      </div>

    );

  }

  return (

    <main className="min-h-screen bg-slate-100 px-4 md:px-8 py-10">

      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-2xl rounded-[3rem] shadow-2xl border border-white/40 overflow-hidden">

        <div className="relative w-full h-[300px] md:h-[550px] overflow-hidden">

          <Image
            src={college.image}
            alt={college.name}
            fill
            priority
            className="object-cover hover:scale-105 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute bottom-10 left-8 md:left-14">

            <div className="bg-white/20 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl inline-block shadow-xl">

              <p className="text-white font-semibold tracking-wide">
                🎓 Premium College Profile
              </p>

            </div>

          </div>

        </div>

        <div className="p-6 md:p-12">

          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8">

            <div>

              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">

                {college.name}

              </h1>

              <p className="text-slate-500 mt-5 text-xl md:text-2xl font-medium">

                📍 {college.location}

              </p>

            </div>

            <div className="flex flex-wrap gap-5">

              <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 px-6 py-4 rounded-2xl shadow-lg">

                <p className="text-sm text-yellow-700 font-semibold">
                  Rating
                </p>

                <h2 className="text-3xl font-black text-yellow-800">
                  ⭐ {college.rating}
                </h2>

              </div>

              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-4 rounded-2xl shadow-lg">

                <p className="text-sm text-blue-700 font-semibold">
                  Annual Fees
                </p>

                <h2 className="text-3xl font-black text-slate-900">
                  {college.fees}
                </h2>

              </div>

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

            <div className="bg-gradient-to-br from-white to-slate-100 p-8 rounded-[2rem] shadow-lg border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

              <h3 className="text-2xl font-black text-slate-900">
                Ranking
              </h3>

              <p className="mt-4 text-lg text-slate-600 leading-8">
                {college.ranking}
              </p>

            </div>

            <div className="bg-gradient-to-br from-white to-slate-100 p-8 rounded-[2rem] shadow-lg border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

              <h3 className="text-2xl font-black text-slate-900">
                Students
              </h3>

              <p className="mt-4 text-lg text-slate-600 leading-8">
                {college.students}
              </p>

            </div>

            <div className="bg-gradient-to-br from-white to-slate-100 p-8 rounded-[2rem] shadow-lg border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

              <h3 className="text-2xl font-black text-slate-900">
                Placements
              </h3>

              <p className="mt-4 text-lg text-slate-600 leading-8">
                {college.placements}
              </p>

            </div>

            <div className="bg-gradient-to-br from-white to-slate-100 p-8 rounded-[2rem] shadow-lg border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

              <h3 className="text-2xl font-black text-slate-900">
                Highest Package
              </h3>

              <p className="mt-4 text-lg text-slate-600 leading-8">
                {college.highestPackage}
              </p>

            </div>

            <div className="bg-gradient-to-br from-white to-slate-100 p-8 rounded-[2rem] shadow-lg border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

              <h3 className="text-2xl font-black text-slate-900">
                Hostel
              </h3>

              <p className="mt-4 text-lg text-slate-600 leading-8">
                {college.hostel}
              </p>

            </div>

            <div className="bg-gradient-to-br from-white to-slate-100 p-8 rounded-[2rem] shadow-lg border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

              <h3 className="text-2xl font-black text-slate-900">
                NIRF Ranking
              </h3>

              <p className="mt-4 text-lg text-slate-600 leading-8">
                {college.nirf}
              </p>

            </div>

          </div>

          <div className="mt-20">

            <h2 className="text-4xl font-black text-slate-900">
              Courses Offered
            </h2>

            <div className="flex flex-wrap gap-5 mt-8">

              {college.courses.map((course) => (

                <div
                  key={course}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300"
                >

                  {course}

                </div>

              ))}

            </div>

          </div>

          <div className="mt-20 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-inner">

            <h2 className="text-4xl font-black text-slate-900">
              About {college.name}
            </h2>

            <p className="text-xl text-slate-600 leading-10 mt-8">

              {college.name} is one of the leading institutions in India,
              known for academic excellence, world-class infrastructure,
              strong placements, modern research facilities, and vibrant
              student life. Students can explore multiple career paths,
              participate in innovation-driven programs, and gain access
              to top recruiters across industries.

            </p>

          </div>

        </div>

      </div>

    </main>

  );

}