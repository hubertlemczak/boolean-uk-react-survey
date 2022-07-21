import AnswersItem from './AnswersItem';

export default function AnswersList({ formAnswers, editData }) {
  return (
    <ul>
      {formAnswers.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} editData={editData} key={i} />
      ))}
    </ul>
  );
}
