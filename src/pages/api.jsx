const API_KEY = 'ba57158e113b297b193e71fffbecfb62'

const request = {
    upcoming: `/movie/upcoming?api_key=${API_KEY}`,
    nowPlaying: `/movie/now_playing?api_key=${API_KEY}`,
    trending: `/trending/all/week?api_key=${API_KEY}`,
    topRated: `/movie/top_rated?api_key=${API_KEY}`,
    tvTopRated: `/tv/top_rated?api_key=${API_KEY}`,
    tvNowPlaying: `/tv/airing_today?api_key=${API_KEY}`,
    trendingAllDay: `/trending/all/day?api_key=${API_KEY}`
}

export default request;