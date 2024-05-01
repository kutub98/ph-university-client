import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

export type TFormPorps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

const PhForm = ({ onSubmit, children }: TFormPorps) => {
  const methods = useForm();
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </div>
  );
};

export default PhForm;
