import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './ProjectListItem.scss';

export default class ProjectListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starProject: PropTypes.func.isRequired,
    starred: PropTypes.bool
  };

  render() {
    return (
      <li className="projectListItem">
        <span className="projectActions">
          <button className="btn btn-default btnAction" onClick={() => this.props.starProject(this.props.id)}>
            <i className={classnames('fa', { 'fa-star': this.props.starred }, { 'fa-star-o': !this.props.starred })} />
          </button>
        </span>
        <div className="projectInfos">
          <div><span>{this.props.name}</span></div>
        </div>
      </li>
    );
  }
}
