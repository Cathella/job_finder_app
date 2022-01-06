const GET_JOBS = 'jobsStore/jobs/GET_JOBS';

const initialState = [];

export const getJobs = (payload) => ({
  type: GET_JOBS,
  payload,
});

export const jobsList = async () => {
  const url = 'https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=7e09fe7c&app_key=b282a2845f48d7eef43ed8d6e99d6d1a';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      if (state !== initialState) {
        return state
      }
      return action.payload;
    default:
      return state;
  }
};

export default jobsReducer;
