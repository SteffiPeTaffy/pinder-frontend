import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import projects, { NAME as projectsName } from 'features/projects';

export default combineReducers({
  routing,
  [projectsName]: projects
});
