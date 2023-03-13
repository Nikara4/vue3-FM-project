import { v4 as uuidv4 } from 'uuid';


export const quizList = [
  {
    id: uuidv4(),
    name: 'Books',
    apiCall: 'amount=10&category=10&difficulty=medium&type=multiple',
    path: 'books',
    longDescr: ''
  },
  {
    id: uuidv4(),
    name: 'Video Games',
    apiCall: 'amount=10&category=15&difficulty=medium&type=multiple',
    path: 'video-games',
    longDescr: ''
  },
  {
    id: uuidv4(),
    name: 'Anime & Manga',
    apiCall: 'amount=10&category=31&difficulty=medium&type=multiple',
    path: 'anime-manga',
    longDescr: ''
  },
  {
    id: uuidv4(),
    name: 'Celebrities',
    apiCall: 'amount=10&category=26&difficulty=medium&type=multiple',
    path: 'celebrities',
    longDescr: ''
  },
  {
    id: uuidv4(),
    name: 'Animals',
    apiCall: 'amount=10&category=27&difficulty=medium&type=multiple',
    path: 'animals',
    longDescr: ''
  },
  {
    id: uuidv4(),
    name: 'Geography',
    apiCall: 'amount=10&category=22&difficulty=medium&type=multiple',
    path: 'geography',
    shortDescr: '',
    longDescr: ''
  },
];