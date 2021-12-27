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

export enum Type {
  Restriction = "RESTRICTION",
  Procedure = "PROCEDURE",
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
  lastUpdatedAt: Date;
  createdAt: Date;
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
