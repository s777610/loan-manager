import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRAION
} from "./types";

export const setDisableBalanceOnAdd = () => {
  // Get settings from localStore
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggle
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;

  // Setback to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));

  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  };
};

export const setDisableBalanceOnEdit = () => {
  // Get settings from localStore
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggle
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;

  // Setback to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));

  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  };
};

export const setAllowRegistration = () => {
  // Get settings from localStore
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggle
  settings.allowRegistration = !settings.allowRegistration;

  // Setback to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));

  return {
    type: ALLOW_REGISTRAION,
    payload: settings.allowRegistration
  };
};
