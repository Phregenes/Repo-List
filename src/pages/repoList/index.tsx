import React, { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import Header from "@/components/header";
import getRepos from "../api/getRepos";
import Modal from "@/components/newModal";

export default function Filter() {
  const { data: session } = useSession();

  const [data, setData] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (
      session !== undefined &&
      session !== null &&
      session.accessToken !== null
    ) {
      getRepos(session).then((res) => {
        setData(res);
      });
    }
  }, [session]);

  const onChange = (evt: any) => {
    setResult(evt.target.value);
  };

  const resultMap = () => {
    return (
      <main className="flex flex-col">
        <input
          type="text"
          placeholder="Search name..."
          value={result}
          onChange={onChange}
          className="flex px-5 py-1 mb-8 w-1/2 text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-100 dark:border-gray-700 outline-none"
        />
        <div className="flex flex-col justify-center flex-wrap">
          {data.length === 0 && result != "" && (
            <h1>No result for "{result}"</h1>
          )}
          {data
            .filter((resp: any) => resp.name.toLowerCase().includes(result))
            .map((r, i) => {
              return (
                <div className="contents" key={i}>
                  <Modal data={r} />
                </div>
              );
            })}
        </div>
      </main>
    );
  };

  return (
    <main className="bg-gray-900 h-full w-[100%] max-w-[1200px]">
      <Header />
      <section className="p-5 text-gray-100 min-h-screen">
        <h1 className="flex text-gray-100 text-2xl mb-8">
          List of {session?.user?.name} with {data.length} repositories.
        </h1>
        {resultMap()}
      </section>
    </main>
  );
}
