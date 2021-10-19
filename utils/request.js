const API_Key = process.env.API_KEY;


export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=280dd85be457339409b113472cb2f536&language=en-us`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=280dd85be457339409b113472cb2f536&language=en-us`
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=280dd85be457339409b113472cb2f536&with_genres=28`
    },
    fetchComedy: {
        title: "Comedy",
        url: `/discover/movie?api_key=280dd85be457339409b113472cb2f536&with_genres=35`
    },
    fetchHorror: {
        title: "Horror",
        url: `/discover/movie?api_key=280dd85be457339409b113472cb2f536&with_genres=27`
    },
    fetchRomance: {
        title: "Romance",
        url: `/discover/movie?api_key=280dd85be457339409b113472cb2f536&with_genres=10749`
    },
    fetchMystery: {
        title: "Mystery",
        url: `/discover/movie?api_key=280dd85be457339409b113472cb2f536&with_genres=9648`
    },
    fetchSciFi: {
        title: "SciFi",
        url: `/discover/movie?api_key=280dd85be457339409b113472cb2f536&with_genres=878`
    },
    fetchAnimation: {
        title: "Animation",
        url: `/discover/movie?api_key=280dd85be457339409b113472cb2f536&with_genres=16`
    },
    fetchWestern: {
        title: "Western",
        url: `/discover/movie?api_key=280dd85be457339409b113472cb2f536&with_genres=37`
    },
    fetchTv: {
        title: "Tv Show",
        url: `/discover/movie?api_key=280dd85be457339409b113472cb2f536&with_genres=10770`
    },
}
