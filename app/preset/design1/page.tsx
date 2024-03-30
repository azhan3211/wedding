import Comment from "@/components/preset/comment"
import Events from "@/components/preset/events/events"
import Events2 from "@/components/preset/events/events2"
import Galleries from "@/components/preset/galleries/galleries"
import Header from "@/components/preset/header"
import Hero from "@/components/preset/heroes/hero"
import Hero2 from "@/components/preset/heroes/hero2"
import Hero3 from "@/components/preset/heroes/hero3"
import Hero4 from "@/components/preset/heroes/hero4"
import Introduction from "@/components/preset/introductions/introduction"
import Introduction2 from "@/components/preset/introductions/introduction2"
import Location from "@/components/preset/location"
import Stories from "@/components/preset/stories/stories"
import Stories2 from "@/components/preset/stories/stories2"

export default function Design1() {

    const images = [
        "../images/hero-dummy.jpg",
        "../images/hero-dummy.jpg",
        "../images/hero-dummy.jpg",
        "../images/hero-dummy.jpg",
        "../images/hero-dummy.jpg",
        "../images/hero-dummy.jpg",
        "../images/hero-dummy.jpg",
        "../images/hero-dummy.jpg",
        "../images/hero-dummy.jpg",
    ]

    return <div className="w-full flex-col h-screen bg-white">
        <Header/>
        <Hero2 src="../images/hero-dummy.jpg"/>
        <Hero src="../images/hero-dummy.jpg"/>
        <Hero4 src="../images/hero-dummy.jpg"/>
        <Hero3 src="../images/hero-dummy.jpg"/>
        <Introduction/>
        <Introduction2/>
        <Stories
            loveStoryModel={
                [
                    
                ]
            }/>
        <Events/>
        <Events2/>
        <Galleries
            images={images}/>
        <Stories2
            images={
                [
                    "../images/hero-dummy.jpg",
                    "../images/hero-dummy.jpg",
                    "../images/hero-dummy.jpg"
                ]
            }/>
        <Comment/>
        <Location/>
    </div>
}