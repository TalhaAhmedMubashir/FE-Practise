import { useState } from "react"

export default function FBOptions(props) {
    const [hiddenoption, sethiddenoption] = useState(props.buttonText || "Show More")
    return (
        <section className="FBOptions">
            <div>
                <props.sectionHeadingTag className="heading-FBOptions">
                    {props.sectionHeading}
                </props.sectionHeadingTag>
            </div>
            <ul className="FBOptions-ul">
                <Section_1_upper_portion displayOptions={props.displayOptions} />
            </ul>
            <button style={{ marginBottom: (hiddenoption === "Show More" ? "1.2rem" : "0rem") }} onClick={() => sethiddenoption((hiddenoption !== "Show More" ? "Show More" : "Show Less"))}>{hiddenoption}</button>
            <ul className="FBOptions-ul" style={{ display: (hiddenoption === "Show More" ? "None" : "Block") }}>
                <Section_1_lower_portion displayOptions={props.displayOptions} />
            </ul>
        </section>
    )
}


const Section_1_upper_portion = (props) => {
    return (
        <>
            {
                props.displayOptions ? props.displayOptions.map(
                    Obj => {
                        const [[key, link]] = Object.entries(Obj);
                        return <li><a href={link}>{key}</a></li>
                    }
                ) : null
            }
        </>
    )
}

const Section_1_lower_portion = (props) => {
    return (
        <>
            {
                props.displayOptions ? props.displayOptions.map(
                    Obj => {
                        const [[key, link]] = Object.entries(Obj);
                        return <li><a href={link}>{key}</a></li>
                    }
                ) : null
            }
        </>
    )
}