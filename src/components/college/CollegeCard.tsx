import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

type CollegeCardProps = {
  id: number;
  name: string;
  location: string;
  fees: string;
  rating: number;
  image: string;
  isSaved: boolean;
  onSave: (id: number) => void;
  onCompare: (id: number) => void;
};

export default function CollegeCard({
  id,
  name,
  location,
  isSaved,
  onSave,
  fees,
  image,
  rating,
  onCompare,
}: CollegeCardProps) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative bg-white p-5 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:shadow-blue-200 transition-all duration-500 border border-slate-200 overflow-hidden before:absolute before:inset-0 before:rounded-[2rem] before:bg-gradient-to-r before:from-blue-100/40 before:to-indigo-100/30 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500"
    >

      <div className="relative w-full h-52 md:h-60 rounded-[1.5rem] overflow-hidden mb-6">

        <Image
          src={image}
          alt={name}
          fill
          sizes="100vw"
          className="object-cover hover:scale-110 transition-all duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full"></div>

      </div>

      <button
        onClick={() => onSave(id)}
        className="absolute top-8 right-8 bg-white/90 backdrop-blur-md shadow-lg p-3 rounded-full hover:scale-110 transition-all duration-300 z-20"
      >

        <Heart
          className={`w-6 h-6 transition-all duration-300 ${
            isSaved
              ? "fill-red-500 text-red-500 scale-110"
              : "text-slate-500"
          }`}
        />

      </button>

      <div className="space-y-3 relative z-10">

        <h2 className="text-3xl font-black text-slate-900 leading-tight">
          {name}
        </h2>

        <p className="text-slate-500 text-lg font-medium">
          📍 {location}
        </p>

        <div className="flex items-center justify-between pt-2">

          <div>

            <p className="text-sm text-slate-400 font-medium">
              Fees
            </p>

            <p className="text-xl font-bold text-slate-800">
              {fees}
            </p>

          </div>

          <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl font-bold text-lg shadow-sm">

            ⭐ {rating}

          </div>

        </div>

      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-8 relative z-10">

        <Link
          href={`/college/${id}`}
          className="flex-1"
        >

          <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-2xl hover:scale-105 active:scale-95 font-bold shadow-lg hover:shadow-blue-300 transition-all duration-300">

            View Details

          </button>

        </Link>

        <button
          onClick={() => onCompare(id)}
          className="flex-1 bg-gradient-to-r from-slate-900 to-slate-700 text-white px-5 py-3 rounded-2xl hover:scale-105 active:scale-95 font-bold shadow-lg transition-all duration-300"
        >

          Compare

        </button>

      </div>

    </motion.div>

  );

}