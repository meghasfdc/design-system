// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

export let Popover = props => {
  const headingUniqueId = _.uniqueId('dialog-heading-id-');
  const bodyUniqueId = _.uniqueId('dialog-body-id-');

  return (
    <section
      className={classNames(
        'slds-popover',
        props.className,
        props.isFullWidth && 'slds-popover_full-width',
        props.isHidden && 'slds-popover_hide'
      )}
      role="dialog"
      aria-labelledby={
        !props.header && props.headerTitle ? headingUniqueId : props.headingId
      }
      aria-label={!props.header && !props.headerTitle ? props.title : null}
      aria-describedby={bodyUniqueId}
      style={props.style}
      id={props.popoverId}
    >
      {props.closeButton ? (
        <ButtonIcon
          className={classNames(
            'slds-button_icon-small slds-float_right slds-popover__close',
            props.inverse && 'slds-button_icon-inverse'
          )}
          symbol="close"
          assistiveText="Close dialog"
          title="Close dialog"
        />
      ) : null}
      {!props.header && props.headerTitle ? (
        <Header
          id={headingUniqueId}
          className={props.headerClassName}
          title={props.headerTitle || 'Heading Title'}
          symbol={props.headerIconName}
          assistiveText={props.headerAssistiveText}
        />
      ) : (
        props.header
      )}
      <div
        className={classNames('slds-popover__body', props.bodyClassName)}
        id={bodyUniqueId}
      >
        {props.children}
      </div>
      {props.footer ? (
        <footer
          className={classNames(
            'slds-popover__footer',
            props.footerClassName,
            props.hasFormFooter && 'slds-popover__footer_form'
          )}
        >
          {props.footer}
        </footer>
      ) : null}
    </section>
  );
};

Popover.propTypes = {
  bodyClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  closeButton: PropTypes.bool,
  footer: PropTypes.node,
  footerClassName: PropTypes.string,
  hasFormFooter: PropTypes.bool,
  header: PropTypes.node,
  headerAssistiveText: PropTypes.string,
  headerClassName: PropTypes.string,
  headerIconName: PropTypes.string,
  headerTitle: PropTypes.string,
  headingId: PropTypes.string,
  inverse: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isHidden: PropTypes.bool,
  popoverId: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string
};

let Header = props => (
  <header className={classNames('slds-popover__header', props.className)}>
    {props.symbol ? (
      <span
        className="slds-icon_container slds-m-right_small"
        title={props.assistiveText}
      >
        <SvgIcon
          className="slds-icon slds-icon_small slds-icon-text-default"
          sprite="utility"
          symbol={props.symbol}
        />
        <span className="slds-assistive-text">{props.assistiveText}</span>
      </span>
    ) : null}
    <h2 id={props.id} className="slds-text-heading_small">
      {props.title}
    </h2>
  </header>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Popover className="slds-nubbin_left" closeButton title="Dialog Title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </Popover>
);

export let examples = [
  {
    id: 'header',
    label: 'With Header',
    element: (
      <Popover
        className="slds-nubbin_left"
        headerTitle="Header Title"
        closeButton
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    id: 'footer',
    label: 'With Footer',
    element: (
      <Popover
        className="slds-nubbin_left"
        footer={<p>Footer Item</p>}
        closeButton
        title="Dialog Title"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  }
];
