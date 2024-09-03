const templatePaginaNarrow = (pageNumber, content=null) => /*html*/ `

    <div id="page${pageNumber}-narrow" class="page">
        <div class="content-narrow">
            pagina ${pageNumber}
        </div>
    </div>
`;

export default templatePaginaNarrow;