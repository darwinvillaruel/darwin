"use client";
import { HiUserCircle } from "react-icons/hi";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoMailUnread } from "react-icons/io5";

export default function About() {
  const handleClick = (item: string) => {
    const dialog = document.getElementById(item) as HTMLDialogElement | null;
    if (dialog) {
      dialog.showModal();
    } else {
      console.log(`Dialog with id ${item} not found`);
    }
  };
  return (
    <>
      <button
        className="btn btn-info"
        onClick={() => handleClick("about_modal")}>
        <HiUserCircle />
        About
      </button>
      <dialog id="about_modal" className="modal">
        <div className="container w-screen h-screen rounded-none p-11 lg:p-24 xl:p-32 max-w-none max-h-none modal-box ">
          <div className="xl:flex xl:flex-row xl:gap-5">
            <div>
              <h3 className="text-xl font-semibold lg:text-3xl">
                Darwin Villaruel
              </h3>
              <p className="lg:text-lg">Data Analyst at Method</p>
              <p className="py-4 lg:text-2xl">
                Developer, automations specialist, and pharmacist with interest
                in building web applications and backend solutions that are
                scalable with emphasis on functionality.
              </p>
              <p className="py-4 lg:text-2xl">
                🧳 Travel Goal? To travel to different Asian countries and
                explore its culture!
              </p>
              <p className="py-4 lg:text-2xl">
                📚 Current Interest? Building applications to further improve
                and practice my sleeping Mandarin.
              </p>
            </div>
            <div className="hidden xl:border-pink-500 xl:border-2 xl:p-4 xl:border-b-4 xl:rounded-xl">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis placeat quo, doloribus itaque voluptates necessitatibus
                dolorem natus enim, error ab qui voluptate! Et quos cum illum
                animi, incidunt perspiciatis quam.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-row space-x-2">
              <IoLogoLinkedin size={40} />
              <IoLogoGithub size={40} />
              <IoMailUnread size={40} />
            </div>
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
