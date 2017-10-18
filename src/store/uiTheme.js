import { createAction, handleAction } from 'redux-actions';
import ColorIndigo from 'material-ui/colors/indigo';
import ColorOrange from 'material-ui/colors/orange';

const defaultTheme = {
  palette: {
    primary: ColorIndigo,
    secondary: ColorOrange,
    type: 'light',
  },
};

export const updateUiTheme = createAction('UPDATE_UI_THEME');

export const uiTheme = handleAction(
  updateUiTheme,
  (state, action) => ({
    ...action.payload,
  }),
  defaultTheme,
);