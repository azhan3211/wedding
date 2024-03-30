import React from "react";
import AddressInformationCreate from "./components/addressinformationcreate";
import BrideInformationCreate from "./components/brideinformationcreate";
import ContactInformationCreate from "./components/contactinformationcreate";
import DateInformationCreate from "./components/dateinformationcreate";
import EventInformationCreate from "./components/eventinformationcreate";
import GalleryInformationCreate from "./components/gallerieinformationcreate";
import MainImageInformationCreate from "./components/mainimageinformationcreate";
import QuoteInformationCreate from "./components/quoteinformationcreate";

export default function CreateInvitationComponent() {
    return <div className="w-full flex flex-col items-center px-[100px] py-[80px]">
        <div className="flex flex-col items-center w-[1000px]">
            <p className="text-[40px] font-bold text-gray-600">Buat Undangan</p>
            <MainImageInformationCreate/>
            <BrideInformationCreate/>
            <AddressInformationCreate/>
            <DateInformationCreate/>
            <QuoteInformationCreate/>
            <EventInformationCreate/>
            <GalleryInformationCreate/>
            <ContactInformationCreate/>
        </div>
    </div>
}