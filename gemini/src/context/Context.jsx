import { createContext, useState, useEffect } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setinput] = useState("");
  const [recentprompt, setrecentprompt] = useState("");
  const [prevprompts, setprevprompts] = useState([]);
  const [showresult, setshowresult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultdata, setresultdata] = useState("");

  const delaypara = (responseText) => {
    let words = responseText.split(" ");
    let index = 0;

    let interval = setInterval(() => {
      if (index < words.length) {
        setresultdata(prev => prev + words[index] + " ");
        index++;
      } else {
        clearInterval(interval);
      }
    }, 75);
  };

  const newchat = () => {
    setloading(false);
    setshowresult(false);
    setinput("");
    setresultdata("");
  };

  const onSent = async (prompt) => {
    setresultdata("");
    setloading(true);
    setshowresult(true);

    let response = "";

    try {
      if (prompt) {
        response = await run(prompt);
        setrecentprompt(prompt);
      } else {
        setprevprompts(prev => [...prev, input]);
        setrecentprompt(input);
        response = await run(input);
      }

      if (!response || typeof response !== "string") {
        console.error("Invalid response received:", response);
        setloading(false);
        return;
      }

      let responsArray = response.split("**");
      let newResponse = "";

      for (let i = 0; i < responsArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responsArray[i];
        } else {
          newResponse += "<b>" + responsArray[i] + "</b>";
        }
      }

      let newResponse2 = newResponse.replace(/\*/g, "<br/>");

      delaypara(newResponse2);

    } catch (error) {
      console.error("Error in onSent:", error);
    }

    setloading(false);
    setinput("");
  };

  // useEffect(() => {
  //   if (input.trim() === "") {
  //     onSent("What is React.js?");
  //   }
  // }, [input]);

  const contextValue = {
    prevprompts,
    setprevprompts,
    onSent,
    setrecentprompt,
    recentprompt,
    showresult,
    loading,
    resultdata,
    input,
    setinput,
    newchat,
  };

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
