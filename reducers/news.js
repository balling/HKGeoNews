import { NEWS_FETCHED } from './../actions/index';
import { MOCK_NEWS } from './../mock_data/news';

const news = (state = MOCK_NEWS, action) => {
  switch (action.type) {
    case NEWS_FETCHED:
      return action.news;
    default:
      return state;
  }
};

export default news;
