import { Input } from 'antd';
import { Controller } from 'react-hook-form';

export type TInputValue = {
  name: string;
  type: string;
  label?: string;
};
const PhFormInput = ({ name, type, label }: TInputValue) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PhFormInput;
