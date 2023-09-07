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

import './ToolBar.css'

// const icons1 = [
//   UnfoldLessOutlinedIcon,
//   FindReplaceIcon,
//   CalculateOutlinedIcon,
//   CurrencyExchangeIcon,
//   FormatQuoteOutlinedIcon,
//   CurrencyExchangeIcon,
//   ShareOutlinedIcon,
//   AutoFixHighIcon,
//   LibraryAddOutlinedIcon,
//   AppsOutlinedIcon,
//   JoinInnerOutlinedIcon,
//   CallMergeOutlinedIcon,
//   UndoOutlinedIcon,
//   RedoOutlinedIcon,
//   LockOutlinedIcon,
//   FileUploadOutlinedIcon,
//   ShareOutlinedIcon,
//   JoinInnerOutlinedIcon,
// ];


// const icons = [
//     UnfoldLessOutlinedIcon,
//     FindReplaceIcon,
//     CalculateOutlinedIcon,
// ]
 
// const disabledIcons2 = [2];
// const dividerIndices2 = [3];



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
    ShareOutlinedIcon,
    JoinInnerOutlinedIcon,
  ],
  disabledIcons: [1, 4, 7, 12],
  dividerIndices: [7, 9, 12, 17],
  buttonProps: {
    color: 'primary',
    variant: 'contained',
    disabled: false,
    className: 'Button-1',
    //startIcon: <FindReplaceIcon />,
    text: 'History',
  },
  group: true,
};

export const appBarData2 = {
    text: 'Selected 5 items from 1 invoice',
    icons: [
      UnfoldLessOutlinedIcon,
      FindReplaceIcon,
      CalculateOutlinedIcon,
  ],
    disabledIcons: [2],
    dividerIndices: [2],
    buttonProps: {
      color: 'primary',
      variant: 'contained',
      disabled: false,
      className: 'Button-2',
      //startIcon: <FindReplaceIcon />,
      text: 'Create Job',
    },
    group: false,
  };
  
  export const appBarData3 = {
    text: 'Total Jobs: 05',
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
    ],
    disabledIcons: [2, 7,],
    dividerIndices: [3, 6],
    buttonProps: {
      color: 'primary',
      variant: 'contained',
      disabled: false,
      className: 'Button-1',
      //startIcon: <FindReplaceIcon />,
      text: 'Add Job',
    },
    group: true,
  };


  export const appBarData4 = {
    text: 'Dublicate 0 Items',
    icons: [
      UnfoldLessOutlinedIcon,
      FindReplaceIcon,
      CalculateOutlinedIcon,
    ],
    disabledIcons: [2],
    dividerIndices: [1],
    buttonProps: {
      color: 'primary',
      variant: 'contained',
      disabled: false,
      className: 'Button-3',
      //startIcon: <FindReplaceIcon />,
      text: 'Duplicate Job',
    },
    group: false,
  };