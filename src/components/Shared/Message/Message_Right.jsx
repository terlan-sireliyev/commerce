import InputLogin from "../../Ui/inputs/InputLogin";
import Btns from "../../Ui/buttons/Btns";
// import Btns from "../../Ui/buttons/Btns";

const Message_Right = () => {
  return (
    <div className="flex flex-1 flex-col bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <div className="border-b border-green-300 p-5">
        <h2
          className="text-2xl font-semibold text-green-700"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Chat with James Carter
        </h2>
      </div>

      {/* Messages area */}
      <div className="flex-1 space-y-4 overflow-y-auto p-6">
        {/* Incoming message */}
        <div className="flex items-start">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="James Carter"
            className="mr-3 h-10 w-10 rounded-full border-2 border-white shadow-md"
          />
          <div className="max-w-xs rounded-xl bg-blue-200 p-4 text-gray-800 shadow-lg">
            <p>Hello! How are you doing?</p>
          </div>
        </div>

        {/* Outgoing message */}
        <div className="flex items-start justify-end">
          <div className="max-w-xs rounded-xl bg-green-400 p-4 text-white shadow-lg">
            <p>I&apos;m doing well, thanks! How about you?</p>
          </div>
          <img
            src="https://randomuser.me/api/portraits/men/77.jpg"
            alt="You"
            className="ml-3 h-10 w-10 rounded-full border-2 border-white shadow-md"
          />
        </div>
      </div>

      {/* Message input area */}
      <div className="border-t border-green-300 p-4">
        <div className="flex items-center">
          <InputLogin
            classNameInput={
              "flex-1 rounded-full border border-green-400 bg-green-100 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            }
            placeholder={"Type a message..."}
            type={"text"}
          />
          <Btns
            btnClassName={
              "ml-3 rounded-full bg-blue-500 px-4 py-2 font-bold text-white transition-all duration-200 ease-in-out hover:bg-blue-600"
            }
            btnText={"Send"}
          />
        </div>
      </div>
    </div>
  );
};

export default Message_Right;
