import { getCookie } from '../utils/cookieManage';

const getProfile = async (id) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/profile?id=${id}`);

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.json();
};

const postProfile = async (data) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/profile`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${getCookie('accessToken')}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.text();
};

export { getProfile, postProfile };
