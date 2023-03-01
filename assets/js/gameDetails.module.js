export class gameDetailsPage{

    displayGameDetails(gameDetails){
    let game = `
    <div class="col-md-4">
        <img src="${gameDetails.thumbnail}" class="w-100" alt="image details">
    </div>
    <div class="col-md-8">
        <h3>Title: ${gameDetails.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${gameDetails.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${gameDetails.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${gameDetails.status}</span> </p>
        <p class="small">${gameDetails.description}</p>
        <a class="btn btn-outline-warning" target="_blank" href="${gameDetails.game_url}">Show Game</a>
    </div>
    `;
    
    $("#detailsContent").html(game);
    
    }
}