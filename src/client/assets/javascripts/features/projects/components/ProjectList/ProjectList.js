import React, { Component, PropTypes } from 'react';

import ProjectListItem from '../ProjectListItem';
import './ProjectList.scss';

export default class ProjectList extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired
  };

  renderList() {
    return this.props.projects.map((project) =>
      (
        <ProjectListItem
          key={project.id}
          id={project.id}
          projectName={project.projectName}
          clientName={project.clientName}
          location={project.location}
          starred={project.starred}
          {...this.props.actions} />
      )
    );
  }

  render() {
    return (
      <ul className="projectList">
        {this.renderList()}
      </ul>
    );
  }
}
