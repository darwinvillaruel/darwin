"use client";

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
        <div className="p-20 rounded-none w-screen max-w-none h-screen max-h-none container modal-box">
          <h3 className="font-bold text-xl">👋 Hello! I'm Darwin...</h3>
          <p className="py-4 text-xl">
            I’m a developer with interest in building web applications and backend solutions that are scalable with
            emphasis on functionality.
          </p>
          <h3 className="py-3 text-lg">Work Experience</h3>
          <div className="grid">
            <p>Company Name</p>
            <p>Tenure</p>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
