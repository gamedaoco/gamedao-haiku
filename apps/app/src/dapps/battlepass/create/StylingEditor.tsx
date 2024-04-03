import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import slugify from 'slugify'
import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notification'
import { useConfig } from 'hooks/useConfig'
import { useCreateBattlepassTX } from 'hooks/tx/useCreateBattlepassTX'
import { useLinkBotTX } from 'hooks/tx/useLinkBotTX'
import { useActivateBattlepassTX } from 'hooks/tx/useActivateBattlepassTX'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useActiveBattlepassSubscription } from 'src/queries'

import { useTheme } from '@mui/material/styles'

// uploads
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import { Avatar, Button, Grid } from '@mui/material'
import {
	Box,
	Checkbox,
	FormControl,
	FormLabel,
	FormControlLabel,
	InputLabel,
	Select,
	Stack,
	TextField,
	Typography,
	Divider,
	Radio,
	RadioGroup,
	MenuItem,
} from '@mui/material'

import { RadioItem } from 'components/organisms/forms/components/radioItem'
import { TransactionDialog } from 'components/molecules/TransactionDialog/transactionDialog'

import { ContentPanel, ContentTitle, Section, SectionTitle, SectionDescription } from 'components/molecules/content'
import { Image } from 'components/atoms/Image/image'
import { Loader } from 'components/atoms/Loader'
import { LevelEditor } from './LevelEditor'
import { QuestEditor } from './QuestEditor'

import { TabContext, TabPanel } from '@mui/lab'
import TabBar from './TabBar'

import {
	useGetOrganizationsForPrimeSubscription,
	useGetBattlepassesForOrganizationQuery,
	useGetAllBattlepassesSubscription,
} from 'src/queries'

import { initialState } from './const'

export const StylingEditor = ({ handleUploadImage, getImageURL, formState, handleChange }) => {
	const config = useConfig()
	const theme = useTheme()

	return (
		<TabPanel value="styling">
			<Typography>2. Styling</Typography>
			<Section
				direction={{ xs: 'column', md: 'column' }}
				title="Styling"
				description={`Add images and colors to create that unique look`}
			>
				<Box sx={{ border: 'grey' }}>
					<label htmlFor="logo-file-upload">
						<input
							style={{ display: 'none' }}
							accept="image/*"
							id="logo-file-upload"
							type="file"
							onChange={(e) => handleUploadImage(e, 'iconImg')}
						/>
						<Avatar
							sx={(theme) => ({
								width: '7rem',
								height: '7rem',
								backgroundColor: theme.palette.background.default,
								outline: `5px solid #000000aa`,
								cursor: 'pointer',
							})}
							src={getImageURL(formState.iconImg)}
						>
							<Stack spacing={1} alignItems="center">
								<AddPhotoAlternateOutlinedIcon
									sx={{ height: '20px', width: '20px', cursor: 'pointer' }}
								/>
								<Typography>Add Icon</Typography>
							</Stack>
						</Avatar>
					</label>
				</Box>

				<Box sx={{ border: '1px solid yellow' }}>
					<label htmlFor="banner-file-upload">
						<input
							style={{ display: 'none' }}
							accept="image/*"
							id="banner-file-upload"
							type="file"
							onChange={(e) => handleUploadImage(e, 'bannerImg')}
						/>
						{!formState.bannerImg ? (
							<Stack spacing={1} alignItems="center">
								<AddPhotoAlternateOutlinedIcon
									sx={{ height: '20px', width: '20px', cursor: 'pointer' }}
								/>
								<Typography>Add Banner Image</Typography>
							</Stack>
						) : (
							<Image
								src={getImageURL(formState.bannerImg)}
								alt="banner"
								sx={{
									borderRadius: Number(theme.shape.borderRadius) * 20,
									height: '250px',
									width: 'auto',
								}}
							/>
						)}
					</label>
				</Box>

				<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
					<TextField
						name={'primaryColor'}
						inputProps={{ maxLength: 8 }}
						fullWidth
						onChange={handleChange}
						value={formState.primaryColor}
						label="Primary Color"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<Typography mr={1} variant="body2">
									#
								</Typography>
							),
						}}
					/>
					<TextField
						name={'secondaryColor'}
						inputProps={{ maxLength: 8 }}
						fullWidth
						onChange={handleChange}
						value={formState.secondaryColor}
						label="Secondary Color"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<Typography mr={1} variant="body2">
									#
								</Typography>
							),
						}}
					/>
					<TextField
						name={'backgroundColor'}
						inputProps={{ maxLength: 8 }}
						fullWidth
						onChange={handleChange}
						value={formState.backgroundColor}
						label="Background Color"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<Typography mr={1} variant="body2">
									#
								</Typography>
							),
						}}
					/>
				</Stack>
			</Section>
		</TabPanel>
	)
}
