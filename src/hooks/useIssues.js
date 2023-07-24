import { useState } from 'react';
import { getIssueList } from '../apis/issues';

export default function useIssues() {
  const [issueList, setIssueList] = useState([]);
  const PER_PAGE = 5;

  const fetchMoreIssues = async () => {
    const NEXT_PAGE = Math.floor(issueList.length / PER_PAGE) + 1;
    const res = await getIssueList(NEXT_PAGE);
    setIssueList([...issueList, ...res]);
  };

  return { issueList, fetchMoreIssues };
}
