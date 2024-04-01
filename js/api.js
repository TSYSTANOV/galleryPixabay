class API {
  api_key;
  base_url;
  constructor(key, url) {
    this.api_key = key;
    this.base_url = url;
  }
  getData(searhInfo, page = 1) {
    return fetch(
      `${this.base_url}?key=${this.api_key}&q=${searhInfo}&image_type=photo&per_page=50&page=${page}`
    ).then((response) => response.json());
  }
}

const API_component = new API(
  "43159916-00879569008aa3ae564cc4522",
  "https://pixabay.com/api/"
);
export { API_component };
