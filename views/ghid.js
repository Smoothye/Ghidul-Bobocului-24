import templatePagina from "./templatePagina.js";
import templatePaginaNarrow from "./templatePaginaNarrow.js";
import data from "../data/pagini.js";

let pagini = "", paginiNarrow = "";

for(let i = 1; i <= data.numarPagini / 2; i++)
    pagini = pagini.concat(`${templatePagina(i)}`);

for(let i = 1; i <= data.numarPagini; i++)
    paginiNarrow = paginiNarrow.concat(`${templatePaginaNarrow(i)}`);

const book = () => /*html*/ `

    <main id="main" class="flex transition" style="overflow:hidden;">
        <script src="java_script/animatieGhid.js" defer></script>

        <div id="book-wrapper">

            <button id="prev" onclick="animatie(-1)"></button>
            <button id="next" onclick="animatie(1)"></button>
            <button id="buton-cuprins" onclick="goToPage(3)"> CUPRINS </button>

            <div id="book">
                ${pagini}
            </div> <!-- end of book -->
        </div> <!-- end of book wrapper -->

        <div id="book-wrapper-narrow">

            <button id="prev-narrow" onclick="animatieNarrow(-1)"></button>
            <button id="next-narrow" onclick="animatieNarrow(1)"></button>
            <button id="buton-cuprins-narrow" onclick="goToPageNarrow(6)"> CUPRINS </button>

            <div id="book-narrow">
                ${paginiNarrow}
            </div> <!-- end of book -->
        </div> <!-- end of book wrapper -->

    </main>
`;

export default book;