import axios from "axios";
import { useEffect, useState } from "react";

export interface ApiResponse {
  dataItems: DataItem[] | [];
  metaItems: MetaData;
}

export type TutorialAttributes = {
  Title: string;
  Level: number;
  Description: string;
  Article: string;
  Image?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export interface DataItem {
  id: number;
  attributes: TutorialAttributes;
}

interface MetaData {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

const useGetArticle = (id: string) => {
  const [data, setData] = useState<DataItem[]>([]);

  const fetcher = async () => {
    try {
      const response = await axios.get(
        `http://localhost:1337/api/typescript-tutorials/${id}`
      );
      setData(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  return { data };
};
export default useGetArticle;
