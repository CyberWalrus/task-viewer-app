import * as React from "react";

const App = () => {
  return (
    <React.Fragment>
      <div />
      <header className={`page-header`}>
        <nav className={`filter`}>
          <ul className={`filter__list`}>
            <li className={`filter__item`}>
              <a href="#" className={`filter__link`}>
                Все
              </a>
            </li>
            <li className={`filter__item`}>
              <a href="#" className={`filter__link`}>
                Обычные
              </a>
            </li>
            <li className={`filter__item`}>
              <a href="#" className={`filter__link`}>
                Важные
              </a>
            </li>
            <li className={`filter__item`}>
              <a href="#" className={`filter__link`}>
                Очень важные
              </a>
            </li>
          </ul>
        </nav>
        <div className={`add-task`}>
          <button className={`add-task__btn`}>
            <svg viewBox="0 0 448 448">
              <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
            </svg>
          </button>
        </div>
      </header>
      <main className={`page-main`}>
        <section className={`content`}>
          <h2 className={`content__title`}>{`Задачи`}</h2>
          <div className={`content__task-list`}>
            {[
              `testets`,
              `ssdlkjljl dsflalf`,
              `Test text for task`,
              `sdddddddddddddddddddddddddddddddddddddhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhddddddddddd`
            ].map((item, index) => (
              <div key={index}  className={`task`}>
                <div className={`task__header`}>
                  <p className={`task__id`}>{`1`}</p>
                  <h3 className={`task__title`}>{`Задача`}</h3>
                  <button className={`task__btn-change`} />
                </div>
                <div className={`task__main`}>
                  <p className={`task__text`}>{item}</p>
                  <p className={`task__date`}>{`19.07.2019`}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={`content__show-more`}>
            <button className={`content__btn`}>{`more`}</button>
          </div>
        </section>
        <div />
      </main>
      <footer className={`page-footer`}>
        <div className={`page-footer__copyright`}>
          <p className={`page-footer__text`}>© 2019 Task Viewer Application</p>
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
