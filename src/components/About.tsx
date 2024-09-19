"use client";

import data from "@/lib/data";

export default function About() {
  return (
    <div className="drawer drawer-end">
      <input id="about-me" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="about-me" className="drawer-button btn btn-primary">
          About Me
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="about-me"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <div className="min-h-full p-4 menu bg-base-200 text-base-content w-80 lg:w-96">
          <h5 className="py-3 text-lg font-semibold">Work Experience</h5>
          {data.map((item, index) => (
            <div key={index}>
              <h5 className="py-2 border-t-2 border-gray-600 border-dotted">
                {item.company === "Method Financial" ? (
                  <span className="p-1 bg-green-500">
                    <a href={item.website}>{item.company}</a>
                  </span>
                ) : (
                  <span className="p-1 bg-blue-500">
                    <a href={item.website}>{item.company}</a>
                  </span>
                )}
                - {item.location}
              </h5>
              <p className="font-semibold">{item.role}</p>
              <p>{item.date}</p>
              {item.desc.map((item, index) => (
                <ul key={index} className="list-outside ms-5">
                  <li className="py-2">{item}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
