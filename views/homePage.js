const homePage = () => /*html*/ `

    <main id="main" class="flex transition">

        <div class="grid">
            
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
                >
                    GB
                </div>

            </div>
            <div
                class="grid-item flex"
                id="parteneri"
                hx-get="/parteneri"
                hx-trigger="click"
                hx-target="#main"
                hx-swap="outerHTML transition:true"
            >
                Parteneri
            </div>

        </div>

    </main>
`;

export default homePage;