export const intervalTitle = (setTitle,name) => {
    const title = name ||'Tambien puedes contactarme en mis otras redes.';
    let index = 0;
    let intervalName = null;
    let currentText = '';
  
    intervalName = setInterval(() => {
      if (index < title.length) {
        currentText += title[index];
        setTitle(currentText);
        index++;
      } else {
        clearInterval(intervalName);
      }
    }, name?150:50);
  };

