import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface RouteParams {
  coinId: string;
}

//TOFIX dupplicated components
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

const Loader = styled.div`
  text-align: center;
  display: block;
`;

interface RouteState {
  name: string;
}

interface CoinInfoInterface {
  rank: number;
  symbol: string;
  open_source: boolean;
  description: string;
}

interface CoinPriceInterface {
  total_supply: number;
  max_supply: number;
}
function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState<CoinInfoInterface>();
  const [priceInfo, setPriceInfo] = useState<CoinPriceInterface>();
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, [coinId]);

  return (
    <Container>
      <Header>
        <Title> {state?.name || "Loading..."}</Title>
      </Header>
      {loading ? (
        <Loader> "Loading ..."</Loader>
      ) : (
        <>
          <div>
            <span>Rank:</span>
            <span>{info?.rank ? info?.rank : ""}</span>
          </div>
          <div>
            <span>Symbol:</span>
            <span>{info?.symbol ? info?.symbol : ""}</span>
          </div>
          <div>
            <span>Rank:</span>
            <span>{info?.open_source ? "yes" : "no"}</span>
          </div>
          {info?.description}
          <span>
            <span>Total Suply:</span>
            <span>{priceInfo?.total_supply}</span>
            <span>Max Suply:</span>
            <span>{priceInfo?.max_supply}</span>
          </span>
        </>
      )}
    </Container>
  );
}

export default Coin;
