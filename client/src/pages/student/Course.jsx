import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

import React from 'react'

function Course() {
  return (
    <div>
        <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className='relative'>
                <img 
                src='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt='Course Thumbnail'
                className='w-full h-36 object-cover rounded-t-lg'
                />
            </div>
            <CardContent className="px-5 py-4 space-y-1">
                <h1 className='hover:underline font-bold text-lg truncate'>Office Politices Course</h1>
                <div className='flex items-center justify-between'>
                     <div className='flex items-center gap-3'>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className='font-medium text-sm'>Piyush Channawar</h1>
                </div>
                <Badge className={"bg-blue-600 text-white px-2 py-1 text-xs rounded-full"}>
                    Advance
                </Badge>
                </div>
                <div className='text-lg font-bold'>
                    <span>₹499</span>
                </div>
               
            </CardContent>
        </Card>
    </div>
  )
}

export default Course