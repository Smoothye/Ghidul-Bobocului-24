const templatePaginaNarrow = (pageNumber, content=null) => /*html*/ `

    <div id="page${pageNumber}-narrow" class="page">
        <div class="content-narrow">
            pagina ${pageNumber}
        </div>
        <div class="right-arrow"> &rarr; </div>
        <div class="left-arrow"> &larr; </div>
    </div>
`;

export default templatePaginaNarrow;