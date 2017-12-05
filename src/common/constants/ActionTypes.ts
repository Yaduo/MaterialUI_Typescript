// ================== Environment Actions ==================
export const INIT_ENVIRONMENT = 'INIT_ENVIRONMENT'
export const CHANGE_IS_MOBILE = 'CHANGE_IS_MOBILE';
export const CHANGE_WIDTH_AND_HEIGHT = 'CHANGE_WIDTH_AND_HEIGHT';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

// ================== Layout Level Actions ==================
export const LOADING_START = 'LOADING_START'
export const LOADING_END = 'LOADING_END'

// ================== Account Actions ==================
// Authed 
export const RECEIVE_ACCESS_TOKEN = 'RECEIVE_ACCESS_TOKEN';
export const RECEIVE_AUTHED_USER = 'RECEIVE_AUTHED_USER';
export const RECEIVE_AUTHED_USER_PROFILES = 'RECEIVE_USER_PROFILES';
export const RECEIVE_AUTHED_PLAYLIST = 'RECEIVE_AUTHED_PLAYLIST';
export const RECEIVE_AUTHED_FOLLOWINGS = 'RECEIVE_AUTHED_USER';
export const RECEIVE_AUTHED_LIKES = 'RECEIVE_AUTHED_LIKES';
export const RECEIVE_AUTHED_COMMENTS = 'RECEIVE_AUTHED_COMMENTS';
export const RESET_AUTHED = 'RESET_AUTHED'; // logout

// non-Authed
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_PROFILES = 'RECEIVE_USER_PROFILES';
export const RECEIVE_USER_FOLLOWINGS = 'RECEIVE_USER_FOLLOWINGS';


// ================== Video Actions ==================
// Authed
export const PLAY_VIDEO_AUTHED = 'PLAY_VIDEO_AUTHED';
export const CHANGE_VIDEO_SPEED = 'CHANGE_VIDEO_SPEED';
export const APPEND_VIEDO_LIKE = 'APPEND_VIEDO_LIKE';
export const REMOVE_VIEDO_LIKED = 'REMOVE_VIEDO_LIKED';
export const APPEND_VIEDO_COMMENT = 'APPEND_VIEDO_COMMENT';
export const REMOVE_VIEDO_COMMENT = 'REMOVE_VIEDO_COMMENT';
export const APPEND_VIEDO_RATING = 'CHANGE_VIEDO_RATING';
export const VIEDO_DOWNLOAD = 'VIEDO_DOWNLOAD';

// non-Authed
export const PLAY_VIDEO = 'PLAY_VIDEO';
export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_VIDEO_COMMENTS = 'RECEIVE_SONG_COMMENTS';


// UI Action Golabelly



export const REQUEST_CATOGRATIES = 'REQUEST_CATOGRATIES' // ????
// Header
// ??????
// Footer
// ??????

// ================== Page Level Actions ==================
// Home Page
export const RECEIVE_BEST_SELLER_COURSES = 'RECEIVE_BEST_SELLER_VIDEOS';
export const RECEIVE_RECENTLY_VIEWED_COURSES = 'RECEIVE_RECENTLY_VIEWED_COURSES';
export const RECEIVE_RELATED_COURSES = 'RECEIVE_BEST_SELLER_VIDEOS';

// Departmemt Page
//Best Sellers in Development
//New And Noteworthy in Development

// ShoppingCart Page

// Instructor Page

// UserInfo Page














export const RECEIVE_AUTHED_PLAYLISTS = 'RECEIVE_AUTHED_PLAYLISTS';
// export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_NEW_STREAM_SONGS = 'RECEIVE_NEW_STREAM_SONGS';
export const REMOVE_UNLIKED_SONGS = 'REMOVE_UNLIKED_SONGS';
export const RECEIVE_SONG_COMMENTS = 'RECEIVE_SONG_COMMENTS';


export const CHANGE_ACTIVE_PLAYLIST = 'CHANGE_ACTIVE_PLAYLIST';
export const CHANGE_ACTIVE_SONG_ID = 'CHANGE_ACTIVE_SONG_ID';
export const CHANGE_ACTIVE_USER_ID = 'CHANGE_ACTIVE_USER_ID';
export const CHANGE_CURRENT_TIME = 'CHANGE_CURRENT_TIME';

export const CHANGE_MODAL = 'CHANGE_MODAL';
export const CHANGE_PATH = 'CHANGE_PATH';
export const CHANGE_PLAYING_SONG = 'CHANGE_PLAYING_SONG';
export const CHANGE_SELECTED_PLAYLISTS = 'CHANGE_SELECTED_PLAYLISTS';

export const PLAY_SONG = 'PLAY_SONG';


export const REQUEST_SONG = 'REQUEST_SONG';
export const REQUEST_SONGS = 'REQUEST_SONGS';
export const REQUEST_USER = 'REQUEST_USER';
export const SET_FOLLOWING = 'SET_FOLLOWING';
export const SET_LIKE = 'SET_LIKE';
export const TOGGLE_IS_PLAYING = 'TOGGLE_IS_PLAYING';
export const UNSHIFT_NEW_STREAM_SONGS = 'UNSHIFT_NEW_STREAM_SONGS';