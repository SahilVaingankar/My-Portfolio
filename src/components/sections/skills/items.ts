import py from "./images/py.svg";
import HTML from "./images/HTML.svg";
import CSS from "./images/CSS.svg";
import JS from "./images/JS.svg";
import TS from "./images/TS.svg";
import React from "./images/React.svg";
import MySQL from "./images/MySQL.svg";
import Mongodb from "./images/Mongodb.svg";
import git from "./images/git.svg";
import Github from "./images/Github.svg";
import Flask from "./images/Flask.svg";
import Redux from "./images/Redux.svg";
import TanStackQuery from "./images/TanStackQuery.png";
import Motion from "./images/Motion.svg";
import Zustand from "./images/Zustand.svg";
import Figma from "./images/Figma.png";
import Storybook from "./images/Storybook.svg";
import ReactTesting from "./images/ReactTesting.png";

interface SkillItem {
  svg: string;
  title: string;
  alt: string;
}

interface SkillLevels {
  confirtable: SkillItem[];
  decent: SkillItem[];
  rusty: SkillItem[];
}

export const items: SkillLevels = {
  confirtable: [
    { svg: py, title: "py", alt: "Python" },
    { svg: HTML, title: "HTML", alt: "HTML" },
    { svg: CSS, title: "CSS", alt: "CSS" },
    { svg: JS, title: "JS", alt: "Javascript" },
    { svg: React, title: "React", alt: "React" },
    { svg: MySQL, title: "MySQL", alt: "MySQL" },
    { svg: git, title: "Git", alt: "Git" },
    { svg: Github, title: "Github", alt: "Github" },
  ],
  decent: [
    { svg: TS, title: "TS", alt: "Typescript" },
    { svg: Flask, title: "Flask", alt: "Flask" },
    { svg: Motion, title: "Motion", alt: "Motion" },
    { svg: Zustand, title: "Zustand", alt: "Zustand" },
  ],
  rusty: [
    { svg: Mongodb, title: "Mongodb", alt: "Mongodb" },
    { svg: Redux, title: "Redux", alt: "Redux" },
    { svg: TanStackQuery, title: "TanStack", alt: "TanStack" },
    { svg: Figma, title: "Figma", alt: "Figma" },
    { svg: Storybook, title: "Storybook", alt: "Storybook" },
    { svg: ReactTesting, title: "Testing", alt: "Testing" },
  ],
};
