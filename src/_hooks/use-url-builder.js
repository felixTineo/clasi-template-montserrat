import { useContext } from 'react';
import context from '../_context/';

export default (url, location) => {
  const { typeId, id } = useContext(context).office;
  const fixedParams = `&status=PUBLICADA,VENDIDA,ARRENDADA&limit=9&typeId=${typeId}&id=${id}&integration=WEB`;
  const search = location.search ? location.search : '?';
  return url + search + fixedParams;
}