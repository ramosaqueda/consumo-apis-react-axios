import { useState, useEffect, useMemo, useCallback } from 'react';
import Logo from './components/Logo/Logo';
import TVShowDetail from './components/TVShowDetail/TvShowDetail';
import { TVShowAPI } from './api/tv-show';
import { BACKDROP_BASE_URL } from './config';
import logoImg from './assets/images/logo.png';
import s from './style.module.css';

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList && popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  console.log(currentTVShow);

  console.log(BACKDROP_BASE_URL);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
          url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : 'black',
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              title="WatchShows"
              subtitle="Find a show you may like "
              image={logoImg}
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: '100%' }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_shows}>Recommended tv shows</div>
    </div>
  );
}

export default App;
