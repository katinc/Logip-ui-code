import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.rowDivs}>
        <div className={styles.leftnav}>
          <h2 >
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.topbar}>
            <h2 >
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
          <div className={styles.middleSection}>
            <div className={styles.leftMiddlebar}>
              <h2 >
                Docs <span>-&gt;</span>
              </h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>

            <div className={styles.rightMiddleSection}>
              <div className={styles.topMiddlebar}>
                <h2 >
                  Docs <span>-&gt;</span>
                </h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </div>

              <div className={styles.bottomMiddlebar}>
                <h2 >
                  Docs <span>-&gt;</span>
                </h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </div>
            </div>

          </div>
        </div>
      </div>




      {/* 

      <div className={styles.topMiddlebar}>
        <h2 >
          Docs <span>-&gt;</span>
        </h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </div>

      <div className={styles.bottomMiddlebar}>
        <h2 >
          Docs <span>-&gt;</span>
        </h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </div> */}
    </main>
  )
}
