export interface RestrictionsPayload {
  included: Included[];
}

export interface Included {
  id: string;
  type: string;
  attributes: Attributes;
}

export interface DocumentLink {
  type: string;
  url: string;
  title: string;
}

export interface Attributes {
  country: string;
  title: string;
  description: string;
  more: string[];
  severity: number;
  documentLinks: DocumentLink[];
  tags: string[];
  source: Source;
  lastUpdatedAt: string;
  createdAt: string;
  startDate: Date;
  endDate: null;
  category: string;
  subCategory: string;
}

export interface Source {
  sourceType: string;
  title: string;
  url: string;
}
