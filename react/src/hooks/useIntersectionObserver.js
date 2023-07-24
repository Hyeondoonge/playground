import { useRef } from 'react';

// observer => intersection observer 객체가 유지되면서, fetchMoreIssues 호출을 위한 callback이 전달됨.

export default function useIntersectionObserver(callback) {
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (() => {
              console.log('observe');
              callback(); // fetchMoreIssues 호출
            })();
          }
        });
      },
      { threshold: 1 }
    )
  );

  const observe = (element) => {
    element && observer.current.observe(element);
  };

  // ...

  return [observe];
}
