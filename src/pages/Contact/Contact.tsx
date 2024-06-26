import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  /** State Management */
  const contactForm = React.useRef<any>();
  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [subjectValue, setSubjectValue] = useState<string>("");
  const [textAreaMessage, setTextAreaMessage] = useState<string>("");

  function sendBusinessEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_8c0dsfh",
        "template_y466o1p",
        contactForm.current,
        "MvUKGNmjr7pKPzoKT"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent!");
          event.currentTarget.reset();
        },
        (error) => {
          console.log(error.text);
          alert(`${error.message}`);
        }
      );
  }

  return (
    <div>
      <div className="sm:h-[80vh] px-4 sm:px-20 py-10">
        <div>
          <h2 className="text-3xl font-semibold text-center uppercase">
            Get In Touch
          </h2>
          <p className="text-xs w-1/2 text-center mx-auto mt-3 mb-10 text-tertiary">
            Any Questions related to Hiring, feedbacks or Comments, Drop me a
            message
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 [&>*]:place-self-center px-3 sm:px-0">
            <div>
              <img src="" alt="" />
            </div>

            <div className="w-4/5 ">
              <form action="" ref={contactForm} onSubmit={sendBusinessEmail}>
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

                <input
                  type="text"
                  name="subject"
                  id="forSubject"
                  value={subjectValue}
                  onChange={(e) => setSubjectValue(e.target.value)}
                  className="inputStyle"
                  placeholder="Subject"
                  required
                />

                <textarea
                  name="message"
                  id="forMessage"
                  value={textAreaMessage}
                  onChange={(e) => setTextAreaMessage(e.target.value)}
                  rows={5}
                  placeholder="Write your message here. . ."
                  required
                  className="bg-transparent rounded p-4 my-2 text-sm w-full resize-none border-2 border-tertiary focus:border-secondary focus:outline-none"
                ></textarea>

                <button className="border border-secondary bg-secondary py-2 text-white font-semibold rounded-full text-sm my-3 w-full hover:bg-primary hover:scale-105 active:scale-95">
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
