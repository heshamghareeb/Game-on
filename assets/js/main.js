import { Api } from "./api.module.js";
import { gameDetailsPage } from "./gameDetails.module.js";


$(document).ready(async function () {
    const loading = $(".loading");
    loading.removeClass("d-none");
    let ApiModule = new Api();
    let gameDetailsModule = new gameDetailsPage();
    let gamesData = await ApiModule.getGames();

    let gamesPage = $(".home");
    let gamesDetailsPage = $("#details-game");

    $("#btnClose").click(function (e) { 
        e.preventDefault();
        gamesPage.removeClass("d-none")
        $(".navbar").removeClass("d-none")
        gamesDetailsPage.addClass("d-none")
    });

if (gamesData != null) {
    displayGames(gamesData)
    loading.addClass("d-none");
}


let navItems = $(".nav-item a");

for (const item of navItems) {
    $(item).click(async (eventInfo)=>{
        navItems.removeClass("active")
        $(eventInfo.target).addClass("active")
        gamesData = await ApiModule.getGames($(eventInfo.target).attr("data-category"))
        displayGames(gamesData)
    })
}


function displayGames(gamesData) {
    $(".games-items").html('')
    for (const iterator of gamesData) { 
        let col = document.createElement('div');
        col.classList.add('col-md-3');
        let gameItem = `
        <div class="game-item card h-100 bg-transparent ">
        <div class="card-body">
            <img class="card-img object-fit-cover" src="${iterator.thumbnail}">
            <div class="card-body-details d-flex justify-content-between align-items-center my-3">
                <h3 class="h6 small m-1">${iterator.title}</h3>
                <span class="badge text-bg-primary p-2">Free</span>
            </div>
        
            <p class="card-text small text-center opacity-50">
            ${iterator.short_description}
            </p>
        </div>
        
        <footer class="card-footer small d-flex justify-content-between">
            <span class="badge badge-color">${iterator.genre}</span>
            <span class="badge badge-color">${iterator.platform}</span>
        
        </footer>
        </div>
        
        `;

        col.innerHTML = gameItem

        col.addEventListener("click", async (eventInfo)=>{
            let game = await ApiModule.getGameDetails(iterator.id);
            gamesPage.addClass("d-none")
            $(".navbar").addClass("d-none")
            gameDetailsModule.displayGameDetails(game)
            gamesDetailsPage.removeClass("d-none")
        })

        $(".games-items").append(col);
    }

    loading.addClass("d-none");
}


});
