import { merge } from 'lodash'
import { Theme } from '@mui/material/styles'
import Alert from './Alert'
import Avatar from './Avatar'
import Accordion from './Accordion'
import Autocomplete from './Autocomplete'
import Backdrop from './Backdrop'
import Badge from './Badge'
import Breadcrumbs from './Breadcrumbs'
import ButtonGroup from './ButtonGroup'
import Button from './Button'
import Card from './Card'
import Chip from './Chip'
import Checkbox from './Checkbox'
import Container from './Container'
import ControlLabel from './ControlLabel'
import DataGrid from './DataGrid'
import Drawer from './Drawer'
import Dialog from './Dialog'
import Fab from './Fab'
import Grid from './Grid'
import IconButton from './IconButton'
import Input from './Input'
import Link from './Link'
import Lists from './Lists'
import LoadingButton from './LoadingButton'
import Menu from './Menu'
import Pagination from './Pagination'
import Paper from './Paper'
import Pickers from './Pickers'
import Popover from './Popover'
import Progress from './Progress'
import Radio from './Radio'
import Rating from './Rating'
import Slider from './Slider'
import Switch from './Switch'
import Select from './Select'
import Skeleton from './Skeleton'
import Snackbar from './Snackbar'
import Stepper from './Stepper'
import SvgIcon from './SvgIcon'
import Tabs from './Tabs'
import Table from './Table'
import Timeline from './Timeline'
import ToggleButton from './ToggleButton'
import Tooltip from './Tooltip'
import Typography from './Typography'
import TreeView from './TreeView'

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
	return merge(
		Fab(theme),
		Tabs(theme),
		Chip(theme),
		Card(theme),
		Menu(theme),
		Grid(theme),
		Link(theme),
		Input(theme),
		Radio(theme),
		Badge(theme),
		Lists(theme),
		Table(theme),
		Paper(theme),
		Alert(theme),
		Switch(theme),
		Select(theme),
		Button(theme),
		Rating(theme),
		Dialog(theme),
		Avatar(theme),
		Slider(theme),
		Drawer(theme),
		Pickers(theme),
		Stepper(theme),
		Tooltip(theme),
		Popover(theme),
		SvgIcon(theme),
		Checkbox(theme),
		DataGrid(theme),
		Skeleton(theme),
		Timeline(theme),
		TreeView(theme),
		Backdrop(theme),
		Snackbar(theme),
		Progress(theme),
		Container(theme),
		Accordion(theme),
		IconButton(theme),
		Typography(theme),
		Pagination(theme),
		ButtonGroup(theme),
		Breadcrumbs(theme),
		Autocomplete(theme),
		ControlLabel(theme),
		ToggleButton(theme),
		LoadingButton(theme),
	)
}
