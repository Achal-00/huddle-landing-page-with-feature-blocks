export default function SectionOne() {
  return (
    <div className="p-[5%] landscape:px-[5%] landscape:py-[3%] grid gap-[5em]">
      <div className="shadow-[0_10px_35px_-3px_rgba(0,0,0,0.1)] rounded-[2em] p-[10%] grid gap-[2em] landscape:grid-cols-[1fr_1fr] landscape:py-[5%] landscape:px-[10%]">
        <div className="landscape:col-start-2 landscape:col-end-3 landscape:row-start-1 landscape:row-end-2 grid">
          <img
            src="illustration-grow-together.svg"
            alt=""
            className="w-full landscape:w-[75%] landscape:justify-self-end"
          />
        </div>
        <div className="text-center landscape:text-left landscape:col-start-1 landscape:col-end-2 landscape:row-start-1 landscape:row-end-2 landscape:self-center">
          <h1 className="font-headings text-[200%] text-very-dark-cyan landscape:lg:text-[220%]">
            Grow Together
          </h1>
          <p className="font-others text-[110%] px-[5%] pt-[1em] text-greyish-blue landscape:px-0 landscape:lg:text-[130%]">
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
      </div>
      <div className="shadow-[0_10px_35px_-3px_rgba(0,0,0,0.1)] rounded-[2em] p-[10%] grid gap-[2em] landscape:grid-cols-[1fr_1fr] landscape:py-[5%] landscape:px-[10%]">
        <div className="landscape:col-start-1 landscape:col-end-2 landscape:row-start-1 landscape:row-end-2 grid">
          <img
            src="illustration-flowing-conversation.svg"
            alt=""
            className="w-full landscape:w-[75%] landscape:justify-self-start"
          />
        </div>
        <div className="text-center landscape:text-left landscape:col-start-2 landscape:col-end-3 landscape:row-start-1 landscape:row-end-2 landscape:self-center">
          <h1 className="font-headings text-[200%] text-very-dark-cyan landscape:lg:text-[220%]">
            Flowing Conversations
          </h1>
          <p className="font-others text-[110%] px-[5%] pt-[1em] text-greyish-blue landscape:px-0 landscape:lg:text-[130%]">
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </div>
      <div className="shadow-[0_10px_35px_-3px_rgba(0,0,0,0.1)] rounded-[2em] p-[10%] grid gap-[2em] landscape:grid-cols-[1fr_1fr] landscape:py-[5%] landscape:px-[10%]">
        <div className="landscape:col-start-2 landscape:col-end-3 landscape:row-start-1 landscape:row-end-2 grid">
          <img
            src="illustration-your-users.svg"
            alt=""
            className="w-full landscape:w-[75%] landscape:justify-self-end"
          />
        </div>
        <div className="text-center landscape:text-left landscape:col-start-1 landscape:col-end-2 landscape:row-start-1 landscape:row-end-2 landscape:self-center">
          <h1 className="font-headings text-[200%] text-very-dark-cyan landscape:lg:text-[220%]">
            Your Users
          </h1>
          <p className="font-others text-[110%] px-[5%] pt-[1em] text-greyish-blue landscape:px-0 landscape:lg:text-[130%]">
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
