import React, { useState } from 'react';

const Word = ({word}) => {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    // 버튼을 눌렀을 때 실행되어야 할 함수
    function toggleShow() {
        // setIsShow(isShow === false ? true : false)
        setIsShow(!isShow)
    }

    function toggleDone() {
        setIsDone(!isDone)
    }

  return (
    <tr className={isDone ? 'off' : ''} key={word.id}>
        <td>
            <input type="checkbox" checked={isDone} onChange={toggleDone}/>
        </td>
        <td>
            {word.eng}
        </td>
        <td>
            {isShow && word.kor} {/* isShow 일 때만 뜻을 보여줌 */}
        </td>
        <td>
            <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
            <button className="btn_del">삭제</button>
        </td>
    </tr>    
  );
};

export default Word;