// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: 'Swimming',
  bathing: 'Bathing',
  chatting: 'Chatting',
  noTime: "I don't like to spend time with it",
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, i) => (
        <li key={i}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

export default function AnswersItem({
  answerItem: { username, color, spendTime, review, id },
  editData,
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || 'Anon'} said:</h3>
        <div>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}</span>
        </div>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={spendTime} />
        </div>
        <div>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </div>
        <button onClick={() => editData(id)}>EDIT</button>
      </article>
    </li>
  );
}
