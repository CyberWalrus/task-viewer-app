import * as React from "react";

const App = () => {
  return (
    <React.Fragment>
      <header className={`page-header`}>
        <nav className={`filter`}>
          <ul className={`filter__list`}>
            <li className={`filter__item`}>Все</li>
            <li className={`filter__item`}>Обычные</li>
            <li className={`filter__item`}>Важные</li>
            <li className={`filter__item`}>Очень важные</li>
          </ul>
        </nav>
        <div className={`add-task`}>
          <button className={`add-task__btn`} />
        </div>
      </header>
      <main className={`page-main`}>
        <section className={`content`}>
          <h2 className={`content__title`}>{`Задачи`}</h2>
          {[
            `testets`,
            `ssdlkjljl dsflalf`,
            `Test text for task`,
            `sdddddddddddddddddddddddddddddddddddddddddddddddd`
          ].map((item, index) => (
            <div key={index} className={`content__task-list`}>
              <div className={`task`}>
                <div className={`task__sort`}>
                  <p className={`task__id`}>{`1`}</p>
                </div>
                <div className={`task__main`}>
                  <h3 className={`task__title`}></h3>
                  <p className={`task__text`}>{item}</p>
                </div>
                <div className={`task__controls`}>
                  <button className={`task__btn-change`} />
                </div>
              </div>
            </div>
          ))}
          <div className={`content__show-more`}>
            <button className={`content__btn`}>{`more`}</button>
          </div>
        </section>
        <div />
      </main>
      <footer className={`page-footer`}>
        <div className={`page-footer__copyright`}>
          <p className={`page-footer__text`}>© 2019 Walrus Personal App</p>
        </div>
      </footer>
      <div className={`task-form`}>
        <form className={`task-form__form`}>
          <h3 className={`task-form__title`}>{`Add task`}</h3>
          <div className={`task-form__container-submit`}>
            <button className={`task-form__btn-submit`}>{`add`}</button>
          </div>
          <div className={`task-form__container-delete`}>
            <button className={`task-form__btn-delete`}>{`delete`}</button>
          </div>
          <div className={`task-form__container-close`}>
            <button className={`task-form__btn-close`}>{`close`}</button>
          </div>
          <div className={`task-form__container`}>
            <label className={`task-form__label`} />
            <input className={`task-form__input-text`} />
          </div>
          <div className={`task-form__container`}>
            <label className={`task-form__label`} />
            <select className={`task-form__select-status`}>
              <option>{`Обычная`}</option>
              <option>{`Важная`}</option>
              <option>{`Очень важная`}</option>
            </select>
          </div>
          <div className={`task-form__container`}>
            <label className={`task-form__label`} />
            <input className={`task-form__input-date`} />
          </div>
          <div className={`task-form__container`}>
            <label className={`task-form__label`} />
            <input className={`task-form__input-date`} />
          </div>
          <div className={`task-form__container`}>
            <label className={`task-form__label`} />
            <textarea className={`task-form__input-description`} />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default App;
