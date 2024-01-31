export function getFullYear() {
    return new Date().getFullYear();
  }
  
  export function getFooterCopy(isIndex) {
    let message = 'Holberton School';
  
    if (!isIndex) message = 'Holberton School main dashboard';
  
    return message;
  }