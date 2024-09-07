import templatePagina from "./templatePagina.js";
import templatePaginaNarrow from "./templatePaginaNarrow.js";

const book = () => /*html*/ `

    <main id="main" class="flex transition" style="overflow:hidden;">
        <script src="java_script/animatieGhid.js" defer></script>

        <div id="book-wrapper">

            <button id="prev" hx-on:click="animatie(-1)"></button>
            <button id="next" hx-on:click="animatie(1)"></button>

            <div id="book">

                ${templatePagina(1)}
                ${templatePagina(2)}
                ${templatePagina(3)}
                ${templatePagina(4)}
                ${templatePagina(5)}

            </div> <!-- end of book -->
        </div> <!-- end of book wrapper -->

        <div id="book-wrapper-narrow">

            <button id="prev-narrow" hx-on:click="animatieNarrow(-1)"></button>
            <button id="next-narrow" hx-on:click="animatieNarrow(1)"></button>

            <div id="book-narrow">

                ${templatePaginaNarrow(1)}
                ${templatePaginaNarrow(2)}
                ${templatePaginaNarrow(3)}
                ${templatePaginaNarrow(4)}
                ${templatePaginaNarrow(5)}
                ${templatePaginaNarrow(6)}
                ${templatePaginaNarrow(7)}
                ${templatePaginaNarrow(8)}
                ${templatePaginaNarrow(9)}
                ${templatePaginaNarrow(10)}
            </div> <!-- end of book -->
        </div> <!-- end of book wrapper -->

    </main>
`;

export default book;