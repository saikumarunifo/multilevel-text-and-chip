import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Select, MenuItem, Divider} from '@mui/material';
import {makeStyles} from '@mui/styles';
import InputBase from '@mui/material/InputBase';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
import { useState, useEffect } from 'react';
import {Box} from '@mui/material';
const useStyles = makeStyles({
   select:{ 
    color: '#050E25',
    width: '118px',
    marginLeft: 0,
    paddingLeft: 0,
    '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select':{
        fontSize: '12px'
    },
    '& .MuiOutlinedInput-root': {
        border: 'none', // Remove the border from the outlined input

      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none', // Remove the notched outline border
      },
      '& .MuiSvgIcon-root':{
        fontSize:'18px',
         //left: '18.75%',
         //right: '18.75%',
         top: '35.25%',
         bottom: '31.25%',
      color: '#626776'
 },
   },

   divider: {
    '& .css-ftc7wc-MuiDivider-root':{
        height: '70%'
    }
  },
  searchFieldContainer: {
    display: 'flex',
    alignItems:'center',
    padding: '0px 8px 0px 0px',
    borderRadius: '5px',
    height: '32px',
  },
   inputContainer:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      //height:'16px',

   },
  searchInput1: {
    '& .css-yz9k0d-MuiInputBase-input':{
    //height: '16px',
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'Inter',  
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px !important',
    lineHeight: '16px',
    padding: '0px 0px 0px 8px',
    width: '90%',
    flexGrow: 1}
  },
  searchIcon:{
    width:'16px !important',
    height: '16px !important',
    left: '12.5%',
    right: '14.63%',
    top: '12.5%',
    bottom: '14.63%',
    color:'#9B9FA8'
  },
  selectedMenuItem:{
    fontSize: '12px !important',
    lineHeight: '16px !important',
    background: '#32394C !important',
    '& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root':{
      fontSize: '12px',
      lineHeight: '16px'
    }

  },
  menuItem:{
    fontSize: '12px !important',
    lineHeight: '16px !important',
    '&:hover': {
      backgroundColor: '#32394C',
    },
    '& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root':{
      fontSize: '12px !important',
      lineHeight: '16px !important'
    }
  }
})
const option = [
    { value: "jobNo", label: "Job No.", level: "job" },
    { value: "beSbNo", label: "BE No.", level: "job" },
    { value: "transactionRefNo", label: "Transaction Ref No.", level: "job" },
    { value: "invoiceNo", label: "Invoice No.", level: "invoice" },
    { value: "hawbHblNo", label: "HBL/HAWB No.", level: "job" },
    { value: "sealNo", label: "Seal No.", level: "job" },
    { value: "reimportSbNo", label: "Reimport SB No.", level: "item" },
    { value: "previousBeNo", label: "Reimport Pre BE No.", level: "item" },
  ];
export default function SearchTextBox(props) {
  const {text, width='302px', handleSearchInputChange, dropDown = false,  backgroundColor='transparent', border= '1px solid #EFF0F1', color='#FFFFFF'} = props
    const classes = useStyles()
    const [value, setValue] = useState('');
    const [isTyping, setIsTyping] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    useEffect(() => {

    let optionValue = (option?.map((data) => { return data.value }))
    setValue(optionValue[0])


      }, [option])


  const handleChange = (event) => {
    event.preventDefault()
    setValue(event.target.value);

  }
  const handleSearchTerm = (event) => {
    if (event.target.value === ''){
        setSearchValue('')
        setIsTyping(false)
    }
    else{
        setSearchValue(event.target.value)
        setIsTyping(true)
    }
     //handleSearchInputChange(searchValue)    pass the function as arg and place here to access the search value

  }

  const handleClearSearch = () => {
    setSearchValue('')
    setIsTyping(false)
  }
   const handleMenuClick = (selectedValue, optionValue) => {
      return selectedValue === optionValue ? classes.selectedMenuItem: classes.menuItem
   }

  return (
    <Box className={classes.searchFieldContainer} style = {{backgroundColor: backgroundColor, width: width, border: border}}>
        {dropDown && <Select
            value={value}
            className={classes.select}
            onChange={handleChange}
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center"
              },
              PaperProps:{style: {backgroundColor: '#050E25', color: '#FFFFFF', marginTop: '-5px'}},
              getContentAnchorEl: null,
            }}
            IconComponent={KeyboardArrowDownIcon}
            placeholder='Select'
           >

            {option?.map((option) => (
              <MenuItem key = {option.label} value = {option.value} 
              className={handleMenuClick(value, option.value)}>
                {option.label}
              </MenuItem>
            ))}</Select>}
            {dropDown && <Divider sx={{height: '16px', width: '1px', background: '#EFF0F1'}} orientation="vertical" />}
        <div className={classes.inputContainer}>
          <InputBase
              value={searchValue}
              sx={{color:color}}
              placeholder={text}
              className={classes.searchInput1}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchTerm}
               onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            />
          {isTyping ? <ClearIcon onClick = {handleClearSearch} className={classes.searchIcon}/> :<SearchIcon className={classes.searchIcon}/>}
          </div>

    </Box>
  )
}
