const data = [
  {
    sickCd: 'C23',
    sickNm: '담낭의 악성 신생물'
  },
  {
    sickCd: 'K81',
    sickNm: '담낭염'
  },
  {
    sickCd: 'K82',
    sickNm: '담낭의 기타 질환'
  },
  {
    sickCd: 'K87',
    sickNm: '달리 분류된 질환에서의 담낭, 담도 및 췌장의 장애'
  },
  {
    sickCd: 'Q44',
    sickNm: '담낭, 담관 및 간의 선천기형'
  },
  {
    sickCd: 'Q44',
    sickNm: '치아'
  },
  {
    sickCd: 'Q44',
    sickNm: '치아부식'
  },
  {
    sickCd: 'Q44',
    sickNm: '치아 변형'
  },
  {
    sickCd: 'Q44',
    sickNm: '누런이'
  }
];

export const getIssueList = async (NEXT_PAGE) => {
  // console.log(data.slice((NEXT_PAGE - 1) * 5, NEXT_PAGE * 5));
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.slice((NEXT_PAGE - 1) * 5, NEXT_PAGE * 5));
    }, 3000);
  });
};
