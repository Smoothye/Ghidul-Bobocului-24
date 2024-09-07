import templateCardParteneri from "./templateCardParteneri.js";

const paginaParteneri = () => /*html*/ `

    <main id="main" class="transition">

        <div class="parteneri flex flex-orizontal">

            ${templateCardParteneri()}
            ${templateCardParteneri()}
            ${templateCardParteneri()}
            ${templateCardParteneri()}
            ${templateCardParteneri()}
            ${templateCardParteneri()}
            
        </div>
        
    </main>
`;

export default paginaParteneri;
