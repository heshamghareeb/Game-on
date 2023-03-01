export class Api{

    // constructor() {}

    async getGames(gameCategory="mmorpg") {
        const loading = $(".loading");
        loading.removeClass("d-none");

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8f86b9eaa9msh0e6d5dfedb1eb80p1dba82jsn440848ee6e63',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameCategory}`, options);
        
        if (api.ok & api.status == 200) {
            const response = await api.json();
            console.log(response);
            loading.addClass("d-none");
            return response;
        }
        
    }

    async getGameDetails(gameId) {
        const loading = $(".loading");
        loading.removeClass("d-none");

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8f86b9eaa9msh0e6d5dfedb1eb80p1dba82jsn440848ee6e63',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);

        if (api.ok & api.status == 200) {
            const response = await api.json();
            console.log(response);
            loading.addClass("d-none");
            return response;
        }

    }

}