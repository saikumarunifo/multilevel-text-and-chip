import React from "react";
import TextFields from "./Rajesj";
import AddTaskIcon from '@mui/icons-material/AddTask';

export default {
    title:'TextField',
    component:"TextFields" 
}   

const Template=args=><TextFields {...args}/>

export const CheckList=Template.bind({})
CheckList.args={
        variant:"standard",
        placeholder:"Unifo",
        iconType:<AddTaskIcon />,
        mandatory:true,
        showStartAdornment:true,
        showEndAdornment:true,
        isDisabled:false,
        helperText:"Enter Your Name",
        disableLine:true
}

export const Normal=Template.bind({})
Normal.args={
        variant:"standard",
        placeholder:"Unifo",
        iconType:<AddTaskIcon />,
        mandatory:true,
        showStartAdornment:true,
        showEndAdornment:true,
        isDisabled:false,
        isNormalField:true,
}

export const Small=Template.bind({})
Small.args={
        variant:"standard",
        placeholder:"Unifo",
        iconType:<AddTaskIcon />,
        mandatory:true,
        showStartAdornment:true,
        showEndAdornment:true,
        isDisabled:false,
        size:"small"
}

export const SmallHelperText=Template.bind({})
SmallHelperText.args={
        variant:"standard",
        placeholder:"Unifo",
        iconType:<AddTaskIcon />,
        mandatory:true,
        showStartAdornment:true,
        showEndAdornment:true,
        isDisabled:false,
        helperText:"Name is Required",
        size:"small"
}