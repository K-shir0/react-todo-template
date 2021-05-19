import React from 'react';

const TodoList = () => (
  <>
    <h1>TODO List</h1>
    <button type="button">追加</button>
    <button type="button">削除</button>
    <div>
      <div>
        <label htmlFor="aruku">
          <input id="aruku" type="checkbox" />
          歩く
        </label>
      </div>
      <div>
        <label htmlFor="taberu">
          <input id="taberu" type="checkbox" />
          食べる
        </label>
      </div>
    </div>
  </>
);

export default TodoList;
