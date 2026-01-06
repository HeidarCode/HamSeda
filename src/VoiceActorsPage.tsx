import React from "react";
import voice2 from "../src/File/داستان 14.mp3"
import voice1 from "../src/File/61d2e3661f9c4caa9c8db007_-7772300366957025679.mp4"
import photo from "./assets/امیدی.jpg"
import photo1 from "./assets/بهره مند.jpg"
import photo2 from "./assets/رضایی.jpg"
import photo3 from "./assets/رنجبر.jpg"
import photo4 from "./assets/عظیمی.jpg"
import photo5 from "./assets/واگذاری.jpg"
import Header from "./Header";

interface VoiceActorCardProps {
  name: string;
  role: string;
  image: string;
  sample: string;
}

const VoiceActorCard: React.FC<VoiceActorCardProps> = ({
  name,
  role,
  image,
  sample,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-[1.02] transition-transform duration-300">
      <img
        src={image}
        alt={name}
        className="w-full  object-cover rounded-xl mb-3"
      />
     
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">{role}</p>
      <audio controls controlsList="nodownload" className="w-full">
        <source src={sample} type="audio/mpeg" />
        مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
      </audio>
    </div>
  );
};

const VoiceActorsPage: React.FC = () => {
  const actors: VoiceActorCardProps[] = [
    {
      name: "خانوم معصومه امیدی",
      role: "گوینده تبلیغات و نریتور",
      image:
        photo,
      sample: voice2,
    },
    {
      name: "خانوم زینب بهره مند",
      role: "گوینده کتاب صوتی و پادکست",
      image:
        photo1,
      sample: voice1,
    },
    {
      name: "خانوم عطیه رضایی",
       role: "گوینده کتاب صوتی و پادکست",
      image:
        photo2,
      sample: "/samples/sahar.mp3",
    },

     {
      name:"خانوم فاطمه رنجبر",
       role: "گوینده کتاب صوتی و پادکست",
      image:
        photo3,
      sample: "/samples/sahar.mp3",
    },

     {
      name: "خانوم محبوبه عظیمی",
      role: "گوینده کتاب صوتی و پادکست",
      image:
        photo4,
      sample: "/samples/sahar.mp3",
    },

     {
      name: "خانوم زینب واگذاری",
       role: "گوینده کتاب صوتی و پادکست",
      image:
        photo5,
      sample: "/samples/sahar.mp3",
    },
  
  ];

  return (
    <div>
      <Header />
    <main className="min-h-screen bg-gradient-to-br from-[#fff] via-[#ffd54a]/30 to-[#6c3dbf]/20 px-4 py-12 font-[Vazirmatn] text-right rtl">
      <section className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#6c3dbf] mb-3 mt-16">
         سایت گویندگان همصدا
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          در این بخش می‌توانید با گویندگان فعال در سایت همصدا آشنا شوید و
          نمونه‌کارهایشان را مستقیماً بشنوید.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {actors.map((actor, index) => (
          <VoiceActorCard key={index} {...actor} />
        ))}
      </section>
    </main>
    </div>
  );
};

export default VoiceActorsPage;
