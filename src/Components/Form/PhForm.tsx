/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

export type TFormConfig = {
  defaultValues?: Record<string, any>;
};
export type TFormPorps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  style?: React.CSSProperties;
} & TFormConfig;

const PhForm = ({ onSubmit, children, defaultValues, style }: TFormPorps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig['defaultValues'] = defaultValues;
  }
  const methods = useForm(formConfig);
  return (
    <div style={{ ...style }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </div>
  );
};

export default PhForm;
