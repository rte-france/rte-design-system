/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Link, Outlet, useLocation } from 'react-router-dom';

// const useIsActive = ()=>{
//   const isActive = useCallback(()=>{

//   })
// }
function App() {
  const location = useLocation();
  console.log('🚀 QCA :  ~ App ~ location:', location);
  return (
    <div>
      <header>
        <nav>
          <ul style={{ display: 'flex', flexDirection: 'row', padding: '5rem 5rem 0 5rem', gap: '2rem' }}>
            <li
              style={{
                border: 'solid 1px',
                borderRadius: '1rem',
                padding: '1rem',
                backgroundColor: location.pathname === '/' ? '#FFFF' : '#DDDFE0',
              }}
            >
              <Link to="/">Home</Link>
            </li>
            <li style={{ border: 'solid 1px', borderRadius: '1rem', padding: '1rem' }}>
              <Link to="/bases">Bases</Link>
            </li>
            <li style={{ border: 'solid 1px', borderRadius: '1rem', padding: '1rem' }}>
              <Link to="/forms">Forms</Link>
            </li>
            <li style={{ border: 'solid 1px', borderRadius: '1rem', padding: '1rem' }}>
              <Link to="/data">Data</Link>
            </li>
            <li style={{ border: 'solid 1px', borderRadius: '1rem', padding: '1rem' }}>
              <Link to="/layout">Layout</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '5rem',
          gap: '2rem',
          width: '90vw',
          height: '80vh',
          margin: 'auto',
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
