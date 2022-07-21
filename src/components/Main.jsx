import { useEffect, useState } from 'react';
import AnswersList from './AnswersList';

const initialFormFields = {
  color: '',
  spendTime: [],
  review: '',
  username: '',
  email: '',
};

let id = 0;

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formFields, setFormFields] = useState(initialFormFields);
  const [formAnswers, setFormAnswers] = useState([]);
  const { color, review, username, email, spendTime } = formFields;

  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;
    if (type === 'checkbox') {
      let newFormFields = [...formFields[name]];
      checked
        ? newFormFields.push(value)
        : (newFormFields = newFormFields.filter((val) => val !== value));
      value = newFormFields;
    }
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = formAnswers.find((i) => i.id === formFields.id);
    if (item) setFormAnswers([...formAnswers, { ...formFields }]);
    else setFormAnswers([...formAnswers, { id: id++, ...formFields }]);
    setFormFields(initialFormFields);
  };

  const editData = (id) => {
    const item = formAnswers.find((i) => i.id === id);
    setFormFields(item);
  };
  useEffect(() => {
    console.log(formAnswers);
  }, [formAnswers]);

  return (
    <main className="main">
      <section className={`main__list ${open ? 'open' : ''}`}>
        <h2>Answers list</h2>
        <ul>
          <AnswersList formAnswers={formAnswers} editData={editData} />
        </ul>
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handleChange}
                  checked={color === '1'}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleChange}
                  checked={color === '2'}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleChange}
                  checked={color === '3'}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleChange}
                  checked={color === '4'}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange}
                    checked={spendTime.includes('swimming')}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="bathing"
                    onChange={handleChange}
                    checked={spendTime.includes('bathing')}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange}
                    checked={spendTime.includes('chatting')}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="noTime"
                    onChange={handleChange}
                    checked={spendTime.includes('noTime')}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={review}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Main;
