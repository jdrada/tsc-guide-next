export type TutorialsApiResponse = {
  data: TutorialType[];
  meta: MetaData;
};

export type UniqueTutorialsApiResponse = {
  data: TutorialType;
};

export type TutorialAttributesType = {
  title: string;
  slug: string;
  level: number;
  description: string;
  article: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export interface TutorialType {
  id: number;
  attributes: TutorialAttributesType;
}

interface MetaData {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
