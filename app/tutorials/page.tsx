import axios, { AxiosResponse } from "axios";
import TutorialCard from "../components/TutorialCard/TutorialCard";
import { TutorialsApiResponse } from "./tutorials.interface";

async function getData() {
  const res = await fetch(
    `http://127.0.0.1:1337/api/typescript-tutorials`
  ).then((res): Promise<TutorialsApiResponse> => res.json());
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  return res;
}

const TutorialsPage = async () => {
  const { data: tutorials } = await getData();

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Hey there!
          </h3>
          <p className="text-gray-600 mt-3">
            Want to become a TypeScript pro? Whether you're a newbie or a
            seasoned developer, we've got lessons for every skill level. Let's
            level up your TypeScript game!
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {tutorials.map((tutorial) => (
              <TutorialCard
                key={tutorial.id}
                attributes={tutorial.attributes}
                id={tutorial.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TutorialsPage;
