import { useState } from 'react';
import { getIssueList } from '../apis/issues';

export default function useIssues() {
  const [issueList, setIssueList] = useState([]);
  const PER_PAGE = 5;

  const fetchMoreIssues = async () => {
    console.log('fetchMoreIssues...', issueList);

    const NEXT_PAGE = Math.floor(issueList.length / PER_PAGE) + 1;
    const res = await getIssueList(NEXT_PAGE);
    setIssueList([...issueList, ...res]);
  };

  return { issueList, fetchMoreIssues };
}

// 초기 렌더링
// const fetchMoreIssues = async () => { 0x1234
//   console.log('fetchMoreIssues...', issueList);

//   const NEXT_PAGE = Math.floor(issueList.length / PER_PAGE) + 1;
//   const res = await getIssueList(NEXT_PAGE);
//   setIssueList([...issueList, ...res]);
// };

// 두번째 렌더링 (issueList 변경)
// const fetchMoreIssues = async () => { 0x4567
//   console.log('fetchMoreIssues...', issueList);

//   const NEXT_PAGE = Math.floor(issueList.length / PER_PAGE) + 1;
//   const res = await getIssueList(NEXT_PAGE);
//   setIssueList([...issueList, ...res]);
// };
