import generateJoke from "./generateJoke";
import './styles/main.scss';
import Download from './assets/download.png';

const downloadImg = document.getElementById('downloadImg');
downloadImg.src = Download;

console.log(generateJoke());