import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaServer, FaWordpress, FaBullhorn } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiCplusplus, SiTailwindcss, SiGoogleanalytics } from 'react-icons/si';
import { AiOutlineFacebook } from 'react-icons/ai';
import SectionHeading from './SectionHeading';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 size={100} className="text-white" />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <FaCss3Alt size={100} className="text-white" />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <SiJavascript size={100} className="text-white" />, color: 'text-yellow-500' },
  { name: 'React', icon: <FaReact size={100} className="text-white" />, color: 'text-blue-400' },
  { name: 'Node.js', icon: <FaNodeJs size={100} className="text-white" />, color: 'text-green-500' },
  { name: 'Express.js', icon: <SiExpress size={100} className="text-white" />, color: 'text-gray-500' },
  { name: 'MongoDB', icon: <SiMongodb size={100} className="text-white" />, color: 'text-green-700' },
  { name: 'C++', icon: <SiCplusplus size={100} className="text-white" />, color: 'text-blue-600' },
  { name: 'Server Management', icon: <FaServer size={100} className="text-white" />, color: 'text-gray-700' },
  { name: 'WordPress', icon: <FaWordpress size={100} className="text-white" />, color: 'text-blue-600' },
  { name: 'SEO', icon: <SiGoogleanalytics size={100} className="text-white" />, color: 'text-green-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={100} className="text-white" />, color: 'text-blue-400' },
  { name: 'Digital Marketing', icon: <FaBullhorn size={100} className="text-white" />, color: 'text-purple-600' },
  { name: 'Meta Ads', icon: <AiOutlineFacebook size={100} className="text-white" />, color: 'text-blue-600' },
  { name: 'Social Media Management', icon: <AiOutlineFacebook size={100} className="text-white" />, color: 'text-blue-600' },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <SectionHeading miniTitle="Skills" title="<strong>My</strong> Skills" variant="text-center" />
        <div className="skills-cards d-flex justify-content-start flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skills-cards__item d-flex grid-item-s animate-card-5"
            >
              <div className="skills-cards__card">
                <div className={`icon mb-2 ${skill.color}`}>
                  {skill.icon}
                </div>
                <p className="skills-cards__caption text-sm font-semibold text-white text-center">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}