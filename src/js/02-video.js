// Import library
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

// Constant value entry
const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

// Get videoplayer element and a player
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// Set and get current time from localStorage
const onPlay = ({ seconds }) =>
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, seconds);
const videoplayerCurrentTime = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);

// Start traking the timeupdate event with a delay 1s and set current time
player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(videoplayerCurrentTime);
