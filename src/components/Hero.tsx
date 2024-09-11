export default function Hero() {
  return (
    <div className="gap-4 grid py-5">
      <div>
        <div className="font-semibold text-2xl">Darwin Villaruel</div>
        <p className="text-xl">Developer | Automations</p>
      </div>
      <div className="gap-4 grid">
        <p>I'm Darwin, a backend developer with passion in building scalable backend solutions and automations.</p>
        <p>
          Currently, a Data Analyst at &apos;
          <a
            className="bg-green-400 px-2 font-semibold text-black no-underline"
            href="https://methodfi.com">
            Method
          </a>
          , an API for debt management, where I use data to enhance backend processes and drive efficiency.
        </p>
        <p>Proud graduate of Nucamp Bootcamp.</p>
      </div>
    </div>
  );
}
