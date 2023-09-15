export default function Navbar() {
  return (
    <div className="flex justify-between items-center landscape:col-start-1 landscape:col-end-3">
      <img src="logo.svg" alt="" className="w-[10em]" />
      <button className="bg-white font-others font-bold rounded-full shadow-xl px-[3em] py-[1em] text-very-dark-cyan hover:text-greyish-blue">
        Try It Free
      </button>
    </div>
  );
}
