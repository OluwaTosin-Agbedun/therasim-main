import { ErrorMessage, Field, useField } from "formik";
import { ReactNode } from "react";
import cs from "classnames";
import Typography from "../../typography";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  extraDetails?: ReactNode;
}

const FormTextArea = ({
  label,
  name,
  id,
  extraDetails,
  disabled,
  rows = 5,
  ...otherProps
}: Props) => {
  const [, { touched, error }] = useField(name);

  const isInvalid = !!touched && !!error;

  return (
    <div className="mb-5">
      <div className="relative w-full">
        {label && (
          <label
            className={cs("text-grey-text font-medium block text-[14px]", {
              "opacity-60 cursor-not-allowed": disabled,
            })}
            htmlFor={id || name}
          >
            {label}
          </label>
        )}
        <Field
          {...otherProps}
          as="textarea"
          name={name}
          id={id || name}
          disabled={disabled}
          rows={rows}
          className={cs(
            "w-full mt-1 focus:outline-[4px] outline-offset-0 text-[16px] font-raleway placeholder:font-raleway duration-100 px-4 py-3 border rounded-lg",
            {
              "focus:outline-error/10 focus:bg-error/5 border-error/60":
                isInvalid,
              "focus:outline-primary/10 focus:bg-primary/5 border-grey-color-300 focus:border-primary/60":
                !isInvalid,
              "opacity-60 cursor-not-allowed": disabled,
            }
          )}
        />
      </div>
      <ErrorMessage
        name={name}
        render={(errorMessage) => (
          <Typography variant="body-x-small" className="text-error">
            {errorMessage}
          </Typography>
        )}
      />
      {extraDetails && (
        <Typography variant="body-x-small" className="text-grey-text">
          {extraDetails}
        </Typography>
      )}
    </div>
  );
};

export default FormTextArea;
