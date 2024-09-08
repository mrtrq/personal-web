// const Footer = () => {
//     return(
//         <div className="grid grid-cols-2 absolute bottom-0 left-0 w-full p-4 text-black text-center font-light">
//             <p>© 2024 Tarreq Maulana. All rights reserved</p>
//         </div>
//     )
// }
// export default Footer

const Footer = () => {
    return(
        <div className="grid grid-cols-2 absolute bottom-6 left-0 w-full p-4 text-black text-center font-light">
            <p>© 2024 Tarreq Maulana. All rights reserved</p>
            <div className="flex justify-center space-x-4">
                <a href="https://twitter.com/plandemic_" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200 ease-in-out">
                    Twitter
                </a>
                <a href="https://www.linkedin.com/in/tarreqmaulana/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200 ease-in-out">
                    LinkedIn
                </a>
                <a href="https://github.com/mrtrq" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200 ease-in-out">
                    GitHub
                </a>
            </div>
        </div>
    )
}
export default Footer
