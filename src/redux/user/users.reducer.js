const INITIAL_STATE = {
  usersData: [
    {
      id: 1,
      nama: "AAA",
      ipa: 22,
      ips: 33,
      mtk: 44,
    },
    {
      id: 2,
      nama: "BBB",
      ipa: 22,
      ips: 33,
      mtk: 44,
    },
    {
      id: 3,
      nama: "CCC",
      ipa: 22,
      ips: 33,
      mtk: 44,
    },
    {
      id: 4,
      nama: "DDD",
      ipa: 22,
      ips: 33,
      mtk: 44,
    },
    {
      id: 5,
      nama: "EEE",
      ipa: 22,
      ips: 33,
      mtk: 44,
    },
    {
      id: 6,
      nama: "FFF",
      ipa: 22,
      ips: 33,
      mtk: 44,
    },
    {
      id: 7,
      nama: "GGG",
      ipa: 22,
      ips: 33,
      mtk: 44,
    },
  ],
  error: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  return state;
};

export default usersReducer;
