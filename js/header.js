export function header() {
    document.body.insertAdjacentHTML('afterbegin',
            <header class="main-header">
        <nav>
            <a href="../">Main</a>
            <a href="../cards/">Cards</a>
            <a href="../darzas/">Darzas</a>
            <a href="../plus-1/">Plus 1</a>
            <a href="../spalvos/">Spalvos</a>
            <a href="../add-block/">Add block</a>
            <a href="../add-todo/">Add todo</a>
            <a href="../todo/">Todo</a>
        </nav>
    </header>
    )
}