class AppConstants {}

//ACTIONS
AppConstants.ACTION_OPEN_CLOSE_MENU = 'ACTION_OPEN_CLOSE_MENU';
AppConstants.ACTION_SELECT_MENU_ITEM = 'ACTION_SELECT_MENU_ITEM';
AppConstants.ACTION_SAVE_BROKER_SETTINGS = 'ACTION_SAVE_BROKER_SETTINGS';
AppConstants.ACTION_DELETE_BROKER_SETTINGS = 'ACTION_DELETE_BROKER_SETTINGS';
AppConstants.ACTION_ADD_PUBLISHER_BUTTON_CLICK = 'ACTION_ADD_PUBLISHER_BUTTON_CLICK';
AppConstants.ACTION_REMOVE_PUBLISHER_BUTTON_CLICK = 'ACTION_REMOVE_PUBLISHER_BUTTON_CLICK';
AppConstants.ACTION_ADD_SUBSCRIBER_BUTTON_CLICK = 'ACTION_ADD_SUBSCRIBER_BUTTON_CLICK';
AppConstants.ACTION_REMOVE_SUBSCRIBER_BUTTON_CLICK = 'ACTION_REMOVE_SUBSCRIBER_BUTTON_CLICK';
AppConstants.ACTION_SET_SELECTED_BROKER = 'ACTION_SET_SELECTED_BROKER';
AppConstants.ACTION_RECONNECT_BROKER = 'ACTION_RECONNECT_BROKER';
AppConstants.ACTION_PUBLISH_MESSAGE_TO_TOPIC = 'ACTION_PUBLISH_MESSAGE_TO_TOPIC';
AppConstants.ACTION_CLEAR_PUBLISHER_CONNECTION_DATA = 'ACTION_CLEAR_PUBLISHER_CONNECTION_DATA';
AppConstants.ACTION_SUBSCRIBE_TO_TOPIC = 'ACTION_SUBSCRIBE_TO_TOPIC';
AppConstants.ACTION_UN_SUBSCRIBE_TO_TOPIC = 'ACTION_UN_SUBSCRIBE_TO_TOPIC';

//EVENTS
AppConstants.EVENT_OPEN_CLOSE_MENU = 'EVENT_OPEN_CLOSE_MENU';
AppConstants.EVENT_SELECT_MENU_ITEM = 'EVENT_SELECT_MENU_ITEM';
AppConstants.EVENT_BROKER_SETTINGS_CHANGED = 'EVENT_BROKER_SETTINGS_CHANGED';
AppConstants.EVENT_SUBSCRIBER_DATA = 'EVENT_SUBSCRIBER_DATA';
AppConstants.EVENT_BROKER_CONNECTION_STATE_CHANGED = 'EVENT_BROKER_CONNECTION_STATE_CHANGED';
AppConstants.EVENT_PUBLISHER_DATA = 'EVENT_PUBLISHER_DATA';
AppConstants.EVENT_MESSAGE_RECEIVED = 'EVENT_MESSAGE_RECEIVED';

//MENU ID'S
AppConstants.MENU_ADD_EDIT_BROKER = 'MENU_ADD_EDIT_BROKER';
AppConstants.MENU_BROKER_DETAILS = 'MENU_BROKER_DETAILS';

//CONSTANTS
AppConstants.ONLINE = 'ONLINE';
AppConstants.OFFLINE = 'OFFLINE';
AppConstants.CLOSE = 'CLOSE';
AppConstants.ERROR = 'ERROR';

//SUPPORTED CLIENTS
AppConstants.WEB = 'WEB';
AppConstants.CHROME_APP = 'CHROME_APP';
AppConstants.CLIENT_TYPE = AppConstants.WEB; //WEB,CHROME_APP

export default AppConstants;
