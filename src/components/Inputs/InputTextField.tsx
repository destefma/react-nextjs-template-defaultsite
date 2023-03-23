import React, {
  Dispatch,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface Props extends PropsWithChildren<any> {
  labelText: string;
  type: string;
  minLenght?: number;
  pattern?: string;
  errorMessage?: string;
  required?: boolean;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputTextField({
  labelText,
  type,
  minLenght = 2,
  pattern,
  errorMessage,
  required,
  onChange,
}: Props) {
  const MIN_INPUT_VALUE_LENGHT = minLenght;

  const refInput = React.useRef<HTMLInputElement>(null);
  const [isError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(errorMessage);

  if (errorMsg == undefined || errorMsg?.length <= 0)
    setErrorMsg(`Mindestens ${MIN_INPUT_VALUE_LENGHT} Buchstaben.`);

  useEffect(() => {
    const refInputValue = refInput.current?.value;

    if (
      refInputValue != undefined &&
      refInputValue.length <= MIN_INPUT_VALUE_LENGHT &&
      refInputValue.length != 0
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [refInput.current?.value]);

  return (
    <>
      <div
        className={`relative my-4 border-b-2 ${
          !isError && "focus-within:border-blue-500"
        } ${isError && "border-red-900"} mb-4`}
      >
        <input
          ref={refInput}
          type={type}
          autoComplete="off"
          name="inputText"
          placeholder=" "
          className="relative z-1 my-2 block w-full appearance-none focus:outline-none bg-transparent text-white opacity-75"
          pattern={pattern}
          required={required}
          onChange={onChange}
        />
        <label
          htmlFor="inputText"
          className={`absolute top-0 z-2 duration-300 origin-0 text-gray-500 ${
            isError && "text-red-900"
          }`}
        >
          {labelText}
        </label>
      </div>
      <label className={`text-gray-500 text-sm text-right`}>
        {isError && errorMsg}
      </label>
    </>
  );
}

export default InputTextField;
