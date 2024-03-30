interface Events2Props {
    eventModel: Array<Event2Model>
}

class Event2Model {
    constructor(
        readonly name: string,
        readonly dateTime: string,
        readonly image: string
    ) {}
}

export default function Events2() {
    return <div className="flex flex-col w-full justify-center items-center py-[80px] bg-white">
        <div className="flex flex-col w-[1400px]">
            <p className="w-full text-center text-[80px] pb-[40px]">Events</p>
            <div className="flex flex-row justify-center gap-x-[100px]">
                <img className="w-[20%] aspect-[1/1] rounded-[50%] object-cover" src="images/hero-dummy.jpg"/>
                <div className="flex flex-col justify-center w-[50%]">
                    <p className="text-[40px]">Event Name</p>
                    <p className="mt-[20px]">Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet.</p>
                    <p className="w-fit text-white font-bold mt-[20px] px-[20px] py-[5px] bg-orange-400 rounded-[20px] text-center ">10pm - 12pm</p>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-x-[100px] mt-[60px]">
                <div className="flex flex-col justify-center w-[50%]">
                    <p className="text-[40px]">Event Name</p>
                    <p className="mt-[20px]">Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet.</p>
                    <p className="w-fit text-white font-bold mt-[20px] px-[20px] py-[5px] bg-orange-400 rounded-[20px] text-center ">10pm - 12pm</p>
                </div>
                <img className="w-[20%] aspect-[1/1] rounded-[50%] object-cover" src="images/hero-dummy.jpg"/>
            </div>
            <div className="flex flex-row justify-center gap-x-[100px] mt-[60px]">
                <img className="w-[20%] aspect-[1/1] rounded-[50%] object-cover" src="images/hero-dummy.jpg"/>
                <div className="flex flex-col justify-center w-[50%]">
                    <p className="text-[40px]">Event Name</p>
                    <p className="mt-[20px]">Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet.</p>
                    <p className="w-fit text-white font-bold mt-[20px] px-[20px] py-[5px] bg-orange-400 rounded-[20px] text-center ">10pm - 12pm</p>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-x-[100px] mt-[60px]">
                <div className="flex flex-col justify-center w-[50%]">
                    <p className="text-[40px]">Event Name</p>
                    <p className="mt-[20px]">Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet.</p>
                    <p className="w-fit text-white font-bold mt-[20px] px-[20px] py-[5px] bg-orange-400 rounded-[20px] text-center ">10pm - 12pm</p>
                </div>
                <img className="w-[20%] aspect-[1/1] rounded-[50%] object-cover" src="images/hero-dummy.jpg"/>
            </div>
        </div>
    </div>
}