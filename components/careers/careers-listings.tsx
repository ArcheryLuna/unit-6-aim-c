import React, { useState, useEffect } from "react"

const listings: {
    listingId: number,
    listingName: string,
    listingDescription: string,
    listingRequirements: string[],
    listingLanguages: string[],
    listingPublisher: string,
    listingPublisherImage: string
}[] = [{
    listingId: 1,
    listingName: "NextJS Frontend Developer",
    listingDescription: "Help wanted! Fast and effient typescript developer that knows react and nextjs",
    listingRequirements: ["GCSE Math", "GCSE English"],
    listingLanguages: ["Typescript", "Javascript", "GoLang", "Rust"],
    listingPublisher: "Chris Sean",
    listingPublisherImage: "/Employees/developers/lead-dev-6.jpeg"
}]

export function ListingsSidebar({ currrentListing, setCurrentListing }:{ currentListing: any, setCurrentListing: any}) {
    
}

export function ListingsContent({ currentListing }:{
    currentListing: {
        listingId: number,
        listingName: string,
        listingDescription: string,
        listingRequirements: string[],
        listingLanguages: string[],
        listingPublisher: string,
        listingPublisherImage: string
}}) {
    return (
        <div>
            <h1>{currentListing.listingName}</h1>
            <p>{currentListing.listingDescription}</p>
            <h2>Requirements</h2>
            <ul>
                {currentListing.listingRequirements.map((req, i) => <li key={i}>{req}</li>)}
            </ul>
            <h2>Languages</h2>
            <ul>
                {currentListing.listingLanguages.map((lang, i) => <li key={i}>{lang}</li>)}
            </ul>
            <h2>Published by {currentListing.listingPublisher}</h2>
            <img src={currentListing.listingPublisherImage} alt={currentListing.listingPublisher}/>
        </div>
    )
}
