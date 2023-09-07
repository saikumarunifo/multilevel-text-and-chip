import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallMergeOutlinedIcon from '@mui/icons-material/CallMergeOutlined';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import JoinInnerOutlinedIcon from '@mui/icons-material/JoinInnerOutlined';
import React from 'react';
import PageToolBarReusable2 from './Prac2';

export const icons = [
  LockOutlinedIcon,
  UnfoldLessOutlinedIcon,
  InfoOutlinedIcon,
  CallMergeOutlinedIcon,
  AutoFixHighIcon,
  LibraryAddOutlinedIcon,
  UndoOutlinedIcon,
  WarningOutlinedIcon,
  RedoOutlinedIcon,
  FileUploadOutlinedIcon,
  FindReplaceIcon,
  CurrencyExchangeIcon
];

export const disabledButtons = [
  LockOutlinedIcon,
  UnfoldLessOutlinedIcon,
  AutoFixHighIcon,
  HighlightOffRoundedIcon,
  ShareOutlinedIcon,
  JoinInnerOutlinedIcon,
  FormatQuoteOutlinedIcon,
  AppsOutlinedIcon,
  CalculateOutlinedIcon
];


const MyComponent = () => {
  return (
    <div>
      {/* Other components */}
      <PageToolBarReusable2 icons={icons} disabledButtons={disabledButtons} />
      {/* Other components */}
    </div>
  );
};

export default MyComponent;
