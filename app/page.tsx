import Navbar from "./component/Navbar";
import Image from "next/image";
import Skill from "./skill/page";
import Service from "./service/page";
import Contact from "./contact/page";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-200 p-8">
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">
          {/* Bagian Header Profil */}
          <div className="bg-blue-700 p-6 text-white text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white">
              <Image
                src="/raihand.jpeg"
                alt="Profile Picture"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-2xl font-bold mt-4">Raihand Fadhillah</h1>
            <p className="text-lg opacity-90">
              Mahasiswa Sistem Informasi Semester 4 di Masoem University
            </p>
          </div>
          <div className="p-6 text-black">
            <section className="mb-6">
              <Skill />
            </section>
            <Service />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
