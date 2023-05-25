import Link from "next/link";
import { TutorialAttributes } from "../../../hooks/useGetTutorials";
import { TutorialType } from "@/app/tutorials/tutorials.interface";
import Image from "next/image";

const TutorialCard = ({ id, attributes }: TutorialType) => {
  console.log(id);

  return (
    <li key={id}>
      <Link href={`/tutorials/${id}`}>
        <div className="w-full h-60 sm:h-52 md:h-56">
          <Image
            src={attributes.image as string}
            className="w-full h-full object-cover object-center shadow-md rounded-xl"
            alt=""
          />
        </div>
        <div className="mt-4">
          <h4 className="text-lg text-gray-700 font-semibold">
            {attributes.title}
          </h4>
          <p className="text-indigo-600">{attributes.level}</p>
          <p className="text-gray-600 mt-2">{attributes.description}</p>
        </div>
      </Link>
    </li>
  );
};

export default TutorialCard;
