import { FieldHookConfig, useField } from "formik";

interface ComponentProps<T> {
  config: FieldHookConfig<T>;
  label: string;
  name: string;
}

export const AsyncInputField = (props: ComponentProps<string>) => {
  const [field] = useField(props.config);
  return (
    <div className="">
      <div className={""}>
        <label htmlFor={props.name} className="w-full">
          {props.label}
          <input className={"block"} {...field} />
        </label>
      </div>
    </div>
  );
};
