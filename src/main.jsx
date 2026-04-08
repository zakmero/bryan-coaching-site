import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './indexV2.css'
import App from './App.jsx'
import AppV2 from './AppV2.jsx'

function Root() {
  const [version, setVersion] = useState(1)

  return (
    <>
      {/* Version Toggle Bar */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0',
        borderRadius: '50px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
        border: '1px solid rgba(0,0,0,0.12)',
        fontFamily: 'system-ui, sans-serif',
      }}>
        <button
          onClick={() => setVersion(1)}
          style={{
            padding: '0.65rem 1.4rem',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            border: 'none',
            transition: 'all 0.25s ease',
            background: version === 1 ? '#c5a059' : '#1a1a1a',
            color: version === 1 ? '#000' : '#888',
          }}
        >
          V1 — Dark / Gold
        </button>
        <button
          onClick={() => setVersion(2)}
          style={{
            padding: '0.65rem 1.4rem',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            border: 'none',
            transition: 'all 0.25s ease',
            background: version === 2 ? '#c0392b' : '#ffffff',
            color: version === 2 ? '#fff' : '#888',
          }}
        >
          V2 — White / Red
        </button>
      </div>

      {/* Active Version */}
      {version === 1 ? <App /> : <AppV2 />}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
