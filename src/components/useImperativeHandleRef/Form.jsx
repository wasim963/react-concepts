import { useRef } from 'react';
import MyInput from './MyInput';

export default function ImperativeHandleForm() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
    // This won't work because the DOM node isn't exposed:
    // ref.current.style.opacity = 0.5;

    // ref.current.scrollIntoView();
  }

  return (
    <form>
      <p>If some component gets a ref to MyInput, it will only receive your  focus,
        scrollIntoView object instead of the DOM node.
        This lets you limit the information you expose about your DOM node to the minimum.
      </p>
      <MyInput label="useImperativeHandle - Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}