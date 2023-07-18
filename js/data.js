import {createPhotosArray} from './utils.js';
import {getRandomInteger} from './utils.js';
import {NAMES, MESSAGES, DESCRIPTIONS} from './staticdata.js';
const getIdGenerator = () => {
  let lastIdGenerator = 0;
  return () => {
    lastIdGenerator += 1;
    return lastIdGenerator;
  };
};

//Создаем комменатрий
const generateCommentId = getIdGenerator();
const generatePhotoId = getIdGenerator();

const createComment = ()=> ({
  id: generateCommentId (),
  avatar: `img/avatar-${ getRandomInteger (1, 6) }.svg`,
  MESSAGES: createPhotosArray (MESSAGES),
  name: createPhotosArray (NAMES),});

//Группа коментариев от 0 до 30
const createComments = Array.from({length:getRandomInteger (0, 30)}, createComment);

//Создаем одно фото с комментарием
const createPhoto = ()=> ({
  id: generatePhotoId (),
  url: `photos/${ getRandomInteger (1,6) }.jpg`,
  description: createPhotosArray(DESCRIPTIONS),
  likes: getRandomInteger (15, 200),
  comments: createComments(),
});

const createPhotos = Array.from({length:getRandomInteger (0, 30)}, createPhoto);

export {createPhotos};
