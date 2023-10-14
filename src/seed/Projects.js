import jj from '../assets/javaJournal.png'
import bs from '../assets/battlesalvo.png'
import py from '../assets/rootFind.png'
import x from '../assets/X-spot.png'

export const ProjectList = [
    {
        name: "X-SpotFinder Social Media App",
        image: x,
        skills: "React, Express, MongoDB, Node.js, Cloudinary, Mapbox",
        des: 'I developed a social media platform for extreme sport enthusiasts using the MERN tech stack.\
        Included the integration of Mapbox for an interactive map feature, allowing users to store and explore \
         "trick-worthy" spots on the map as well as a photo and a pin. Used cloudinary for easy multimedia managment. Providing a simple\
         API for easily uploading media files directly through the browser. \
          Additionally, included user authentication and personal profiles.',
        url: 'https://github.com/alexs-2020/X-SpotFinder'
    },
    {
        name: "Week-Book",
        image: jj,
        skills: "Java, OOD",
        des: "In 2023, I designed and implemented a Java-based calendar application \
        for Week-Book in Boston, MA. Leveraging the Model-View-Controller (MVC) architecture \
        and JavaFX framework, I crafted a feature-rich platform. Users could seamlessly manage\
         Events and Tasks separately, aided by advanced features like task completion status tracking,\
          multiple themes, and versatile sorting and search capabilities. My contributions extended to\
           developing robust file I/O functionality for data persistence and conducting rigorous testing\
            to ensure the application's unwavering reliability and stability.",
        url: 'https://github.com/alexs-2020/Week-book'
    },
    {
        name: "Root-Finder Visualizer",
        image: py,
        skills: "Python",
        des: "Part of a school project  written in python. Used the pyplot, numpy, and sympy to create a visualization program to find the \
         zeros of a given function. Using the CLI, the user may input a function, lower bound, and upper bound to search for a zero inbtween.\
         The user is then given three options on which searc-method to us: Newton, Secant, Bisecant.",
        url: 'https://github.com/alexs-2020/Week-book'
    },
    {
        name: "BattleSalvo",
        image: bs,
        skills: "Java, OOD",
        des: "IIn 2023, I undertook the development of a comprehensive Battleship game in\
         a Command Line Interface (CLI) environment, utilizing Java, the Model-View-Controller \
         (MVC) architectural pattern, and Object-Oriented Design (OOD) principles. My work extended \
         to implementing an advanced AI shot-guessing algorithm, enhancing the AI opponent's strategic\
          capabilities based on heuristic analysis of prior successful shots and misses. This project \
          showcased my expertise in software development and problem-solving, demonstrating proficiency\
           in CLI-based gaming and AI strategy. As a class project, this was later developed into just\
            an AI setup to fight against a server AI through JSON requests. The class held a tournament\
             for all the AI's to battle each other. ",
        url: 'https://github.com/alexs-2020/BattleShip'
    },
]