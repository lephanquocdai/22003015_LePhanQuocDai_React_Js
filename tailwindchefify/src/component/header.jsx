import logo from "../assets/data/lab01/Group 9.png";
import avatar from "../assets/data/lab02/Avatar 35.png";

function Header() {
    return (
        <header className="flex items-center justify-between p-3 bg-white shadow-md">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-36 h-8 mr-3" />
            </div>
            <input
                type="text"
                placeholder="Search"
                className="px-3 py-2 border border-gray-300 rounded-full w-64"
            />
            <nav className="flex gap-5 text-sm">
                <a href="#" className="text-black hover:text-gray-600">What to cook</a>
                <a href="#" className="text-black hover:text-gray-600">Recipes</a>
                <a href="#" className="text-black hover:text-gray-600">Ingredients</a>
                <a href="#" className="text-black hover:text-gray-600">Occasions</a>
                <a href="#" className="text-black hover:text-gray-600">About us</a>
            </nav>
            <div className="flex items-center gap-2">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full">Your Recipe Box</button>
                <img src={avatar} alt="User Profile" className="w-8 h-8 rounded-full" />
            </div>
        </header>
    );
}

export default Header;
