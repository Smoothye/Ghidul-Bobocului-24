import templateBackButton from "./templateBackButton.js";
import templateCardParteneri from "./templateCardParteneri.js";

const paginaParteneri = () => /*html*/ `

    <main id="main" class="transition">

        ${templateBackButton()}

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
