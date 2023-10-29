import { Button } from "@/components/button";
import { Input } from "@/components/input";
import UserLayout from "@/components/userLayout";
import OpenAI from "openai";
import { React, useState, useEffect } from "react";
import clsx from "clsx";
import { RiOpenaiFill, RiUser3Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { Spinner } from "@/components/loading";

const APIkey = process.env.VITE_OPENAI_API_KEY;
console.log(APIkey);
const openai = new OpenAI({
  apiKey: APIkey,
  dangerouslyAllowBrowser: true,
});

export default function KreatifBelajar() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Kreatif Belajar";
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "Anda akan memberikan ide yang efektif dan kreatif untuk belajar. Tanyakan apa mata pelajaran yang akan diajar",
          },
        ],
        model: "gpt-3.5-turbo",
        temperature: 0,
      });
      setResults(response.choices);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const userMsg = {
      message: {
        content: prompt,
        role: "user",
      },
    };
    const newData = [...results, userMsg];
    setResults(newData);
    setPrompt("");
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        model: "gpt-3.5-turbo",
      });
      const choice = response.choices[0];
      setResults([...newData, choice]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <UserLayout>
      <div className="w-full h-screen py-4 px-8 flex flex-col ">
        <div className="text-center mb-8">
          <div className=" text-2xl font-bold text-[#2C44BC]">
            Kreatif Belajar
          </div>
          <p>
            AI akan membantu anda dalam menemukan pembelajaran yang efektif dan
            kreatif dengan hanya memberikan nama pelajaran dan materi yang akan
            diajarkan <br />{" "}
            <i>
              "Contoh: Berikan saya ide pembelajaran yang efektif dan kreatif
              tentang Materi Musikalisasi Puisi"
            </i>
          </p>
        </div>
        <div className="grow flex flex-col overflow-auto">
          {results.map((result) => (
            <div
              className={clsx(
                "chat",
                result.message.role === "assistant" ? "chat-start" : "chat-end"
              )}
            >
              <div className="chat-image avatar">
                <div className="w-10">
                  <IconContext.Provider value={{ size: "full" }}>
                    {result.message.role === "assistant" ? (
                      <RiOpenaiFill />
                    ) : (
                      <RiUser3Fill />
                    )}
                  </IconContext.Provider>
                </div>
              </div>
              <div
                className="chat-header"
                style={{ textTransform: "capitalize" }}
              >
                {result.message.role}
              </div>
              <p className="chat-bubble" key={result.message.content}>
                {result.message.content}
              </p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <div className="w-full">
            <Input
              placeholder="Masukkan perintah anda disini"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <Button
            label={isLoading ? <Spinner /> : "Submit"}
            type="submit"
            disabled={isLoading}
            aria-disabled={isLoading}
          />
        </form>
      </div>
    </UserLayout>
  );
}
