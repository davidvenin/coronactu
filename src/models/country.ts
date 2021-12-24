export interface Options {
  code: string;
  country: string;
}

export interface CountryPayload {
  data: Country;
}

export interface Country {
  [key: string]: {
    country: string;
    region: string;
  };
}
