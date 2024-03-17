"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/text-area";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator"

import { faPaperPlane } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import { toast } from "sonner";

export default function ContactForm() {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const FirstName = document.getElementById("FirstName") as HTMLInputElement;
        const LastName = document.getElementById("LastName") as HTMLInputElement;
        const Email = document.getElementById("Email") as HTMLInputElement;
        const Message = document.getElementById("Message") as HTMLTextAreaElement;

        if ( !FirstName.value || !LastName.value || !Email.value || !Message.value ) {
            toast.error("Please fill in all fields");
            return;
        }

        const data = {
            FirstName: FirstName.value,
            LastName: LastName.value,
            Email: Email.value,
            Message: Message.value
        }

        toast.success(`Thank you for your message, ${data.FirstName}! We will get back to you soon.`);

        data.FirstName = "";
        data.LastName = "";
        data.Email = "";
        data.Message = "";

        return;
    }

    return (
    <div className="grid grid-cols-1 justify-items-center gap-4 px-6 py-6 lg:px-12 lg:py-12">
        <Card className="">
            <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Send us an email here!</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid justify-center">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="FirstName">First Name</Label>
                            <Input id="FirstName" placeholder="Tyler" type="text" />
                        </div>
                        <div>
                            <Label htmlFor="LastName">Last Name</Label>
                            <Input id="LastName" placeholder="Durden" type="text" />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="Email">Email</Label>
                        <Input id="Email" placeholder="benjamin@jamal.com" type="email" />
                    </div>
                    <div className="mb-2 lg:mb-4">
                        <Label htmlFor="Message">Message</Label>
                        <TextArea id="Message" placeholder="Your message" />
                    </div>
                    <Separator />
                    <div className="mt-2 lg:mt-4">
                        <Button className="w-full text-[#dfe9e9] font-semibold dark:text-[#191919]"><FontAwesomeIcon icon={faPaperPlane} className="mr-1"/> Send</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
    )
}
