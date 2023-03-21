import { forwardRef, useRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  // parent comp Form will have access to the focus and scrollIntoView only
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      },
    };
  }, []);

  return <>
     { props?.label }
    <input {...props} ref={inputRef} />
  </> ;
});

export default MyInput;