export const api = {
  countries_api: (q?: string) =>
    `https://api.first.org/data/v1/countries?q=${q}`,
  restrictions: (from: string, to: string) =>
    `https://ulysse-tooling-api.herokuapp.com/api/sherpa/country?origin=${from}&destination=${to}`,
};
