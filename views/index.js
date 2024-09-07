const welcomePage = () => /*html*/ `
    <!DOCTYPE html>
    <html>

        <head>
            <title> Ghidul Bobocului </title>
            <link rel="stylesheet" href="css/style.css">
            <script src="java_script/htmx.min.js"></script>
        </head>

        <body class="flex">

            <main
                id="main"
                class="flex transition"
                hx-get="/homePage"
                hx-trigger="intersect delay:1s"
                hx-swap="outerHTML transition:true"
                hx-on::after-request="history.pushState({page:'/homePage'}, null, 'home-page')"
            >
                
                <div id="welcome-banner"> Banner / Welcome page / Ceva </div>
                
            </main>

        </body>

        <script>
            // override Browser Back / Forward button
            window.onpopstate = function() {

                if(!history.state) {

                    history.back();
                    return;
                }

                htmx.ajax("GET", history.state["page"], { target:"#main", swap:"outerHTML transition:true" });
            }
        </script>

    </html>
`;

export default welcomePage;