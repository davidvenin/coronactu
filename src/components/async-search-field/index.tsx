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
        <label
          htmlFor={props.name}
          className="block text-sm font-medium text-gray-700"
        >
          <span className={"block text-sm font-medium text-gray-700"}>
            {props.label}
          </span>
          <input
            className={
              "mb-10 block w-full px-3 py-2 border border-gray-30 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border"
            }
            {...field}
          />
        </label>
      </div>
    </div>
  );
};
