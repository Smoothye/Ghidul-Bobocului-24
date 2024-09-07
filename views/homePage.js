const homePage = () => /*html*/ `
    
    <main id="main" class="flex transition">

        <div class="grid flex">
            
            <div class="grid-item flex" id="banner-ghid"> Titlu GB24 </div>
            <div class="grid-item flex" id="text-home-page"> Text Ceva Chestii </div>
            <div class="grid-item flex" id="ghid">

                <div
                    id="coperta-ghid"
                    class="flex"
                    hx-get="/ghid"
                    hx-trigger="click"
                    hx-target="#main"
                    hx-swap="outerHTML transition:true"
                    onclick="history.pushState({page:'/ghid'}, null, 'ghid')"
                >
                    <img src="media/coperta_fata.svg" width="100%" height="100%">
                </div>

            </div>
            <div
                class="grid-item flex"
                id="parteneri"
                hx-get="/parteneri"
                hx-trigger="click"
                hx-target="#main"
                hx-swap="outerHTML transition:true"
                onclick="history.pushState({page:'/parteneri'}, null, 'parteneri')"
            >
                Parteneri
            </div>

        </div>

    </main>
`;

export default homePage;