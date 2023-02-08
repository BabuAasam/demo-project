import Snackbar from 'react-native-snackbar';

export function snackBar(message, color) {
  return Snackbar.show({
    text: message,
    backgroundColor: getColor(color),
  });
}

const getColor = color => {
  switch (color) {
    case 'success':
      return 'green';
    case 'failer':
      return 'red';
    case 'warning':
      return 'yellow';
    case 'alert':
      return 'pink';
    default:
      return;
  }
};
