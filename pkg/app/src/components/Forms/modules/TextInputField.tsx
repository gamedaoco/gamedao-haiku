import { TextField } from '@mui/material';
import { useState } from 'react';
import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { isValidZeroAddress } from 'src/utils/helper'

interface TextInputFieldProps {
  label: string;
  placeholder: string;
  name: string;
  errorText: string;
  value?: string;
  className?: string;
  onChange?: (newValue: string) => void;
  required?: boolean;
  multiline?: boolean;
  disabled?: boolean;
  address?: boolean;
}

export function TextInputField(props: TextInputFieldProps) {
  const yupName = props.name;

  const validationSchema = Yup.object().shape({
		yupName : Yup.string().required(props.errorText),
	})

	const {
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	})

  return (
    <TextField
      className={props.className}
      label={props.placeholder}
      value={props.value}
      // onChange={(e) => props.onChange && props.onChange(e.target.value)}
      {...register(props.name)}
      error={errors.props.name ? true : false}
      helperText={errors?.props.name?.message}
      // onBlur={() => setIsTouched(true)}
      multiline={props.multiline}
      rows={props.multiline ? 4 : 1}
      // rowsMax={props.multiline ? 10 : 1}
      disabled={props.disabled}
    />
  );
}
