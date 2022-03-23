import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Form from '../../components/Forms/Form'
import Input from '../../components/Forms/Input'
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'

import { Layout } from 'src/layouts/default/layout'

// interface for form
interface EmailInterface {
	email: string;
	password: string;
}

// validation
const EmailSchema = yup.object().shape({
	email: yup
		.string()
		.email("Enter a valid email")
		.required("Email is required"),
	password: yup
		.string()
		.max(32, "Max password length is 32")
		.required("Password is required")
});

export function DAOPage() {
	return (
		<Layout showHeader showFooter showSidebar title="DAO">
			<Box sx={{ p: '4rem', height: '90vh' }}>
				<Paper sx={{ p: '4rem', height: '100%', borderRadius: '.5rem' }} elevation={10}>
					<Typography sx={{ fontWeight: '800' }} variant={'h2'}>
						DAO
					</Typography>
					<Form
						buttonLabel="Change Email"
						register={register}
						handleSubmit={handleSubmit}
						onSubmit={onSubmit}
						className="change-form"
					>
						<Input
							name="email"
							type="email"
							placeholder="Enter your email"
							error={errors.email?.message}
							autoFocus
						/>
						<Input
							name="password"
							type="password"
							placeholder="Password"
							error={errors.password?.message}
						/>
					</Form>
				</Paper>
			</Box>
		</Layout>
	)
}

export default DAOPage
