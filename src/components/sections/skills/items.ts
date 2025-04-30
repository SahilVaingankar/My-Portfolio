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
}

interface SkillLevels {
  confirtable: SkillItem[];
  decent: SkillItem[];
  rusty: SkillItem[];
}

export const items: SkillLevels = {
  confirtable: [
    { svg: py, title: "py" },
    { svg: HTML, title: "HTML" },
    { svg: CSS, title: "CSS" },
    { svg: JS, title: "JS" },
    { svg: React, title: "React" },
    { svg: MySQL, title: "MySQL" },
    { svg: git, title: "git" },
    { svg: Github, title: "Github" },
  ],
  decent: [
    { svg: TS, title: "TS" },
    { svg: Flask, title: "Flask" },
    { svg: Motion, title: "Motion" },
    { svg: Zustand, title: "Zustand" },
  ],
  rusty: [
    { svg: Mongodb, title: "Mongodb" },
    { svg: Redux, title: "Redux" },
    { svg: TanStackQuery, title: "TanStack" },
    { svg: Figma, title: "Figma" },
    { svg: Storybook, title: "Storybook" },
    { svg: ReactTesting, title: "Testing" },
  ],
};
