export interface CountryPayload {
  data: Country;
}

export interface Country {
  [key: string]: {
    country: string;
    region: string;
  };
}
