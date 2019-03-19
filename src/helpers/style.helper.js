import { css } from 'emotion';
import { isArray } from 'util';

const getThemeStyles = (paths, context, localStyles) => {
  const theme = context.theme;

  if (!theme) {
    return [];
  }

  const _paths = isArray(paths)
  ? paths.slice()
  : [paths];

  const classNames = _paths.map(path => 
    css([
      path.split('.').reduce((obj, part) => obj[part], theme)
    ])
  )
  
  return classNames.join(' ') + (localStyles ? ' ' + localStyles : '');
}

export default getThemeStyles;