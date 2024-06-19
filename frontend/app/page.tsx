"use client";
import Image from "next/image";
import backgroundImage from "@/public/background.jpg";
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core';
import {useEffect} from "react";

export default function Home() {

  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: ['Samaksh Gupta.', 'AwesomeSam.', 'a full stack developer.'],
      autoStart: true,
      loop: true,
    });
  })
  return (
    <main className="overflow-x-hidden pb-[20%]">
      <div className="absolute grayscale-[75%] right-0">
        <Image src={backgroundImage} alt="background_image" className="h-[100vh] w-auto" quality={100}/>
      </div>
      <div className="flex flex-col w-screen h-screen">
        <div className="ml-[15%]">
          <div className="mt-[15%] flex flex-col items-start select-none">
            <h1 className="text-center text-[3rem]">Hey,</h1>
            <p className="text-center text-[4rem] font-name">
              I am <span className="font-bold" id="typewriter"></span>
            </p>
          </div>
          <div className="mt-16 text-xl text-slate-200">
            I am a student at Manipal University Jaipur, a tech enthusiast <br />
            & open-source advocate.<br/>
          </div>
        </div>
      </div>

      <div className="flex w-screen flex-col mt-16">
        <div className="">
          <h1 className="text-center text-[3rem] font-name underline">About Me</h1>
        </div>
        <div className="flex justify-center">
          <div className="w-[80%]">
            <p className="p-5 text-slate-300 text-xl">
              Hello. Myself Samaksh Gupta, second year student at Manipal University Jaipur. <br/>
              I am a full stack developer
              having 4+ years of programming experience, and have developed and helped in many projects across various
              tech stacks.
              I am currently Head of Technical Projects in IEEE CS MUJ. Herein I have contributed and
              also actively working on internal app for the club. <br/>
              I am also Developer Intern at Software Development Center (SDC), Manipal University Jaipur. SDC is a team
              of developers to work on internal projects and apps for the university. <br/>
              My strongest suit is web development, wherein I have done two International internships, and have been
              actively making projects since 3 years now. <br/>
              I have excellent knowledge in Python as well, including fundamentals like asynchronous coding, theading,
              file handling etc.
              I have undertaken many projects in python of my own, and also worked with webserver in python using Flask
              and Quart. <br/>
              Apart from that I also have good knowledge in Express.js, Postgresql and Mongodb. I have developed many
              REST APIs and actively maintaining them. <br/>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
