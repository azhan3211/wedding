import UndanganKuButton from "@/components/button/button"
import { useState } from "react"
import EventComponent, { EventCreateModel } from "./event"

export default function EventInformationCreate() {

    const [events, setEvents] = useState<EventCreateModel[]>([])
    

    const handleAddEvent = () => {
        setEvents([...events, new EventCreateModel("", "", "")])
    }

    const handleEventNameChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newEvents = [...events]
        newEvents[index] = {
            ...newEvents[index],
            name: event.target.value
        }
        setEvents(newEvents)
    }

    const handleEventDateChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newEvents = [...events]
        newEvents[index] = {
            ...newEvents[index],
            date: event.target.value
        }
        setEvents(newEvents)
    }

    const handleImageSelected = (index: number, image: string) => {
        const newEvents = [...events]
        newEvents[index] = {
            ...newEvents[index],
            photos: image
        }
        setEvents(newEvents)
    }

    const removeEvent = (index: number) => {
        const updateEvents = [...events]
        updateEvents.splice(index, 1)
        setEvents(updateEvents)
    };

    return <div className="w-full flex flex-col mt-[40px] rounded-[8px] px-[20px] pt-[20px] pb-[120px] shadow-lg relative border-2 border-gray-300">
        <p className="text-[24px] font-bold text-gray-600 mb-[20px]">Events Information</p>
        {
            events.map((event, index) => (
                <EventComponent 
                    event={event} 
                    onChangeDate={(data) => handleEventDateChange(index, data)} 
                    onChangeName={(data) => handleEventNameChange(index, data)} 
                    onRemove={() => removeEvent(index)}
                    onImageSelected={(image) => handleImageSelected(index, image)}
                    key={index}/>
            ))
        }
        <div className="flex flex-row gap-x-[20px] absolute right-[20px] bottom-[20px]">
            <UndanganKuButton onClick={handleAddEvent} text="Add Event"/>
            <UndanganKuButton text="Save"/>
        </div>
    </div>
}