import touristPic from '../../assets/tourist.webp';
import farmerPic from '../../assets/farmers.jpg';
import bloodDonationPic from '../../assets/blood-donation.jpg';
import toDoPic from '../../assets/to-do.jpg';

export const projectInformation = [
    {
        id: 1,
        name: 'Voila ',
        about: 'A portal to make the tourist connect with the guides according to their need. The app focuses on every type of tourist whether he is local ' +
            'or national or international, whether the person likes heritage or he likes to have adveture, every guide caters to the need of a specific tourist'
            +' .Selected as the top 1% project for Grand Finale of Smart India Hackathon 2020.',
        site: 'http://voilas.herokuapp.com/',
        role: 'Worked as the Team Leader and REST API developer in Node.js',
        implementations: [
            'AWS S3',
            'MongoDB Atlas',
            'Chatting and notifications using socket.IO',
            'Google MAPS APIs'
        ],
        image: touristPic
    },
    {
        id: 2,
        name: 'Seheyogi',
        about: 'An intelligent insect pet depetection portal which helped farmers to detect which'+
                ' type of insect pest is contaminating their crop. Upon detection, solution to get'+
                ' rid of the pest is also given to the farmers. Selected as the top 1% project '+
                'for Grand Finale of Smart India Hackathon 2019',
        role: 'Worked as the Team Leader and REST API developer in Node.js',
        implementations: ['MEAN Stack','Image Recognition Model','Google geolocation API'],
        image: farmerPic
    },
    {
        id:3,
        name: 'To-do app',
        site: 'https://affectionate-hugle-d534ae.netlify.app/',
        about: 'A simple to-do app with very minimal styling. Person can add a task, select the priority'+
                ' ,see all the tasks and mark the task as done once completed. Tasks can also be seen by'+
                ' sorting according to priority of the task.',
        role: 'Solo Implementation',
        implementations:['MERN stack','Atlas'],
        image: toDoPic
    },
    {
        id: 4,
        name: 'Blood Donation Collector',
        about: 'A solo project made for feeding the details of the donor in the blood donation camp'+
                ' conducted in my college. The person could feed, view and edit the details of donor'+
                ' and the ist can be downloaded as an excel sheet.',
        role: 'Made the whole project in Node.js',
        implementations: ['mongoDB','atlas','file system and excel'],
        image: bloodDonationPic
    }
]

// {
//     id: 1,
//     name: 'Make Your Cloth',
//     about: 'A hyper market fully customizable clothing e-commerce app that aims to change the way people buy their daily and special occations clothes',
//     site: 'https://makeyourcloth.com/',
//     role: 'I have interned here as a REST API developer in Node.js and after a couple of months I started developing micro-services',
//     implementations: [
//         'Chatting and notifications using socket.IO',
//         'Distance Matrix and Geolocation API',
//         'NP Hard pickup and delivery',
//         '3 microservices',
//         'Cron jobs'
//     ],
//     image:stitchingPic
// },