import { MOCK_NEWS } from './../mock_data/news';

const initialNews = [
  [
    'http://hkm.appledaily.com/detail.php?guid=55046962&category_guid=10829391&category=instant&issue=20160430',
    ' 【短片】【即時天氣】微風送爽 最高26°C ',
    '廣東',
    {
      location: {
        lng: 114.174695,
        lat: 22.2783151,
      },
      bounds: {
        northeast: {
          lng: 114.4466582,
          lat: 22.5652645,
        },
        southwest: {
          lng: 113.835078,
          lat: 22.1533858,
        },
      },
      viewport: {
        northeast: {
          lng: 114.4466582,
          lat: 22.5652645,
        },
        southwest: {
          lng: 113.835079,
          lat: 22.1533858,
        },
      },
      location_type: 'APPROXIMATE',
    },
    '2016-04-30 22:22:00 HKT',
  ],
];


const news = (state = MOCK_NEWS, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default news;
