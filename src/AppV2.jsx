import React, { useEffect, useState } from 'react';
import AppV2Original from './AppV2Original.jsx';
import AppV2CRO from './AppV2CRO.jsx';

const VIEW_STORAGE_KEY = 'bryan_site_view';

export default function AppV2() {
  const [view, setView] = useState(() => {
    const saved = window.localStorage.getItem(VIEW_STORAGE_KEY);
    return saved === 'cro' ? 'cro' : 'original';
  });

  useEffect(() => {
    window.localStorage.setItem(VIEW_STORAGE_KEY, view);

    if (window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    window.scrollTo(0, 0);
  }, [view]);

  return (
    <>
      <div className="site-version-switch" role="tablist" aria-label="Version switcher">
        <button
          type="button"
          className={`site-version-btn ${view === 'original' ? 'is-active' : ''}`}
          onClick={() => setView('original')}
          role="tab"
          aria-selected={view === 'original'}
        >
          Version 1
        </button>
        <button
          type="button"
          className={`site-version-btn ${view === 'cro' ? 'is-active' : ''}`}
          onClick={() => setView('cro')}
          role="tab"
          aria-selected={view === 'cro'}
        >
          Version 2 (CRO)
        </button>
      </div>

      {view === 'original' ? <AppV2Original /> : <AppV2CRO />}
    </>
  );
}
