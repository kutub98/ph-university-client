// import { Input } from 'antd';
// import { Controller } from 'react-hook-form';

// export type TInputValue = {
//   name: string;
//   type: string;
//   label?: string;
// };
// const PhFormInput = ({ name, type, label }: TInputValue) => {
//   return (
//     <div style={{ marginBottom: '20px' }}>
//       {label ? label : null}
//       <Controller
//         name={name}
//         render={({ field }) => <Input {...field} type={type} id={name} />}
//       />
//     </div>
//   );
// };

// export default PhFormInput;

import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'antd';

interface PhFormInputProps {
  name: string;
  label: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhFormInput: React.FC<PhFormInputProps> = ({
  name,
  label,
  type = 'text',
  onChange,
}) => {
  const { control } = useFormContext();

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            id={name}
            type={type}
            onChange={e => {
              field.onChange(e);
              if (onChange) onChange(e);
            }}
          />
        )}
      />
    </div>
  );
};

export default PhFormInput;
