export const intervalTitle = (setTitle) => {
    const title = 'Tambien puedes contactarme en mis otras redes.';
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
    }, 50);
  };

