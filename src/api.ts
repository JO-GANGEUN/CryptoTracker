const BASE_URL = "https://api.coinpaprika.com/v1/";
const BASE_URL2 = "https://ohlcv-api.nomadcoders.workers.dev";
const LOCAL_JSON_PATH = "/data/coins.json";

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`API Error : ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      return fetch(process.env.PUBLIC_URL + "/data/coins.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((localResponse) => {
        if (!localResponse.ok) {
          return;
        }
        const answer = localResponse.json();
        return answer;
      });
    });
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinPriceInfo(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  return fetch(`${BASE_URL2}?coinId=${coinId}`).then((response) =>
    response.json()
  );
}
