import ReactMarkdown from "react-markdown";

import {
  TutorialsApiResponse,
  UniqueTutorialsApiResponse,
} from "../tutorials.interface";

export async function generateStaticParams() {
  const tutorials = await fetch(
    `http://127.0.0.1:1337/api/typescript-tutorials`
  ).then((res): Promise<TutorialsApiResponse> => res.json());
  return tutorials.data.map((tutorial) => ({
    slug: String(tutorial.id),
  }));
}

async function getData(slug: string) {
  const res = await fetch(
    `http://127.0.0.1:1337/api/typescript-tutorials/${slug}`
  ).then((res): Promise<UniqueTutorialsApiResponse> => res.json());
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  return res;
}

const Tutorial = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const tutorialData = await getData(slug);

  return (
    <section className="py-14">
      <div className="max-w-screen-lg mx-auto px-4 md:px-8">
        {/* eslint-disable-next-line react/no-children-prop */}
        <ReactMarkdown children={tutorialData.data.attributes.article} />
      </div>
    </section>
  );
};
export default Tutorial;
