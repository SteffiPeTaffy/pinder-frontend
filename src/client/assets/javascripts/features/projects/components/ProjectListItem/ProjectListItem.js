import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './ProjectListItem.scss';

export default class ProjectListItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    clientName: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    starProject: PropTypes.func.isRequired,
    starred: PropTypes.bool
  };

  render() {
    return (
      <li className="projectListItem">
        <span className="projectActions">
          <button className="btnAction btnAction-dislike" onClick={() => this.props.starProject(this.props.id)}>
            <i className="fa fa-remove"/>
          </button>
        </span>
        <div className="projectInfos">
          <div className="projectInfos-clientName"><span>{this.props.clientName}</span></div>
          <div className="projectInfos-projectName"><span>{this.props.projectName}</span></div>
          <div className="projectInfos-location"><span>{this.props.location}</span></div>
        </div>
      </li>
    );
  }
}
