const templatePagina = (pageNumber, contentFront=null, contentBack=null) => /*html*/ `
    
    <div id="page${pageNumber}" class="page">
        <div class="front">
            <div id="front${pageNumber}" class="front-content">
                <h1> Front ${pageNumber} </h1>
            </div>
        </div>
        <div class="back">
            <div id="back${pageNumber}" class="back-content">
                <h1> Back ${pageNumber} </h1>
            </div>
        </div>
    </div>
`;

export default templatePagina;