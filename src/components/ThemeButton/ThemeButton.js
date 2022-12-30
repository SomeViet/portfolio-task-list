import "./ThemeButton.scss";

export default function ThemeButton({
    buttonTheme,
    whiteTheme,
    blackTheme,
    blueTheme,
}) {
    return (
        <>
            <footer
                className={
                    buttonTheme === "white"
                        ? "theme-button"
                        : buttonTheme === "black"
                        ? "theme-button--black"
                        : buttonTheme === "blue"
                        ? "theme-button--blue"
                        : null
                }
            >
                <h3 className="theme-button__header"> Theme </h3>
                <div className="theme-button__container">
                    <button
                        className="theme-button__button"
                        onClick={whiteTheme}
                        id="white"
                    >
                        White
                    </button>
                    <button
                        className="theme-button__button"
                        onClick={blackTheme}
                        id="black"
                    >
                        Black
                    </button>
                    <button
                        className="theme-button__button"
                        onClick={blueTheme}
                    >
                        Blue
                    </button>
                </div>
            </footer>
        </>
    );
}
