import { v4 as uuidv4 } from 'uuid';
import ProjectImg from 'https://res.cloudinary.com/dy2odrrzx/image/upload/v1701978851/coder_l1o34a.gif';
import UTrackerImg from 'https://res.cloudinary.com/dy2odrrzx/image/upload/v1701978845/crypto_umm5z4.png';
import GreenCtgImg from 'https://res.cloudinary.com/dy2odrrzx/image/upload/v1701978846/CryptoData_zrr6sn.jpg';
import CoinTrackerImg from 'https://res.cloudinary.com/dy2odrrzx/image/upload/v1701978845/Screenshot_2023-03-21_234059_tyqvkj.png';
import CavinImg from 'https://res.cloudinary.com/dy2odrrzx/image/upload/v1701978851/coder_l1o34a.gif';

const projects = [
  {
    id: uuidv4(),
    name: 'CryptoWeather',
    desc:
      'This application  retrieves information about a specific cryptocurrency using the Coinpaprika API.The user can input a cryptocurrency name into a search...',
    img: UTrackerImg,
    link: 'https://ricardoci.github.io/CryptoData/',
  },
  {
    id: uuidv4(),
    name: 'WeatherApp',
    desc:
      'My responsibilities in this project included setting up a fetch call to the API, implementinga watchlist feature to save desired currency data in local storage, and styling the application.',
    img: GreenCtgImg,
    link: 'https://ricardoci.github.io/WeatherForecastApp/',
  },
  {
    id: uuidv4(),
    name: 'Target Property Locator',
    desc:
      'A web application that allows Target team members to quickly and easily access location information for all Target stores and distribution centers in the US.',
    img: CoinTrackerImg,
    link: 'https://targetsearchapp.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: "Coming Soon",
    desc:
      'n/a',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Coming Soon',
    desc:
      'N/a',
    img: ProjectImg,
  },
];

export default projects;
