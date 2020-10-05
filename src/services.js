import Snoowrap from 'snoowrap';

const { USER_AGENT, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env;

const r = new Snoowrap({
  userAgent: USER_AGENT,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  refreshToken: REFRESH_TOKEN,
});

export async function getTopPost() {
  const topPosts = await r.getTop({ time: 'week', limit: 5 });
  return topPosts;
}
