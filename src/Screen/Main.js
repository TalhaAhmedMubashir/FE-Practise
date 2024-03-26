import FBOptions from "../Component/FBOptions";

export default function Main(){
    let list_1 = [
        {"Friends" : "#"}, 
        {"Market Place": "#"}, 
        {"Group":"#"}, 
        {"Watch":"#"}
    ]
    let list_2 = [
        {"Hidden Options" :"#"}, 
        {"Hidden Options": "#"}, 
        {"Hidden Options":"#"}, 
        {"Hidden Options":"#"}
    ]

    let list_3 = [
        {
            game_A : {
                title: "Super Mario",
                Followers:"20k",
                DevelopedBy : "ASAK",
                Watching : "12k"
            }
        }
    ]
    
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 col-sm-4 ">
                    <div className="row"><FBOptions sectionIdentity={"Facebook Feature"} buttonText={"Show More"} sectionHeading = {"facebook"} sectionHeadingTag = {"h2"} displayOptions={list_1} hiddenOptions={list_2}/></div>
                    <div className="row"><FBOptions sectionIdentity={"Gaming Feature"} buttonText={"Show More"} sectionHeading = {"Gaming"}  sectionHeadingTag = {"h4"} displayOptions={list_1} hiddenOptions={list_2}/></div>
                </div>
                <div className="col-lg-8 col-md-4 "><FBOptions sectionIdentity={"Post Feature"} buttonText={"Show More"} sectionHeading = {""} sectionHeadingTag = {"h4"} displayOptions={list_1} hiddenOptions={list_2}/></div>
                <div className="col-md-2 col-sm-4 "><FBOptions sectionIdentity={"User Feature"} buttonText={"Show More"} sectionHeading = {""} sectionHeadingTag = {"h4"} displayOptions={list_1} hiddenOptions={list_2}/></div>
            </div>
        </div>
    )
}