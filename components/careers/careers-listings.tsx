"use client";

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faMoneyCheckDollarPen, faPage, faCircleExclamation, faUser } from "@fortawesome/pro-solid-svg-icons";

import { Separator } from "@/components/ui/separator";

import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import listings from "@/data/listings";
import { faSquareJs, faGithub } from "@fortawesome/free-brands-svg-icons";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { TextArea } from "@/components/ui/text-area";

import Link from "next/link";
import { toast } from "sonner";

export default function CareersListings() {

const [currentListing, setCurrentListing] = useState(listings[0])

function HandleApply(e: any) {
    e.preventDefault();
    
    const FirstName = document.getElementById("FirstName") as HTMLInputElement;
    const LastName = document.getElementById("LastName") as HTMLInputElement;
    const Email = document.getElementById("Email") as HTMLInputElement;
    const CoverLetter = document.getElementById("CoverLetter") as HTMLInputElement;

    if (FirstName.value === "" || LastName.value === "" || Email.value === "" || CoverLetter.value === "") {
        return toast.error("Please fill in all the fields!");
    }

    toast.success(`Thank you for applying to ${currentListing.listingName}! We will get back to you soon, ${FirstName.value} ${LastName.value}!`);

    FirstName.value = "";
    LastName.value = "";
    Email.value = "";
    CoverLetter.value = ""
    return
}

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 py-6 lg:px-12 lg:py-12 lg:grid-cols-3 gap-4">
        <div className="relative overflow-x-clip">
            <Card className="overflow-y-scroll h-[50vh] lg:h-[95vh] lg:sticky top-6 hover:cursor-pointer">
                <CardHeader>
                    <CardTitle> Listings </CardTitle>
                    <CardDescription> What jobs are available </CardDescription>
                </CardHeader>
                <CardContent>
                <ul>
                {
                    listings.map((listing) => (
                            <li key={listing.listingId} className="my-2 ">
                                <Card onClick={() => setCurrentListing(listing)}>
                                    <CardHeader>
                                        <CardTitle>{listing.listingName}</CardTitle>
                                        <CardDescription>{listing.listingDescription}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex gap-x-4 ">
                                            <Avatar>
                                                <AvatarImage src={listing.listingPublisherImage} alt={listing.listingPublisher} />
                                                <AvatarFallback><FontAwesomeIcon icon={faUser} /></AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <CardTitle>{listing.listingPublisher}</CardTitle>
                                                <CardDescription>{listing.listingPublisherPosition}</CardDescription>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </li>
                    ))
                }
                </ul>

            </CardContent>
                <CardFooter>
                    <p suppressHydrationWarning className="text-muted-foreground">Current Listings as of {new Date().toLocaleDateString()}</p>
                </CardFooter>
            </Card>
        </div>
            {/**
                The main card content
            */}

            <Card className="lg:col-span-2 ">
                <CardHeader>
                    <CardTitle> {currentListing.listingName} </CardTitle>
                    <CardDescription> Learn all about this position as { 
                    currentListing.listingName[0].toLowerCase() === "a" ? 
                    "an" : currentListing.listingName[0].toLowerCase() === "e" ? 
                    "an" : currentListing.listingName[0].toLowerCase() === "i" ? 
                    "an" : currentListing.listingName[0].toLowerCase() === 'o' ? 
                    "an" :  currentListing.listingName[0].toLowerCase() === "u" ?
                    "an" : "a"} {currentListing.listingName} </CardDescription>
                </CardHeader>
                <CardContent> 
                <Card className="px-4 py-4 lg:py-6 lg:px-6">
                    <div className="flex gap-x-4 ">
                        <Avatar>
                            <AvatarImage src={currentListing.listingPublisherImage} alt={currentListing.listingPublisher} />
                            <AvatarFallback><FontAwesomeIcon icon={faUser} /></AvatarFallback>
                        </Avatar>
                    <div>
                        <CardTitle> {currentListing.listingPublisher} </CardTitle>
                        <CardDescription> {currentListing.listingPublisherPosition} </CardDescription>
                    </div>
                </div>
            </Card>
            <div className="mt-4 lg:mt-6 grid grid-cols-1 lg:grid-cols-3">

                <div className="flex gap-x-4">
                <FontAwesomeIcon className="text-2xl lg:text-3xl tracking-tight font-semibold" icon={faCircleExclamation} />
                <div>
                    <h2 className="text-2xl lg:text-3xl tracking-tight font-semibold"> Requirements </h2>
                    <p className="text-muted-foreground text-sm"> What is needed to work at this position </p>
                    <ul className="my-2 lg:my-4 list-disc px-6">
                    {
                        currentListing.listingRequirements.map((req, index) => (
                            <li key={index}> {req} </li>
                        ))
                    }
                    </ul>
                </div>
                </div>
                <div>
                    <div className="flex gap-x-4 ">
                    <FontAwesomeIcon className="text-2xl lg:text-3xl tracking-tight font-semibold" icon={faSquareJs} />
                    <div>
                    <h2 className="text-2xl lg:text-3xl tracking-tight font-semibold">Languages </h2>
                    <p className="text-muted-foreground text-sm"> What languages are needed for this position </p>
                    <ul className="my-2 lg:my-4 list-disc px-6">
                        {currentListing.listingLanguages.map((lang, index) => (
                            <li key={index}> {lang} </li>
                        ))}
                    </ul>
                    </div>
                    </div>
                    </div>
                    <div className="flex gap-x-4">
                    <FontAwesomeIcon className="text-2xl lg:text-3xl tracking-tight font-semibold" icon={faPage} />
                    <div>
                        <h2 className="text-2xl lg:text-3xl tracking-tight font-semibold"> Short Description </h2>
                        <p className="text-muted-foreground text-sm"> What is the job about </p>
                        <p className="my-2 lg:my-4"> {
                            currentListing.listingDescription
                        } </p>
                    </div>
                    </div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 my-4 lg:my-6">
                    <div className="flex gap-x-4">
                    <FontAwesomeIcon className="text-2xl lg:text-3xl tracking-tight font-semibold" icon={faLocationPin} />
                    <div>
                        <h2 className="text-2xl lg:text-3xl  tracking-tight font-semibold"> Location </h2>
                        <p className="text-muted-foreground text-sm"> Where is the job located </p>
                        <p className="my-2 lg:my-4"> {
                            currentListing.listingLocation
                        } </p>
                    </div>
                    </div>
                    <div className="flex gap-x-4">
                    <FontAwesomeIcon className="text-2xl lg:text-3xl tracking-tight font-semibold" icon={faMoneyCheckDollarPen} />
                    <div>
                        <h2 className="text-2xl lg:text-3xl tracking-tight font-semibold"> Salary </h2>
                        <p className="text-muted-foreground text-sm"> How much does the job pay </p>
                        <p className="my-2 lg:my-4"> {currentListing.listingSalary ? 
                            ("$"+currentListing.listingSalary) :
                            "Competitive"
                        } </p>
                    </div>
                    </div>
                    </div>
                    <Separator />
                    <div className="my-4 lg:my-6 lg:mt-8">
                        <h2 className="text-2xl lg:text-3xl tracking-tight font-semibold"> Apply </h2>
                        <p className="text-muted-foreground text-sm"> Apply for this position </p>
                        <div className="flex items-center justify-center">
                        <Card>
                            <CardContent>
                            <form
                                className="grid gap-4 mt-4"
                            >
                                <div className="grid gap-4 grid-cols-2">
                                    <div>
                                        <Label htmlFor="FirstName" className="text-muted-foreground">First Name</Label>
                                        <Input type="text" id="FirstName" placeholder="Barrak" />
                                    </div>
                                    <div>
                                        <Label htmlFor="LastName" className="text-muted-foreground">Last Name</Label>
                                        <Input type="text" id="LastName" placeholder="Obama" />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="Email" className="text-muted-foreground">Email</Label>
                                    <Input type="email" id="Email" placeholder="me@archery-luna.com" />
                                </div>
                                <div>
                                    <Label htmlFor="CoverLetter" className="text-muted-foreground">Cover Letter</Label>
                                    <TextArea id="CoverLetter" placeholder="Why do you want to work at this position" />
                                </div>
                                <div className="grid grid-cols-1 gap-1">
                                    <Label htmlFor="Resume" >Link Github</Label>
                                    <Link href="https://github.com/login">
                                        <Button id="Resume" className="text-[#dfe9e9] w-full dark:text-[#191919]"><FontAwesomeIcon icon={faGithub} className="mr-1"/> Link Github </Button>
                                    </Link>
                                </div>
                                <Separator />
                                <Button onClick={HandleApply} type="submit" className="text-[#dfe9e9] dark:text-[#191919]"><FontAwesomeIcon icon={faPage} className="mr-1"/> Apply </Button>
                            </form>
                            </CardContent>
                        </Card>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
