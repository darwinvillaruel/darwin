"use client";

import data from "@/lib/data";

export default function About() {
  return (
    <>
      <button
        className="btn btn-info"
        onClick={() => document.getElementById("about_modal").showModal()}>
        About
      </button>
      <dialog
        id="about_modal"
        className="modal">
        <div className="sm:p-10 lg:p-24 xl:p-32 rounded-none w-screen max-w-none h-screen max-h-none container modal-box">
          <div className="xl:flex xl:flex-row xl:gap-5">
            <div>
              <h3 className="font-semibold text-2xl">Darwin Villaruel</h3>
              <p>Data Analyst at Method</p>
              <p className="py-4 text-xl">
                Developer, automations specialist, and pharmacist with interest in building web applications and backend
                solutions that are scalable with emphasis on functionality.
              </p>
              <p className="py-4 text-xl">
                🧳 Current Goal? To travel to different Asian countries and explore its culture!
              </p>
              <p className="py-4 text-xl">
                📚 Current Interest? Polishing my Javascript knowledge by deep diving to advance concepts. Practicing my
                Mandarin to achieve native level.
              </p>
            </div>
            <div className="xl:border-pink-500 xl:border-2 hidden xl:p-4 xl:border-b-4 xl:rounded-xl">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis placeat quo, doloribus itaque
                voluptates necessitatibus dolorem natus enim, error ab qui voluptate! Et quos cum illum animi, incidunt
                perspiciatis quam.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div>LinkedIn</div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
