"use client"

import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/button";
import { TextInput } from "@repo/ui/textinput";
import { Center } from "@repo/ui/center";
import { useState } from "react";
import p2pTransfer from "../../lib/actions/p2pTransfer";


export default  function () {
    
    const [phone_number, setPhone_Number] = useState("")
    const [payAmount, setPayAmount] = useState(0)

    return <div className="w-full flex justify-center items-center ">
            <Center>
                <Card title="Send Money">
                    <TextInput label="Phone number" placeholder="Enter the phone number " onChange={(value) => {
                        setPhone_Number(value)
                    }}  />         

                    <TextInput label="Amount" placeholder="₹" onChange={(value) => {
                        setPayAmount(Number(value))
                    }} />
                    <div className="flex justify-center items-center pt-5 w-full">
                        <Button onClick={ async () => {
                           await p2pTransfer(phone_number,payAmount) 
                        }}>
                            SEND MONEY
                        </Button>
                    </div>
                </Card>
            </Center>
    </div>    
}