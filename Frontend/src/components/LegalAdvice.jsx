import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../Styles/LegalAdvice.css";
import CustomBtn from "./CustomBtn";
import Navbar from "./Navbar";
import "../Styles/Landing.css";
import elementImg from "../assets/elementImg.svg";
import Footer from "./Footer";
function LegalAdvice() {
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const responseRef = useRef(null);

  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollTop = responseRef.current.scrollHeight;
    }
  }, [aiResponse]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInput.trim()) {
      setError("Please enter a legal question before submitting.");
      return;
    }

    setIsLoading(true);
    setError("");
    setAiResponse("");

    const XAI_API_KEY = import.meta.env.VITE_XAI_API_KEY;

    const getAIResponse = async (attempt = 1) => {
      try {
        const response = await axios.post(
          "https://api.x.ai/v1/chat/completions",
          {
            model: "grok-3-mini-fast-beta",
            messages: [
              {
                role: "system",
                content:
                  "You are a knowledgeable lawyer providing general legal information in the context of Pakistani law.Always clarify that you are not providing official legal advice and recommend consulting a licensed attorney for specific cases.After providing the information, list related lawyers from the user's local database who specialize in the relevant field of law.",
              },
              { role: "user", content: userInput },
            ],
            max_tokens: 3000,
            temperature: 0.7,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${XAI_API_KEY}`,
            },
            timeout: 60000,
          }
        );

        const content = response.data.choices[0]?.message?.content;
        if (!content) throw new Error("No content received from AI.");

        const formattedResponse = content
          .replace(
            /(\*\*[^*]+\*\*)/g,
            (match) => `<strong>${match.slice(2, -2)}</strong>`
          )
          .replace(/### (.+)/g, (_, text) => `<h3>${text}</h3>`)
          .replace(
            /^# (.+)$/gm,
            (_, text) => `<div class="border-heading">${text}</div>`
          );

        setAiResponse(formattedResponse);
      } catch (error) {
        if (error.response?.status === 429 && attempt < 5) {
          setTimeout(() => getAIResponse(attempt + 1), 10000);
        } else if (error.response?.status === 403) {
          setError(
            "Authentication failed. Check your API key or team access settings."
          );
        } else {
          setError("An error occurred. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    getAIResponse();
  };

  return (
    <>
      <Navbar />
      <img src={elementImg} alt="" className="element" />
      <div className="chat-wrapper">
        <h2 className="chat-title">AI Legal Assistant</h2>
        <p className="chat-subtitle">Ask general legal questions</p>
        <div className="chat-response-box" ref={responseRef}>
          {error && <p className="text-danger">{error}</p>}
          {isLoading && <p className="loading-text">Loading response...</p>}
          {aiResponse ? (
            <div
              className="ai-message"
              dangerouslySetInnerHTML={{ __html: aiResponse }}
            />
          ) : (
            !isLoading &&
            !error && (
              <p className="placeholder-text">
                No response yet. Ask a question!
              </p>
            )
          )}
        </div>

        <form className="chat-question-bar" onSubmit={handleSubmit}>
          <textarea
            className="chat-input"
            rows={2}
            placeholder="Type your legal question..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={isLoading}
          />
          <CustomBtn
            text={isLoading ? "Asking AI..." : "Get Response"}
            type="submit"
            className="submit-btn"
            disabled={isLoading}
          />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default LegalAdvice;
