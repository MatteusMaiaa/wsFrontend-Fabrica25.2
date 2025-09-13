export default function Footer() {
  return (
    <header className="flex px-2 py-4 bg-blue-700 text-white rounded-md mt-8">
      <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
        <div className="text-red-600 font-bold">© 2025 Arena Pokémon</div>

        <nav>
          <ul className="flex items-center justify-center gap-2 font-bold">
            <li> Me encontre aqui:
              <a
                href="https://github.com/MatteusMaiaa"
                target="_blank"
                className="ml-3 px-3 py-1 rounded-md transition-colors duration-300 hover:bg-white hover:text-blue-700 font-bold"
              >
                Github
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/matteusmaiarg/"
                target="_blank"
                className="px-3 py-1 rounded-md transition-colors duration-300 hover:bg-white hover:text-blue-700 font-bold"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}