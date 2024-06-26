import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function LetsConnects() {
  /** State management */
  const connectForm = React.useRef<any>();
  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [textAreaMessage, setTextAreaMessage] = useState<string>("");

  function sendConnectMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_8c0dsfh",
        "template_y466o1p",
        connectForm.current,
        "MvUKGNmjr7pKPzoKT"
      )
      .then(
        (result) => {
          event.currentTarget.reset();
          alert("Message sent successfully!");
          setNameValue("");
          setEmailValue("");
          setTextAreaMessage("");
        },
        (error) => {
          console.log(error.text);
          alert(`${error.message}`);
        }
      );
  }

  return (
    <div id="letsConnect" className="py-10 sm:py-20 px-4 sm:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <div className="w-[80%] py-10">
            <h2 className="text-3xl mb-10 leading-[3rem]">
              I love meeting new people
            </h2>
            <p className="text-sm text-tertiary leading-loose">
              Collaboration and Teamwork is a culture I developed and is one of
              my strengths.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-tertiary text-xs mb-5">Let's Connect</h4>
          <form
            ref={connectForm}
            onSubmit={sendConnectMessage}
            className="sm:w-4/5"
          >
            <div>
              <input
                type="text"
                name="name"
                id="forName"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                placeholder="Name"
                className="inputStyle"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="forEmail"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder="Email"
                className="inputStyle"
                required
              />
            </div>

            <textarea
              name="message"
              id="forMessage"
              rows={5}
              value={textAreaMessage}
              onChange={(e) => setTextAreaMessage(e.target.value)}
              placeholder="Write your message here. . ."
              required
              className="bg-transparent rounded p-4 my-2 text-sm w-full resize-none border-2 border-tertiary focus:border-secondary focus:outline-none"
            ></textarea>

            <button className="border border-secondary bg-secondary/80 py-2 text-white font-semibold rounded-md text-sm my-3 w-full hover:bg-transparent active:scale-[0.98] shadow-inner shadow-secondary">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
