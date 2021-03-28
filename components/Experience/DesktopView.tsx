import { useState } from "react";
import {
  ExperienceList,
  ExperienceType,
  ExperienceDescription,
} from "../../models/ExperienceList";

const DesktopView: React.FC<{}> = () => {
  const experienceList: ExperienceType[] = ExperienceList;
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );

  return (
    <div className="mt-12">
      {experienceList.map((item: ExperienceType, i: number) => {
        return (
          <div className="grid grid-cols-12" key={i}>
            <div className="col-span-3 mb-4">
              <a
                href={item.Website}
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-50 text-3xl cursor-pointer hover:text-purple-500"
              >
                {item.Company}
              </a>
            </div>
            <div className="col-span-2">
              {item.Experience.map((exp: ExperienceDescription, i: number) => {
                return (
                  <div key={i}>
                    <div
                      key={i}
                      className={`text-gray-50 text-2xl mb-2 cursor-pointer pl-2 border-l-2 hover:border-purple-300 hover:text-purple-300 ${
                        selectedYear === exp.Year
                          ? "text-purple-500 border-purple-500"
                          : ""
                      }`}
                      onClick={() => setSelectedYear(exp.Year)}
                    >
                      {exp.Year}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-span-6 text-gray-50">
              {item.Experience.filter((x) => x.Year === selectedYear).map(
                (exp: ExperienceDescription, i: number) => {
                  return (
                    <div key={i}>
                      {exp.Description.map((desc: string, i: number) => {
                        return (
                          <li key={i} className="mb-4 text-lg">
                            {desc}
                          </li>
                        );
                      })}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DesktopView;
