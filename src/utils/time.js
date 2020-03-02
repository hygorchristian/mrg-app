import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatSeconds = sec => {
  if (!sec) {
    return '';
  }

  var sec_num = parseInt(sec, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  if (hours !== '00') {
    return hours + ':' + minutes + ':' + seconds;
  }

  return minutes + ':' + seconds;
};

export const getLastMin = (duration, position) => {
  const sec = duration - position;

  var sec_num = parseInt(sec, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);

  if (hours > 0) {
    return `${hours} H ${minutes} MIN RESTANTE(S)`;
  }

  if (hours === 0 && minutes < 2) {
    return 'TOCADO';
  }

  return `${minutes} MIN RESTANTE(S)`;
};

export const formatDMY = d => {
  const date = new Date(d);

  return format(date, 'd MMM yyyy', { locale: ptBR }).toUpperCase();
};
