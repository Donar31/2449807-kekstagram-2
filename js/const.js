// const DESCRIPTIONS = [
//   'Вся красота мира в одной картинке',
//   'Моменты, которые запечатлены навсегда',
//   'Счастье в каждом кадре',
//   'Когда слова не нужны, достаточно фотографии',
//   'История, рассказанная через объектив',
//   'Остановить время в одном кадре',
//   'Фотография — это способ улыбнуться в будущем',
//   'Сегодня — самый лучший день',
//   'Я не доверяю словам. Я доверяю фотографиям',
//   'Фотографии — это свидетельство о том, что мы жили',
//   'Момент, когда небо и земля сливаются воедино',
//   'В объектив всегда видна правда — это как детектор лжи',
//   'Сделано объективом и любовью',
//   'Счастье никогда не выходит из моды',
//   'Лишь тот, кто странствует, открывает новые пути',
//   'Зарядитесь нашим теплом',
//   'Жизнь лучше, когда ты смеешься'
// ];

// const MESSAGES = [
//   ' Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
// ];

// const NAMES = [
//   'Михаил',
//   'Артём',
//   'Александр',
//   'Матвей',
//   'Максим',
//   'Елена',
//   'Наталья',
//   'Марина',
//   'Светлана'
// ];

const COMMENTS_STEP = 5;

const MAX_SYMBOL = 140;

const MAX_HASHTAGS = 5;

const SPACE = /\s+/g;

const SCALE = {
  DEFAULT: 100,
  MIN: 25,
  MAX: 100,
  SCALE_STEP: 25
};

const EFFECTS = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const EFFECTSSETTING = {
  [EFFECTS.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'grayscale',
    units: ''
  },
  [EFFECTS.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'sepia',
    units: ''
  },
  [EFFECTS.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
    style: 'invert',
    units: '%'
  },
  [EFFECTS.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
    style: 'blur',
    units: 'px'
  },
  [EFFECTS.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
    style: 'brightness',
    units: ''
  },
};

const GET_URL = 'https://31.javascript.htmlacademy.pro/kekstagram/data';

const POST_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

export {
  // DESCRIPTIONS,
  // MESSAGES,
  // NAMES,
  COMMENTS_STEP,
  MAX_SYMBOL,
  MAX_HASHTAGS,
  SPACE,
  SCALE,
  EFFECTS,
  EFFECTSSETTING,
  GET_URL,
  POST_URL
};
