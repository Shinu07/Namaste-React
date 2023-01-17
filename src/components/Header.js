
export const Title = () => (
    <a href="/">
        <img className="logo" alt="logo-image" src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7" />
    </a>
)

//composing components
 const Header = () => {
    return (<div className="header">
        <Title />
        <div className="Nav-items">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
};

export default Header;