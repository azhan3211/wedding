import BrideInfo2, { BrideModel } from "@/components/preset/brideinfo/brideinfo2"
import Comment from "@/components/preset/comment"
import Galleries from "@/components/preset/galleries/galleries"
import Hero2 from "@/components/preset/heroes/hero2"
import Location from "@/components/preset/location"
import QuoteComponent from "@/components/preset/quote"
import Stories, { StoryModel } from "@/components/preset/stories/stories"
import Stories2 from "@/components/preset/stories/stories2"

export default function Design2() {
    
    const images = [
        "../images/hero-dummy.jpg",
        "../images/hero-dummy.jpg",
        "../images/hero-dummy.jpg"
    ]

    const loveStories = [
        new StoryModel(
            "Event 1",
            "20 September 2023",
            "../images/hero-dummy.jpg"
        ),
        new StoryModel(
            "Event 2",
            "21 September 2023",
            "../images/hero-dummy.jpg"
        ),
        new StoryModel(
            "Event 3",
            "22 September 2023",
            "../images/hero-dummy.jpg"
        ),
        new StoryModel(
            "Event 4",
            "23 September 2023",
            "../images/hero-dummy.jpg"
        )
    ]

    const femaleBride = new BrideModel(
        "Perempuan",
        "Dari London",
        "../images/hero-dummy.jpg",
        "instagram"
    )

    const maleBride = new BrideModel(
        "Laki-laki",
        "Dari London",
        "../images/hero-dummy.jpg",
        "instagram"
    )

    return <div className="w-full flex-col h-screen bg-white">
        <Hero2 src="../images/hero-dummy.jpg"/>
        <BrideInfo2
            femaleBride={femaleBride}
            maleBride={maleBride}/>
        <QuoteComponent/>
        <Stories
            loveStoryModel={loveStories}/>
        <Galleries
            images={images}/>
        <Stories2
            images={images}/>
        <Comment/>
        <Location/>
    </div>
}