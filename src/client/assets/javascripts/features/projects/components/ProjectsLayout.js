import React, { Component, PropTypes } from 'react';

import ProjectList from '../components/ProjectList';
import './ProjectListApp.scss';
import Header from "components/Header";

export default class ProjectsLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    projects: PropTypes.object.isRequired
  };

  render() {
    const { projects: { projectsById }, actions } = this.props;

    return (
      <div className="projectListApp">
        <Header/>
        <ProjectList projects={projectsById} actions={actions} />
      </div>
    );
  }
}
