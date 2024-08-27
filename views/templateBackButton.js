const templateBackButton = () => /*html*/ `
    <button
        id="back-button"
        hx-get="/homePage"
        hx-trigger="click"
        hx-target="#main"
        hx-swap="outerHTML transition:true"
    >
        <
    </button>
`;

export default templateBackButton;