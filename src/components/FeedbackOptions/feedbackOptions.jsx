import { ListButton, Button } from './feedbackOptions.styled';

const FeedbackOptions = ({ goodFeedback, neutralFeedback, badFeedback }) => {
  return (
    <ListButton>
      <li>
        <Button type="button" onClick={goodFeedback}>
          Good
        </Button>
      </li>
      <li>
        <Button type="button" onClick={neutralFeedback}>
          Neutral
        </Button>
      </li>
      <li>
        <Button type="button" onClick={badFeedback}>
          Bad
        </Button>
      </li>
    </ListButton>
  );
};

export default FeedbackOptions;
