// @flow

import { createStructuredSelector } from 'reselect';
import assign from 'lodash/assign';

import { State } from 'models/projects';

// Action Types

// Define types in the form of 'npm-module-or-myapp/feature-name/ACTION_TYPE_NAME'
const RATE_PROJECT = 'redux-app/projects/RATE_PROJECT';

// This will be used in our root reducer and selectors
export const NAME = 'projects';

// Define the initial state for `projects` module

const initialState: State = {
  projects: [0, 1, 2, 3, 4],
  projectsById: [
    {
      id: 0,
      clientName: 'Jungheinrich',
      projectName: 'Globus IoT platform H2 2017',
      location: 'Hamburg'
    },
    {
      id: 1,
      clientName: 'Metro',
      projectName: 'Globus IoT platform H2 2017',
      location: 'Düsseldorf'
    },
    {
      id: 2,
      clientName: 'Fresh Energy',
      projectName: 'Globus IoT platform H2 2017',
      location: 'Berlin'
    },
    {
      id: 3,
      clientName: 'Daimler',
      projectName: 'Globus IoT platform H2 2017',
      location: 'Berlin'
    },
    {
      id: 4,
      clientName: 'Immobilien Scount',
      projectName: 'Globus IoT platform H2 2017',
      location: 'Berlin'
    }
  ]
};

// Reducer

export default function reducer(state: State = initialState, action: any = {}): State {
  switch (action.type) {
    case RATE_PROJECT:
      return {
        ...state,
        projectsById: state.projectsById.map((project) => {
          if (project.id !== action.id) {
            return project;
          }

          return assign({}, project, {
            rated: action.rating
          });
        })
      };

    default:
      return state;
  }
}


// Action Creators

function rateProject(id: number, rating: string) {
  return {
    type: RATE_PROJECT,
    id,
    rating
  };
}


// Selectors
const projects = (state) => state[NAME];

export const selector = createStructuredSelector({
  projects
});

export const actionCreators = {
  rateProject
};
