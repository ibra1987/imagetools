"use client";
import appStore from "@/app/state/appState";
import React, { useState } from "react";
import Notification from "@/app/components/reusables/Notification";

function ContactForm() {
  const [feedBack, setFeedBack] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const appState = appStore();

  const onchange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    appState.reset();
    setFeedBack({
      ...feedBack,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!feedBack.name || feedBack.name === "")
      appState.setError(true, "Please enter your name");
    if (!feedBack.email) appState.setError(true, "please enter your email");
    if (!feedBack.message) appState.setError(true, "please enter a message");
  };
  return (
    <div className="w-full flex flex-col justify-center items-center my-4 ">
      {appState.error && (
        <Notification
          error={appState.error}
          success={appState.success}
          reset={appState.reset}
          message={appState.message}
        />
      )}
      <form className="w-full md:w-3/5" onSubmit={onsubmit}>
        <div className="w-full flex  flex-col justify-center items-start m-2">
          <label htmlFor="name">Your name:</label>
          <input
            onChange={onchange}
            className="w-full border outline-none py-1 px-2 focus:border-emerald-200"
            name="name"
            placeholder="your name"
            value={feedBack.name}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start m-2">
          <label htmlFor="email">Your email:</label>
          <input
            onChange={onchange}
            className="w-full border outline-none py-1 px-2 focus:border-emerald-200"
            name="email"
            placeholder="your email"
            value={feedBack.email}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start m-2">
          <label htmlFor="subject">Subject:</label>
          <input
            onChange={onchange}
            className="w-full border outline-none py-1 px-2 focus:border-emerald-200"
            name="subject"
            placeholder="subject"
            value={feedBack.subject}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start m-2">
          <label htmlFor="message">Your message:</label>
          <textarea
            onChange={onchange}
            value={feedBack.message}
            placeholder="your message..."
            name="message"
            className="w-full border outline-none py-1 px-2 focus:border-emerald-200 resize-none h-40"
          ></textarea>
        </div>
        <div className="w-full flex flex-col justify-center items-start m-2">
          <button
            className="w-full p-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 transition delay-75 ease-in-out font-medium"
            type="submit"
          >
            {" "}
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
