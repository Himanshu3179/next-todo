"use client"
import { Calendar } from '@/components/ui/calendar'
import React from 'react'

const Calander = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    console.log(date)

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-fit"
        />
    )


}

export default Calander