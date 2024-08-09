import styled from "styled-components";
import {
  Banner,
  ImageSlider,
  Preloader,
  Tabs,
  Title,
} from "../../components/common/index";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllGames,
  selectAllGamesStatus,
} from "../../redux/store/gameSlice";
import { useEffect } from "react";
import { fetchAsyncGames } from "../../redux/utils/gameUtils";
import { STATUS } from "../../utils/status";
import { GameList } from "../../components/game/index";
import { Link } from "react-router-dom";
import { join_image, store_image } from "../../utils/images";
import {
  selectAllGenres,
  selectAllGenresStatus,
} from "../../redux/store/genreSlice";
import { fetchAsyncGenres } from "../../redux/utils/genreUtils";
import {
  selectAllStores,
  selectAllStoresStatus,
} from "../../redux/store/storeSlice";
import { StoreList } from "../../components/store/index";
import { fetchAsyncStores } from "../../redux/utils/storeUtils";

const HomePage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);
  const genres = useSelector(selectAllGenres);
  const genresStatus = useSelector(selectAllGenresStatus);
  const stores = useSelector(selectAllStores);
  const storesStatus = useSelector(selectAllStoresStatus);

  useEffect(() => {
    dispatch(fetchAsyncGames());
    dispatch(fetchAsyncGenres());
    dispatch(fetchAsyncStores());
  }, [dispatch]);

  const handleJoinDiscord = () => {
    window.open('https://discord.com/servers/all-star-710745950380884009', '_blank');
  };

  const renderedPopularGames = (
    <>
      <GameList sliceValue={9} games={games} />
      <div className="d-flex justify-content-center">
        <Link to="/games" className="section-btn">
          see more games
        </Link>
      </div>
    </>
  );

  return (
    <HomeWrapper>
      <Banner />

      <section className="section sc-popular">
        <div className="container">
          <Title
            titleName={{ firstText: "top popular games", secondText: "" }}
          />
          {gamesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : games?.length > 0 ? (
            renderedPopularGames
          ) : (
            "No games found!"
          )}
        </div>
      </section>

      <ImageSlider />

      <section id="join-our-community" className="section sc-join d-flex align-items-center">
        <div className="video-background">
          <video className="background-video" autoPlay loop muted playsInline>
            <source
              src="https://v1.pinimg.com/videos/iht/720p/3c/8a/fa/3c8afa40164b8475edbe2cdced535990.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container w-100">
          <div className="translucent-box mx-auto">
            <div className="join-content text-white text-center">
              <h2 className="join-title mb-3">
                JOIN THE COMMUNITY
              </h2>
              <p className="lead-text">
                Join our Discord community, created by gamers for gamers!<br></br>
                No matter what game you play, everyone is welcome. <br></br>
                We’re here to have a great time together.
              </p>

              <button
                type="button"
                className="section-btn mt-4"
                onClick={handleJoinDiscord}
              >
                join discord
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="top-genres" className="section sc-genres">
        <div className="container">
          <Title
            titleName={{
              firstText: "top genres",
              secondText: "",
            }}
          />
        </div>
        {genresStatus === STATUS.LOADING ? (
          <Preloader />
        ) : genres?.length > 0 ? (
          <Tabs sliceValue={9} data={genres} />
        ) : (
          "No genres found!"
        )}
      </section>

      <section id="our-game-stores"
        className="section sc-stores"
        style={{
          background: `linear-gradient(180deg, rgba(12, 10, 36, 0.73) 0%, rgba(0, 0, 0, 0.73) 72.92%), url(${store_image}) center/cover no-repeat`,
        }}
      >
        <div className="container">
          <Title
            titleName={{
              firstText: "our game stores",
              secondText: "",
            }}
          />
          {storesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : stores?.length > 0 ? (
            <StoreList stores={stores} />
          ) : (
            "No stores found!"
          )}
        </div>
      </section>
    </HomeWrapper>
  );
};

export default HomePage;

const HomeWrapper = styled.div`
  .sc-popular {
    background-color: var(--clr-violet-dark-active);

    .section-btn {
      margin-top: 60px;
      background-color: #6a0dad; /* New button background color */
      color: #ffffff; /* Button text color */
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #6600FF; /* Button background color on hover */
      }
    }
  }

  .sc-join {
    position: relative;
    min-height: 640px;
    overflow: hidden;

    .video-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    .background-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .translucent-box {
      background: rgba(0, 0, 0, 0.3); /* Translucent black background */
      padding: 30px; /* Increased padding */
      border-radius: 10px;
      max-width: 700px; /* Increased max-width */
    }

    .join-content {
      position: relative;
      z-index: 1;
      max-width: 100%;
    }

    .join-title {
      font-size: 44px;
      letter-spacing: 0.09em;

      span {
        color: var(--clr-green-normal);
        font-family: var(--font-family-right);
      }
    }

    .section-btn {
      background-color: #6a0dad; /* New button background color */
      color: #ffffff; /* Button text color */
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #6600FF; /* Button background color on hover */
      }
    }
  }

  .sc-genres {
    background-color: var(--clr-violet-dark-active);
  }

  .sc-stores {
    min-height: 841px;
  }
`;
