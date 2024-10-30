import messages from "./messages";

function Page() {
  return (
    <div className="flex flex-col w-full h-dvh">
      <header className="hidden md:block">Header</header>
      <div className="flex flex-col flex-1 gap-6 overflow-y-scroll">
        {messages.map((message) => (
          <div className="w-full mx-auto max-w-3xl px-4" key={message.id}>
            {message.text}
          </div>
        ))}
      </div>

      <form className="flex md:max-w-3xl mx-auto gap-2 w-full bg-purple-50">
        <input className="w-full border-2 p-4" />
        <button className="border rounded-md px-4 ">Submit</button>
      </form>
    </div>
  );
}

export default Page;
