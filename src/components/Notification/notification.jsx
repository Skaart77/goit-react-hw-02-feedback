import PropTypes from 'prop-types';
import { Title } from './notification.styled';

const Notification = ({ message }) => {
  return <Title>{message}</Title>;
};

export default Notification;
