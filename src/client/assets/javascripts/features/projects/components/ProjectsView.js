import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as projectsActions, selector } from '../';
import ProjectsLayout from './ProjectsLayout';

@connect(selector, (dispatch) => ({
  actions: bindActionCreators(projectsActions, dispatch)
}))
export default class ProjectsView extends Component {
  render() {
    return (
      <div>
        <ProjectsLayout {...this.props} />
      </div>
    );
  }
}
