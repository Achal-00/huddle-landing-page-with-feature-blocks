export default function Content() {
  return (
    <div className="self-center text-center landscape:text-left grid gap-[2em] landscape:lg:gap-[3em]">
      <h1 className="font-headings text-[250%] landscape:lg:text-[350%] text-very-dark-cyan">
        Build The Community
        <br />
        Your Fans Will Love
      </h1>
      <p className="text-very-dark-cyan portrait:px-[2em] text-[130%] landscape:pr-[10%] font-others">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="bg-pink font-others w-[60%] mx-auto rounded-full py-[1.5em] text-very-pale-cyan landscape:mx-0 landscape:w-[40%] hover:opacity-60">
        Get Started For Free
      </button>
    </div>
  );
}
