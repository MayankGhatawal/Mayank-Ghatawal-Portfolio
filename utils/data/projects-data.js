import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'SnapGram Social Media Web/App',
        description: "Dynamic User Interactions: Built a social media platform using Next.js and TypeScript, enabling users to post photos, comment, like, and manage profiles. Real-Time Features: Integrated real-time notifications and implemented user authentication with JWT for secure interactions. Scalable Architecture: Utilized MongoDB, Express.js, and Redux to handle data efficiently, with a responsive Material-UI design for a seamless user experience.",
        tools: ['Next.js', 'TypeScript', 'Appwrite', 'Shadcn UI', 'TailwindCSS', 'Scss', 'Appwrite'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'The Book World',
        description: 'Users can explore books, leave reviews with star ratings, and manage their favorites. Admins enjoy extended features to manage books, users, and access controls.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Face Recognisation Attendance System',
        description: "This project is a Face Recognition Attendance System built using Streamlit and OpenCV. The application captures images from a webcam, recognizes faces, and marks attendance in real-time.",
        tools: ['Python3','Streamlit','OpenCV','NumPy','Pandas'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },