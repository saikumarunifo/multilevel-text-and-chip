import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import JoinInnerOutlinedIcon from '@mui/icons-material/JoinInnerOutlined';
import CallMergeOutlinedIcon from '@mui/icons-material/CallMergeOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';

import './ToolBar.css'


export const appBarData1 = {
    text: ["Select "," Items"],
    icons: [
      UnfoldLessOutlinedIcon,
      FindReplaceIcon,
      CalculateOutlinedIcon,
      CurrencyExchangeIcon,
      FormatQuoteOutlinedIcon,
      CurrencyExchangeIcon,
      ShareOutlinedIcon,
      AutoFixHighIcon,
      LibraryAddOutlinedIcon,
      AppsOutlinedIcon,
      JoinInnerOutlinedIcon,
      CallMergeOutlinedIcon,
      UndoOutlinedIcon,
      RedoOutlinedIcon,
      LockOutlinedIcon,
      FileUploadOutlinedIcon,
      AppsOutlinedIcon,
    ],
    auditIcons: [
        { component: HighlightOffRoundedIcon, color: 'red' },
        { component: WarningOutlinedIcon, color: '#e86f79' },
        { component: InfoOutlinedIcon, color: '#f5dd2c' },
    ],
    auditValues: [28,23,56],
    disabledIcons: [6, 7, 8, 9, 10, 11, 14],
    dividerIndices: [7, 9, 12],
    buttonProps: {
      color: 'primary',
      variant: 'contained',
      disabled: false,
      className: 'Button-1',
      //startIcon: <FindReplaceIcon />,
      text: 'History',
    }, 
    buttonProps1: {
      olor: 'primary',
      variant: 'contained',
      disabled: false,
      className: 'Button-1',
      //startIcon: <FindReplaceIcon />,
      text: 'Logs',
    },
    group: true,
  };

  