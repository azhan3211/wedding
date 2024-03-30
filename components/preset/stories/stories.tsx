import Design2 from "../design2"

interface StoriesProp {
    loveStoryModel: Array<StoryModel>
}

export class StoryModel {
    constructor(
        readonly name: string,
        readonly dateTime: string,
        readonly image: string
    ) {}
}

export default function Stories({ loveStoryModel }: StoriesProp) {
    return <Design2 backgroundColor="design2-secondary" backgroundImage="flower">
        <div className="w-[1400px] flex flex-col justify-center items-center">
            <p className="text-[80px] text-gray-800 uppercase">Our Love Story</p>
            <p className="text-[20px] text-gray-800">This is how it all started</p>
            <div className="flex flex-col justify-center items-center gap-y-[80px] relative mt-[80px]">
                <div className="h-[100% - 150px] w-[4px] bg-gray-600 opacity-45 top-[75px] bottom-[75px] absolute"/>
                {
                    loveStoryModel.map((data, index) => {
                        if (index == 0) {
                            return <div className="flex flex-row w-full justify-center items-center gap-x-[120px] z-0">
                                <div className="w-[200px] flex justify-end items-center z-10">
                                    <img src={data.image} className="w-[150px] h-[150px] object-cover rounded-[50%]" />
                                </div>
                                <div className="rotate-45 size-[20px] bg-orange-400"/>
                                <div className="w-[200px] flex flex-col justify-center items-start">
                                    <p className="text-[20px] font-bold w-fit">{data.name}</p>
                                    <p className="text-[14px] font-semibold w-fit">{data.dateTime}</p>
                                </div>
                            </div>
                        } else if (index % 2 == 0) {
                            return <div className="flex flex-row w-full justify-center items-center gap-x-[120px] z-0">
                                <div className="w-[200px] flex justify-end items-center z-10">
                                    <img src={data.image} className="w-[150px] h-[150px] object-cover rounded-[50%]" />
                                </div>
                                <div className="rotate-45 size-[20px] bg-orange-400"/>
                                <div className="w-[200px] flex flex-col justify-center items-start">
                                    <p className="text-[20px] font-bold w-fit">{data.name}</p>
                                    <p className="text-[14px] font-semibold w-fit">{data.dateTime}</p>
                                </div>
                            </div>
                        } else {
                            return <div className="flex flex-row w-full justify-center items-center gap-x-[120px] z-0">
                                <div className="w-[200px] flex flex-col justify-center items-end">
                                    <p className="text-[20px] font-bold w-fit">{data.name}</p>
                                    <p className="text-[14px] font-semibold w-fit">{data.dateTime}</p>
                                </div>
                                <div className="rotate-45 size-[20px] bg-orange-400"/>
                                <div className="w-[200px] flex justify-start items-center">
                                    <img src={data.image} className="w-[150px] h-[150px] object-cover rounded-[50%]" />
                                </div>
                            </div>
                        }
                    })
                }
            </div>
        </div>
    </Design2>
}