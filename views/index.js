const welcomePage = () => /*html*/ `
    <!DOCTYPE html>
    <html>

        <head>
            <title> Ghidul Bobocului </title>
            <link rel="stylesheet" href="css/style.css">
            <script src="java_script/htmx.min.js"></script>
        </head>

        <body>

            <main
                id="main"
                class="flex"
                hx-get="/homePage"
                hx-trigger="click"
                hx-swap="outerHTML"
            >
                
                <div id="welcome-banner"> Banner / Welcome page / Ceva </div>
                
            </main>
            
        </body>

    </html>
`;

export default welcomePage;