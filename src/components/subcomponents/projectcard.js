export const Project = ({ title, image, description, deploylink, repolink }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full mx-2 my-2 hover:scale-110">
            <figure><img src={image} alt="screenshot" /></figure>
        < div className = "card-body" >
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <a className="btn btn-primary" href={repolink} target={"_blank"}>Repository</a>
                    <a className="btn btn-primary" href={deploylink} target={"_blank"}>Deployed</a>
                </div>
            </div >
        </div >
    )
}