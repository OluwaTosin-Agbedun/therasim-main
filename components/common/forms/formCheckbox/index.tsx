import { ChangeEvent, ReactNode, useId } from "react";
import cs from "classnames";
import Typography from "../../typography";
import { ErrorMessage, useField } from "formik";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  extraDetails?: ReactNode;
}

const FormCheckbox = ({
  label,
  name,
  extraDetails,
  disabled,
  ...otherProps
}: Props) => {
  const id2 = useId();

  const [{ value }, , { setValue }] = useField(name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked, true);
  };

  return (
    <div className="mb-5">
      <div className="relative w-full flex items-center gap-3">
        <input
          {...otherProps}
          name={name}
          id={id2 || name}
          type="checkbox"
          disabled={disabled}
          checked={value}
          onChange={handleChange}
          className={cs(
            "w-[20px] h-[20px] checked:after:text-purple-base after:absolute checked:after:content-['✔'] relative after:rounded-full after:top-[50%] after:left-[50%]",
            "after:translate-x-[-50%] after:translate-y-[-50%] appearance-none checked:border-purple-base/80",
            "focus:outline-[4px] outline-offset-0 text-[14px] font-raleway placeholder:font-raleway duration-100 border rounded",
            {
              "focus:outline-purple-base/10 border-grey-color-300 focus:border-purple-base/60":
                true,
              "opacity-60 cursor-not-allowed": disabled,
            }
          )}
        />
        {label && (
          <label
            className={cs("text-grey-text font-medium block text-[14px]", {
              "opacity-60 cursor-not-allowed": disabled,
              "cursor-pointer": !disabled,
            })}
            htmlFor={id2 || name}
          >
            {label}
          </label>
        )}
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

export default FormCheckbox;
