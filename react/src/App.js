import { useEffect, useRef } from 'react';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import useIssues from './hooks/useIssues';

function App() {
  const ref = useRef(null);
  const { issueList, fetchMoreIssues } = useIssues();
  const [observe] = useIntersectionObserver(() => {
    fetchMoreIssues();
  });

  // () => { fetchMoreIssues(); } 0x1122

  useEffect(() => {
    observe(ref.current);
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {issueList.map(({ sickNm }, index) => (
          <div key={index} style={{ width: '100%', height: 150, backgroundColor: 'pink' }}>
            {sickNm}
          </div>
        ))}
      </div>
      <div ref={ref}></div>
    </div>
  );
}

export default App;
