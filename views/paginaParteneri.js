import templateCardParteneri from "./templateCardParteneri.js";

const paginaParteneri = () => /*html*/ `

    <main id="main" class="transition">

        <div class="flex flex-orizontal parteneri">

            ${templateCardParteneri()}    
            ${templateCardParteneri()}   
            ${templateCardParteneri()}   
            ${templateCardParteneri()}   
            ${templateCardParteneri()}   
            
        </div>
        
    </main>
`;

export default paginaParteneri;
