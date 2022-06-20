import css from './App.module.scss'
import { Editors } from './Editors'

export function App() {
  return (
    <>
      <header className={css.header}>
        <h1>
          Rulex <span className={css.thin}>Playground</span>
        </h1>

        <div className={css.flexGrow}>
          <a href="https://rulex-rs.github.io/docs/get-started/introduction/">Docs</a>
        </div>

        <a href="https://github.com/rulex-rs/rulex" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </header>
      <Editors />
    </>
  )
}