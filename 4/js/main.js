const NAMES = [
  'Анна',
  'Андрей',
  'Джоана',
  'Педро',
  'Олег',
  'Санта',
  'Юлия',
  'Евгения',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Мне нравятся слухи. Я так много узнала о себе, чего до этого даже не знала.',
  'Здравый смысл подобен дезодоранту. Люди, которым это нужно больше всего, никогда им не пользуются!',
  'Я не могу убрать свою комнату, потому что меня отвлекают интересные вещи, которые я нахожу!',
  'Откладывать отпуск в ожидании — это дурной тон.',
  'Оставайся сильным, скоро выходные!',
  'Я не всегда учусь, но когда учусь, то не учусь.',
  'Каждой красавице нужно ее чудовище.',
  '75% моего юмора начинается с плохой фотографии.',
  'Лучшая свадьба — та, на которой ваши желудки полны.'
];
const getIdGenerator = () => {
  let LastIdGenerator = 0;
  return () => {
    LastIdGenerator += 1;
    return LastIdGenerator;
  };
};
function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];
//Создаем комменатрий
const generateCommentId = getIdGenerator();
const generatePhotoId = getIdGenerator();

const createComment = ()=> ({
  id: generateCommentId (),
  avatar: `img/avatar-${ getRandomInteger (1, 6) }.svg`,
  MESSAGES: getRandomArrayElement (MESSAGES),
  name: getRandomArrayElement (NAMES),});

//Группа коментариев от 0 до 30
const createComments = Array.from({length:getRandomInteger (0, 30)}, createComment);

//Создаем одно фото с комментарием
const createPhoto = ()=> ({
  id: generatePhotoId (),
  url: `photos/${ getRandomInteger (1,6) }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger (15, 200),
  comments: createComment (),
});

const createPhotos = Array.from({length:getRandomInteger (0, 30)}, createPhoto);
createComments();
createPhotos ();
