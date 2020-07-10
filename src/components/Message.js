import React,{forwardRef} from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'
import './Message.css'
const Message = forwardRef(({message,userName},ref)=>{
    const isUser = userName === message.userName
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card>
                <CardContent className={isUser ? 'message__usercard' : 'message__guestcard'}>
                    <Typography
                    color="white"
                    variant="h5"
                    component="h2"
                    >
                    {!isUser && `${message.userName || "unknownuser"} : `}{message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
