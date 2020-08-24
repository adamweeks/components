import React from 'react';
import PropTypes from 'prop-types';
import {List} from '@momentum-ui/react';

import WebexParticipant from '../WebexParticipant/WebexParticipant';
import useMemberships from '../hooks/useMemberships';

// TODO: Figure out how to import JS Doc definitions and remove duplication.
/**
 * Enum for types of destinations.
 *
 * @external DestinationType
 * @see {@link https://github.com/webex/component-adapter-interfaces/blob/master/src/MembershipsAdapter.js#L21}
 */

/**
 * Displays the roster of Webex meeting or room participants.
 *
 * @param {string} props.destinationID  ID of the destination for which to get members
 * @param {string} props.destinationType Type of destination of the membership roster
 *
 * @returns {object} JSX of the component
 */
export default function WebexParticipantRoster({destinationID, destinationType}) {
  const participants = useMemberships(destinationID, destinationType);

  const participantList = participants.map((participant) => (
    <WebexParticipant key={participant.personID} personID={participant.personID} />
  ));

  return <List>{participantList}</List>;
}

WebexParticipantRoster.propTypes = {
  destinationID: PropTypes.string.isRequired,
  destinationType: PropTypes.string.isRequired
};
