import React from "react";
import Image from "next/image";
import { PlusCircle } from "lucide-react";

// Type definitions for participant and class data
interface Participant {
  name: string;
  img: string;
}

interface ClassData {
  className: string;
  participants: Participant[];
}

const classData: ClassData[] = [
  {
    className: "Kelas SI",
    participants: [
      { name: "Harist Fadillah", img: "/raihand.jpeg" },
      { name: "Nuthafsari Ansarani", img: "/profile2.jpg" },
      { name: "Wahyudin Sapari", img: "/profile3.jpg" },
      { name: "Farhan Ramdani", img: "/profile13.jpg" },
      { name: "Rizki Amelia", img: "/profile14.jpg" },
    ],
  },
  {
    className: "Kelas KA",
    participants: [
      { name: "Erik Sobirin", img: "/profile4.jpg" },
      { name: "Muhammad Ashif Barkhiya Warman", img: "/profile5.jpg" },
      { name: "Novi Marcelimah", img: "/profile6.jpg" },
      { name: "Ulfa Nadya", img: "/profile7.jpg" },
      { name: "Dimas Arya", img: "/profile15.jpg" },
    ],
  },
  {
    className: "Kelas BD",
    participants: [
      { name: "Akmal Syarif", img: "/profile8.jpg" },
      { name: "Arie Nurhikmat", img: "/profile9.jpg" },
      { name: "Ayu Fatimah", img: "/profile10.jpg" },
      { name: "Christianity Nur Fhad", img: "/profile11.jpg" },
      { name: "Dea Pradestiawati", img: "/profile12.jpg" },
    ],
  },
];

// ParticipantCard component with TypeScript props
const ParticipantCard: React.FC<{ participant: Participant }> = ({
  participant,
}) => (
  <div className="flex flex-col items-center space-y-2 group">
    <div
      className="relative w-24 h-24 rounded-full overflow-hidden border-[3px] border-white shadow-lg
                 group-hover:scale-110 transition-transform duration-300"
    >
      <Image
        src={participant.img}
        alt={participant.name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <p className="text-sm text-gray-700 text-center">{participant.name}</p>
  </div>
);

// ClassCard component with TypeScript props
const ClassCard: React.FC<{ kelas: ClassData }> = ({ kelas }) => (
  <div className="bg-green-100 rounded-2xl shadow-lg p-6 space-y-4">
    <h2 className="text-center text-2xl font-semibold text-gray-800">
      {kelas.className}
    </h2>
    <div className="flex justify-center flex-wrap gap-6 md:gap-10">
      {kelas.participants.map((p, i) => (
        <ParticipantCard key={i} participant={p} />
      ))}
    </div>
    <div className="flex justify-center">
      <button className="flex items-center gap-2 bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-full shadow-md transition-all">
        <PlusCircle size={20} />
        Assign Peserta Kelas
      </button>
    </div>
  </div>
);

// Main ManageKelas component
const ManageKelas: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 p-6 space-y-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {classData.map((kelas, index) => (
        <ClassCard key={index} kelas={kelas} />
      ))}
    </div>
  );
};

export default ManageKelas;
