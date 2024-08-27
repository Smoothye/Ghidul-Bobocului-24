import templateBackButton from "./templateBackButton.js";
import templatePagina from "./templatePagina.js";

const book = () => /*html*/ `

    <main id="main" class="flex transition" style="overflow:hidden;">
        <script src="java_script/animatieGhid.js" defer></script>
        
        <!-- ${templateBackButton()} -->

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

    </main>
`;

export default book;