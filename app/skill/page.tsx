"use client";

import React from "react";
import { Globe, Database, Palette, Shield, Laptop } from "lucide-react";

export default function SkillSection() {
  const skills = [
    {
      name: "Web Development",
      icon: <Globe size={48} className="text-blue-500" />,
      description:
        "Membangun website responsif dengan Next.js, React, dan PHP.",
    },
    {
      name: "Database Management",
      icon: <Database size={48} className="text-green-500" />,
      description: "Mengelola database dengan MySQL dan MongoDB.",
    },
    {
      name: "UI/UX Design",
      icon: <Palette size={48} className="text-pink-500" />,
      description: "Desain antarmuka intuitif & UX yang menarik.",
    },
    {
      name: "Cyber Security Basics",
      icon: <Shield size={48} className="text-red-500" />,
      description: "Dasar keamanan siber untuk melindungi data.",
    },
    {
      name: "Software Engineering",
      icon: <Laptop size={48} className="text-yellow-500" />,
      description: "Pengembangan perangkat lunak dengan metodologi tepat.",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6 text-black">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-black">
              {skill.name}
            </h3>
            <p className="text-gray-600 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 360px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
