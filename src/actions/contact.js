export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const changeInputValue = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const CHANGE_MESSAGE_VALUE = 'CHANGE_MESSAGE_VALUE';

export const changeMessageValue = (message) => ({
  type: CHANGE_MESSAGE_VALUE,
  message,
});

export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = (messageSend) => ({
  type: SEND_MESSAGE,
  messageSend,
});

export const MESSAGE_IS_SEND = 'MESSAGE_IS_SEND';

export const messageIsSend = (data) => ({
  type: MESSAGE_IS_SEND,
  data,
});