import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './ProjectListItem.scss';

export default class ProjectListItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    clientName: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rateProject: PropTypes.func.isRequired,
    rated: PropTypes.string
  };

  render() {
    return (
      <li className="projectListItem">
        <span className="projectActions">
          <button className={classnames('btnAction btnAction-dislike', { 'active': this.props.rated === 'DISLIKE' })} onClick={() => this.props.rateProject(this.props.id, 'DISLIKE')}>
            <i className="fa fa-remove" />
          </button>
          <button className={classnames('btnAction btnAction-like', { 'active': this.props.rated === 'LIKE' })} onClick={() => this.props.rateProject(this.props.id, 'LIKE')}>
            <i className="fa fa-check"/>
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
